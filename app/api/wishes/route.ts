import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url)
  const params = url.searchParams
  try {
    const client = await clientPromise;
    const db = client.db("felicya_sweet17");
    const limit = 10;
    const page = parseInt(params.get("page") ?? "1");
    const skip = (page - 1) * limit;

    const wishes = await db
      .collection("wishes")
      .find({})
      .sort({ _id: params.get("sort")==="newest" ? -1 : 1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await db.collection("wishes").countDocuments();
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      wishes,
      total_pages: totalPages,
      currPage: page,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch wishes" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, message, createdAt } = formData;
    const client = await clientPromise;
    const db = client.db("felicya_sweet17");
    await db.collection("wishes").insertOne({
      name: name,
      message: message,
      date: new Date(createdAt),
    });
    return NextResponse.json(
      { message: "Wish succesfully sent!" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to send wish" }, { status: 500 });
  }
}
