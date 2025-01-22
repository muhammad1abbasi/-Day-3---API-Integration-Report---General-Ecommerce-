"use client"; 

import { useCart } from "../context/CartContext";

// Updated Product interface with _id
interface Product {
  _id: string;  // Use _id instead of id
  name: string;
  price: number;
  image_url: string;
  // Add other fields relevant to your product
}

export default function AddToCart({ 
  product, 
}: { 
  product: Product;  // Using the updated Product type
}) {
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
