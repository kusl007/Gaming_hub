import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Review from "@/models/Review";
import { getAuthUserFromCookies } from "@/lib/auth";

type Params = { params: Promise<{ gameId: string }> };

export async function GET(req: Request, { params }: Params) {
  const { gameId } = await params;
  const productId = Number(gameId);
  const { searchParams } = new URL(req.url);
  const productType = searchParams.get("type") === "hardware" ? "hardware" : "game";

  if (!productId) {
    return NextResponse.json({ error: "Invalid product id" }, { status: 400 });
  }

  await dbConnect();
  const reviews = await Review.find({
    $or: [
      // New format
      { productId, productType },
      // Legacy format (before productType/productId migration)
      { gameId: productId, productType: { $exists: false } },
    ],
  })
    .sort({ createdAt: -1 })
    .limit(20)
    .lean();

  return NextResponse.json({ reviews }, { status: 200 });
}

export async function POST(req: Request, { params }: Params) {
  const user = await getAuthUserFromCookies();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { gameId } = await params;
  const productId = Number(gameId);
  const { content, rating, productType } = await req.json();
  const safeProductType = productType === "hardware" ? "hardware" : "game";

  if (!productId || !content || !rating) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  await dbConnect();
  const review = await Review.create({
    userId: user.id,
    username: user.username,
    gameId: productId,
    productId,
    productType: safeProductType,
    rating: Math.max(1, Math.min(5, Number(rating))),
    content: String(content).trim(),
  });

  return NextResponse.json({ message: "Review created", review }, { status: 201 });
}
