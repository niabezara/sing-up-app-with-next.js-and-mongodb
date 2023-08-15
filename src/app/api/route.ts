import { NextResponse } from "next/server";
import { connectDB, User } from "../lib/mongodb";

connectDB();

export async function POST(req: any) {
  const { data } = await req.json();

  try {
    const newUser = await User.create(data);
    console.log(newUser);
    return NextResponse.json({ status: "success", data: { user: newUser } });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", message: error });
  }
}
