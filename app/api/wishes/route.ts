import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("felicya_sweet17");
    const wishes = await db.collection("wishes").find({}).toArray();

    return NextResponse.json(wishes);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch wishes" },
      { status: 500 },
    );
  }
}

export async function POST(){

}
