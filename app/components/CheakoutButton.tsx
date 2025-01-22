"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutButton({ cartItems }: { cartItems: any[] }) {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems }),
    });

    const { id } = await res.json();
    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({ sessionId: id });
  };

  return (
    <button onClick={handleCheckout} className="bg-blue-500 text-white p-3 rounded">
      Proceed to Checkout
    </button>
  );
}
