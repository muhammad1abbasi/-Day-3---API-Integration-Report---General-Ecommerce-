import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

// Define the product type
type Product = {
  _id: string;
  name: string;
  price: number;
  category: string;
  discountPercentage: number;
  description: string;
  isFeaturedProduct: boolean;
  stockLevel: number;
  image_url: string;
};

export default async function ProductsListing() {
  const Query = `*[_type == "product"] {
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

  const data: Product[] = await client.fetch(Query);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="flex justify-center items-center">
        <Image
          src={"/5251326.jpg"}
          alt="null"
          width={1500}
          height={1500}
          className="object-contain transition-transform duration-500 group-hover:scale-110 rounded-lg"
        />
      </div>

      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 animate-fade-in my-24">
         Our Exclusive Products 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((val) => (
          <Link key={val._id} href={`/products/${val._id}`}>
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 p-6 flex flex-col items-center space-y-4 border border-gray-200 cursor-pointer">
              <div className="relative w-48 h-48">
                <Image
                  src={val.image_url}
                  alt={val.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 text-center">
                {val.name}
              </h1>
              <p className="text-gray-500 text-center px-4">
                {val.description || "No description available."}
              </p>
              <p className="text-sm text-gray-700"> Stock: {val.stockLevel}</p>
              <h2 className="text-gray-600 text-lg"> {val.category}</h2>
              <p className="text-green-600 font-semibold text-xl">${val.price}</p>

              {val.discountPercentage > 0 && (
                <div className="flex space-x-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-bold">
                  <p> Special Discount</p>
                  <p>${val.discountPercentage}</p>
                </div>
              )}

              {val.isFeaturedProduct && (
                <span className="absolute top-3 left-3 bg-yellow-400 text-white px-3 py-1 text-xs font-bold uppercase rounded-full">
                   Featured
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
