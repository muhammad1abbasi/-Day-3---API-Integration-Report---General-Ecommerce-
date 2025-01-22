"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [form, setForm] = useState({ customerName: "", email: "", address: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, totalAmount: 50, cartItems: [] }), // Replace with real cart data
    });

    const data = await res.json();
    setLoading(false);
    setMessage(data.message);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl">Checkout</h1>
      <input name="customerName" placeholder="Name" onChange={handleChange} className="border p-2 my-2 w-full" />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-2 my-2 w-full" />
      <textarea name="address" placeholder="Address" onChange={handleChange} className="border p-2 my-2 w-full" />
      <button onClick={handleSubmit} disabled={loading} className="bg-blue-500 text-white p-2 rounded">
        {loading ? "Processing..." : "Place Order"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
