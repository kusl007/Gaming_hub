import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Cart from "@/models/Cart";
import { getAuthUserFromCookies } from "@/lib/auth";

type AddCartBody = {
  productId: number;
  productType: "game" | "hardware";
  title: string;
  platform: string;
  price: number;
  image: string;
  quantity?: number;
};

export async function GET() {
  const user = await getAuthUserFromCookies();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();
  const cart = await Cart.findOne({ userId: user.id });
  return NextResponse.json({ items: cart?.items ?? [] }, { status: 200 });
}

export async function POST(req: Request) {
  const user = await getAuthUserFromCookies();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json()) as AddCartBody;
  const { productId, productType, title, platform, price, image } = body;
  const quantity = Math.max(1, body.quantity ?? 1);

  if (!productId || !productType || !title || !platform || !price || !image) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await dbConnect();
  const cart = await Cart.findOneAndUpdate(
    { userId: user.id },
    { $setOnInsert: { userId: user.id } },
    { new: true, upsert: true }
  );

  const existing = cart.items.find(
    (item: any) => item.productId === productId && item.productType === productType
  );

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.items.push({
      productId,
      productType,
      title,
      platform,
      price,
      image,
      quantity,
    });
  }

  await cart.save();
  return NextResponse.json({ message: "Added to cart", items: cart.items }, { status: 200 });
}
