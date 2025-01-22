import Image from "next/image";
import { client } from "@/sanity/lib/client";

// Define types for the fetched data
type User = {
  _id: string;
  name: string;
  email: string;
  image_url: string;
  address: string;
};

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

export default async function UserHistory({ params }: { params: { userhistory: string } }) {
  console.log("Fetching User History for:", params.userhistory);

  const UserHistoryQuery = `*[_type == "user" && _id == $id][0] {
    _id,
    name,
    email,
    "image_url": image.asset->url,
    address
  }`;

  const UserDatahist: User | null = await client.fetch(UserHistoryQuery, { id: params.userhistory });

  if (!UserDatahist) {
    return <h1 className="text-center text-2xl font-bold text-red-500">User Not Found</h1>;
  }

  const Query = `*[_type == "product"] [0..4] {
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

  const products: Product[] = await client.fetch(Query);

  return (
    <div className="flex flex-col space-y-5">
      <h1 className="flex justify-center items-center font-bold text-5xl font-sans">User History</h1>

      <div className="justify-center items-center flex my-20">
        <div className="bg-gray-600 rounded-lg shadow-lg p-4 w-[1020px]">
          <div className="flex flex-col space-y-10 justify-center items-center">

            <div className="flex justify-center items-center flex-col space-y-5">
              {UserDatahist.image_url && (
                <Image
                  src={UserDatahist.image_url}
                  alt="User Profile"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-white"
                />
              )}
              <h1 className="text-2xl font-bold text-white">{UserDatahist.name}</h1>
              <p className="text-lg text-gray-300">{UserDatahist.email}</p>
              <p className="text-md text-gray-400">{UserDatahist.address || "No address available"}</p>
            </div>

            <h2 className="text-3xl font-bold text-white">Purchased Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
              {products.length > 0 ? (
                products.map((val) => (
                  <div
                    key={val._id}
                    className="rounded-lg border p-5 flex flex-col items-center space-y-4 shadow-md hover:shadow-lg transition duration-300 bg-white"
                  >
                    <Image
                      src={val.image_url}
                      alt={val.name}
                      width={200}
                      height={200}
                      className="rounded object-contain"
                    />
                    <h1 className="text-lg font-bold text-gray-900">{val.name}</h1>
                    <p className="text-gray-500 text-center px-4">{val.description || "No description available."}</p>
                    <p className="text-green-600 font-semibold text-lg">${val.price}</p>
                    <h2 className="text-gray-600 text-lg">{val.category}</h2>
                    <button className="flex py-2 px-5 rounded bg-blue-500 text-white font-sans">
                      Buy Again
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-300 text-lg col-span-full">No purchase history found.</p>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-5">
            <input type="text" placeholder="Share Your Reviews" className="py-3 px-10 rounded border bg-gray-300" />
            <button className="py-3 px-7 rounded-lg bg-gray-700">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
