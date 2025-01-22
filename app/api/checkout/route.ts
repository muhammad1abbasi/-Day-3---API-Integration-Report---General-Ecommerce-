import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const { customerName, email, address, totalAmount, cartItems } = await req.json();
    
    await client.create({
      _type: "order",
      customerName,
      email,
      address,
      totalAmount,
      cartItems,
      status: "Pending",
    });

    return NextResponse.json({ message: "Order placed successfully!" }, { status: 201 });
  } catch {
    // Simply omit _error here
    return NextResponse.json({ error: "Failed to place order" }, { status: 500 });
  }
}
