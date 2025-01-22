import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export default async function UserProfile() {
  const Query = `*[_type == "product"] [0..3]{
    _id,
    name,
    price,
    category,
    discountPercentage,
    "image_url": image.asset->url
  }`;

  const data = await client.fetch(Query);

  const UserQuery = `*[_type == "user"][0] {
    _id,
    name,
    email,
    "image_url": image.asset->url,
    address
  }`;

  const userData = await client.fetch(UserQuery);

  return (
    <div className="container mx-auto p-4 my-10">
      <h1 className="flex justify-center items-center font-bold text-5xl">
        Your Profile
      </h1>

      <div className="flex flex-col md:flex-row justify-evenly items-center space-x-0 md:space-x-5 my-10">
        {/* User Profile Card */}
        <div className="flex justify-center items-center w-full md:w-[400px]">
          <div className="py-10 px-5 border rounded-lg w-full h-auto shadow-lg bg-gray-400 flex flex-col items-center space-y-4">
            {/* Profile Image */}
            {userData.image_url && (
              <Image
                src={userData.image_url}
                alt="User Profile"
                width={300}
                height={300}
                className="rounded-full border-4 border-white"
              />
            )}
            {/* User Details */}
            <h1 className="text-2xl font-bold">{userData.name}</h1>
            <p className="text-lg">{userData.email}</p>
            <p className="text-md text-gray-700 text-center">
              {userData.address || "No address available"}
            </p>
            <input
              type="text"
              placeholder="Enter-Your-Email"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Enter-Your-Possward"
              className="w-full p-2 border rounded-lg"
            />
            <button className="py-3 px-10 rounded-lg bg-gray-700 text-white">
              Login
            </button>
            <button className="py-3 px-10 rounded-lg bg-gray-700 text-white">
              <Link href={`/userprofile/${userData._id}`}>
                <button className="py-3 px-10 rounded-lg bg-gray-700 text-white">
                  View All History
                </button>
              </Link>
            </button>
          </div>
        </div>

        {/* Orders & History */}
        <div className="items-center border rounded-lg w-full md:w-[900px] shadow-lg bg-gray-400 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-sans">For You Orders</h1>
            <Link href={"/products"}>View All Orders</Link>
          </div>

          <div className="flex flex-wrap justify-between items-center py-10">
            <div className="flex flex-col space-y-2 w-full md:w-1/5">
              <Image src={"/wallet.png"} alt="nul" width={50} height={50} />
              <h1 className="font-bold">To Pay</h1>
            </div>
            <div className="w-full md:w-1/5">
              <Image src={"/bucket.png"} alt="nul" width={50} height={50} />
              <h1 className="font-bold">To Ship</h1>
            </div>
            <div className="flex flex-col space-y-2 w-full md:w-1/5">
              <Image
                src={"/delivery-truck.png"}
                alt="nul"
                width={50}
                height={50}
              />
              <h1 className="font-bold">To Receive</h1>
            </div>
            <div className="flex flex-col space-y-2 w-full md:w-1/5">
              <Image src={"/review.png"} alt="nul" width={50} height={50} />
              <h1 className="font-bold">To Review</h1>
            </div>
            <div className="flex flex-col space-y-2 w-full md:w-1/5">
              <Image
                src={"/product-return.png"}
                alt="nul"
                width={50}
                height={50}
              />
              <h1 className="font-bold">To Return & Cancellations</h1>
            </div>
          </div>

          <div className="flex flex-col space-y-5 xl:space-y-0 xl:flex-row justify-evenly items-center py-10">
            <div className="rounded py-10 px-24 bg-gray-600">
              <h1 className="text-lg font-bold text-white">ShopX Wallet</h1>
            </div>
            <div className="rounded py-10 px-24 bg-gray-600">
              <h1 className="text-lg font-bold text-white">Payment Options</h1>
            </div>
          </div>

          <div className="p-10 py-24">
            <h1 className="text-center font-bold text-3xl mb-8 text-blue-950">
              Products History
            </h1>

            <div className="flex justify-evenly">
              <h1 className="text-xl text-blue-950 font-bold font-sans">
                Date of Receive: 15/01/2020
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
