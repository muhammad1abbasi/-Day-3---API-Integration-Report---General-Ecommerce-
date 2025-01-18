import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export default async function Featured() {
  const Query = `*[_type == "product"] [3..8] {
      _id,
      name,
      price,
      category,
      discountPercentage,
      "image_url": image.asset->url
    }`;

  const data = await client.fetch(Query);

  return (
    <div className="p-6 my-10">
      <h1 className="text-center font-bold text-3xl mb-8 text-blue-950">
        Latest Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((val: any, i: number) => (
          <div
            key={val._id}
            className="rounded-lg border p-5 flex flex-col items-center space-y-4 shadow-md hover:shadow-lg transition duration-300"
          >
            <Image
              src={val.image_url}
              alt={val.name}
              width={200}
              height={200}
              className="rounded object-contain"
            />
            <h1 className="text-lg font-bold text-gray-900">{val.name}</h1>
            <p className="text-green-600 font-semibold text-lg">${val.price}</p>
            <div className="flex space-x-2">
              <p className="text-red-600 text-xl font-bold">
                Special Discounts
              </p>
              <p className="text-red-600 text-lg">$ {val.discountPercentage}</p>
            </div>
            <h2 className="text-gray-600 text-lg">{val.category}</h2>
            {/* <button className="p-2 rounded bg-blue-950 py-2 px-5 text-white hover:bg-white hover:text-black hover:border-4">
          <Link href={"/products"}>Products </Link>
        </button> */}
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center my-10">
      <button className="p-2 rounded bg-blue-950 py-4 px-20 text-white hover:bg-white hover:text-black hover:border-4">
          <Link href={"/products"}>View All</Link>
        </button>
      </div>
    </div>
  );
}
