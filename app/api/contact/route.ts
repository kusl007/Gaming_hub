import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import ContactInquiry from "@/models/ContactInquiry";
import { getAuthUserFromCookies } from "@/lib/auth";

type ContactBody = {
  name: string;
  email: string;
  category: "Order issue" | "Activation issue" | "Tournament question" | "General inquiry";
  message: string;
};

const validCategories = new Set([
  "Order issue",
  "Activation issue",
  "Tournament question",
  "General inquiry",
]);

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactBody;
    const { name, email, category, message } = body;

    if (!name || !email || !category || !message) {
      return NextResponse.json(
        { error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    if (!validCategories.has(category)) {
      return NextResponse.json({ error: "Invalid category selected." }, { status: 400 });
    }

    await dbConnect();
    const authUser = await getAuthUserFromCookies();

    const inquiry = await ContactInquiry.create({
      userId: authUser?.id ?? undefined,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      category,
      message: message.trim(),
    });

    return NextResponse.json(
      {
        message: "Your inquiry has been submitted successfully.",
        inquiry: { id: inquiry._id, status: inquiry.status },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to submit inquiry at this time." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const authUser = await getAuthUserFromCookies();
    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const inquiries = await ContactInquiry.find({ userId: authUser.id })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ inquiries }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Unable to fetch inquiries." }, { status: 500 });
  }
}
