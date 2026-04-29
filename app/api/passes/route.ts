import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import dbConnect from "@/lib/mongodb";
import Pass from "@/models/Pass";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !(session.user as any).id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { phone, place, purpose, timeOut, timeIn, person, personPhone } = body;

    if (!phone || !place || !purpose || !timeOut || !timeIn) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    await dbConnect();

    const newPass = await Pass.create({
      user: (session.user as any).id,
      phone,
      place,
      purpose,
      timeOut,
      timeIn,
      person,
      personPhone,
      status: "Active",
    });

    return NextResponse.json({ pass: newPass }, { status: 201 });
  } catch (error: any) {
    console.error("Create pass error:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !(session.user as any).id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    // Fetch passes for the logged-in user, sorted by newest first
    const passes = await Pass.find({ user: (session.user as any).id }).sort({ createdAt: -1 });

    return NextResponse.json({ passes }, { status: 200 });
  } catch (error: any) {
    console.error("Fetch passes error:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
