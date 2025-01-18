import { client } from "@/sanity/lib/client";
import Image from "next/image";
import AddToCart from "../../components/addToCart"; // ✅ Import Client Component
import Link from "next/link";

export default async function ProductDetails({ params }: { params: { product: string } }) {
  const Query = `*[_type == "product" && _id == $id][0] {
    _id,
    name,
    price,
    category,
    discountPercentage,
    description,
    isFeaturedProduct,
    stockLevel,
    "image_url": image.asset->url
  }`;

  const product = await client.fetch(Query, { id: params.product });

  if (!product) {
    return <h1 className="text-center text-2xl font-bold text-red-500">❌ Product Not Found</h1>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap bg-white p-8 rounded-lg shadow-lg">
          <Image
            src={product.image_url}
            alt={product.name}
            width={400}
            height={400}
            className="lg:h-auto h-64 object-cover object-center rounded"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
            </div>

            {/* ✅ AddToCart Button from Client Component */}
            <AddToCart product={product} />

            <Link href="/cheakout">
  <button className="mt-6 bg-indigo-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-600 transition">
    🛍️ Proceed to Checkout
  </button>
</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
