import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import TournamentRegistration from "@/models/TournamentRegistration";
import { getAuthUserFromCookies } from "@/lib/auth";

type RegisterBody = {
  fullName: string;
  email: string;
  gamerTagOrTeamName: string;
  tournamentName: string;
  platform: "PC" | "PlayStation 5" | "Xbox Series X|S";
  countryOrRegion: string;
  experience?: string;
};

const validPlatforms = new Set(["PC", "PlayStation 5", "Xbox Series X|S"]);

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as RegisterBody;
    const {
      fullName,
      email,
      gamerTagOrTeamName,
      tournamentName,
      platform,
      countryOrRegion,
      experience = "",
    } = body;

    if (
      !fullName ||
      !email ||
      !gamerTagOrTeamName ||
      !tournamentName ||
      !platform ||
      !countryOrRegion
    ) {
      return NextResponse.json(
        { error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    if (!validPlatforms.has(platform)) {
      return NextResponse.json({ error: "Invalid platform selected." }, { status: 400 });
    }

    await dbConnect();
    const authUser = await getAuthUserFromCookies();

    const registration = await TournamentRegistration.create({
      userId: authUser?.id ?? undefined,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      gamerTagOrTeamName: gamerTagOrTeamName.trim(),
      tournamentName: tournamentName.trim(),
      platform,
      countryOrRegion: countryOrRegion.trim(),
      experience: experience.trim(),
    });

    return NextResponse.json(
      {
        message: "Tournament registration submitted successfully.",
        registration: {
          id: registration._id,
          status: registration.status,
          tournamentName: registration.tournamentName,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error?.code === 11000) {
      return NextResponse.json(
        {
          error:
            "You have already registered this gamer tag/team for this tournament using this email.",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Unable to register for tournament at this time." },
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
    const registrations = await TournamentRegistration.find({ userId: authUser.id })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ registrations }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Unable to fetch registrations." }, { status: 500 });
  }
}
