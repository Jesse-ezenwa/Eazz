import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl">Welcome to Eazz</h1>
      <h4>
        Enjoy Easy and Fast Groceries Delivery at your door step With ease
      </h4>

      <div className="fixed bottom-0 w-full flex gap-6 items-center justify-center">


      <div className=" gap-4  bg-green-600 text-white rounded-md">
        <Link href="/booking" className="font-semibold border-r p-2 ">
          Bookings Page
        </Link>
      </div>
      <div className=" gap-4  bg-green-600 text-white rounded-md">
        <Link href="/map" className="font-semibold border-r p-2">
          Map
        </Link>
      </div>
      </div>
    </div>
  );
};

export default page;
