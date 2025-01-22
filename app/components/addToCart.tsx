"use client"; 

import { useCart } from "../context/CartContext";

export default function AddToCart({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="flex mt-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
    >
       Add to Cart
    </button>
  );
}
