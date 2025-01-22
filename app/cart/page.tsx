"use client";
import { useCart } from "../../app/context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10"> Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cart.map((item) => (
            <div key={item._id} className="bg-white shadow-lg rounded-lg p-6">
              <Image
                src={item.image_url}
                alt={item.name}
                width={200}
                height={200}
                className="rounded object-contain"
              />
              <h2 className="text-xl font-bold mt-2">{item.name}</h2>
              <p className="text-green-600 font-semibold text-lg">${item.price}</p>
              <button
                onClick={() => removeFromCart(item._id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                 Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}






































//"use client";
// import { useCart } from "../../app/context/CartContext";
// import Image from "next/image";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// export default function CartPage() {
//   const { cart, removeFromCart } = useCart();

//   const handleCheckout = async () => {
//     const res = await fetch("/api/checkout", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items: cart }),
//     });

//     const { id } = await res.json();
//     const stripe = await stripePromise;
//     await stripe?.redirectToCheckout({ sessionId: id });
//   };

//   return (
//     <div className="p-10 bg-gray-100 min-h-screen">
//       <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10"> Your Cart</h1>

//       {cart.length === 0 ? (
//         <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {cart.map((item) => (
//               <div key={item._id} className="bg-white shadow-lg rounded-lg p-6">
//                 <Image
//                   src={item.image_url}
//                   alt={item.name}
//                   width={200}
//                   height={200}
//                   className="rounded object-contain"
//                 />
//                 <h2 className="text-xl font-bold mt-2">{item.name}</h2>
//                 <p className="text-green-600 font-semibold text-lg">${item.price}</p>
//                 <button
//                   onClick={() => removeFromCart(item._id)}
//                   className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-center mt-10">
//             <button
//               onClick={handleCheckout}
//               className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

