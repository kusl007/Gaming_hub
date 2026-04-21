import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Cart from "@/models/Cart";
import { getAuthUserFromCookies } from "@/lib/auth";

type Params = { params: Promise<{ itemId: string }> };

export async function PATCH(req: Request, { params }: Params) {
  const user = await getAuthUserFromCookies();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { itemId } = await params;
  const { quantity } = await req.json();
  const safeQuantity = Number(quantity);
  if (!safeQuantity || safeQuantity < 1) {
    return NextResponse.json({ error: "Invalid quantity" }, { status: 400 });
  }

  await dbConnect();
  const cart = await Cart.findOne({ userId: user.id });
  if (!cart) {
    return NextResponse.json({ error: "Cart not found" }, { status: 404 });
  }

  const item = cart.items.id(itemId);
  if (!item) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  item.quantity = safeQuantity;
  await cart.save();

  return NextResponse.json({ message: "Cart updated", items: cart.items }, { status: 200 });
}

export async function DELETE(_: Request, { params }: Params) {
  const user = await getAuthUserFromCookies();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { itemId } = await params;

  await dbConnect();
  const cart = await Cart.findOne({ userId: user.id });
  if (!cart) {
    return NextResponse.json({ error: "Cart not found" }, { status: 404 });
  }

  cart.items.pull({ _id: itemId });
  await cart.save();

  return NextResponse.json({ message: "Item removed", items: cart.items }, { status: 200 });
}
