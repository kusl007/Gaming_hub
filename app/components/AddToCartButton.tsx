"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type AddToCartButtonProps = {
  productId: number;
  productType: "game" | "hardware";
  title: string;
  platform: string;
  price: string;
  image: string;
  className?: string;
};

const parsePrice = (price: string) => {
  const numeric = Number(price.replace(/[^\d.]/g, ""));
  return Number.isNaN(numeric) ? 0 : numeric;
};

export default function AddToCartButton({
  productId,
  productType,
  title,
  platform,
  price,
  image,
  className,
}: AddToCartButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddToCart = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          productType,
          title,
          platform,
          price: parsePrice(price),
          image,
          quantity: 1,
        }),
      });

      if (res.status === 401) {
        router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
        return;
      }

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Could not add item to cart");
      }

      setMessage("Added to cart");
      router.refresh();
    } catch (error: any) {
      setMessage(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-1">
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={isLoading}
        className={className}
      >
        {isLoading ? "Adding..." : "Add to cart"}
      </button>
      {message ? <p className="text-xs text-gray-400">{message}</p> : null}
    </div>
  );
}
