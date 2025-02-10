import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaClock } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl my-4">Eazz</h1>

      <div className="w-full bg-slate-500 text-white items-center p-3 rounded-2xl flex gap-3">
        <CiSearch className="text-2xl" />
        <input
          type="text"
          name=""
          id=""
          className="w-full bg-transparent outline-none text-white"
          placeholder="Enter Pickup Point"
        />
      </div>

      <div className="flex flex-col gap-3">
        <Link href='/map' className="flex flex-col gap-3 my-3 border">
          <div className="flex items-center gap-2">
            <FaClock />

            <p className="flex flex-col">
              <span className="font-semibold">Eziobodo</span>
              <span className="text-slate-500">Imo</span>
            </p>
          </div>
          <div className="border"></div>
          <div className="flex items-center gap-2">
            <FaClock />

            <p className="flex flex-col">
              <span className="font-semibold">Eziobodo</span>
              <span className="text-slate-500">Imo</span>
            </p>
          </div>
        </Link>
        <div className="flex flex-col gap-3 my-3 border">
          <div className="flex items-center gap-2">
            <FaClock />

            <p className="flex flex-col">
              <span className="font-semibold">Road Safety</span>
              <span className="text-slate-500">Imo</span>
            </p>
          </div>
          <div className="border"></div>
          <div className="flex items-center gap-2">
            <FaClock />

            <p className="flex flex-col">
              <span className="font-semibold">Wetheral</span>
              <span className="text-slate-500">Imo</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 my-3 border">
          <div className="flex items-center gap-2">
            <FaClock />

            <p className="flex flex-col">
              <span className="font-semibold">Obinze</span>
              <span className="text-slate-500">Imo</span>
            </p>
          </div>
          <div className="border"></div>
          <div className="flex items-center gap-2">
            <FaClock />

            <p className="flex flex-col">
              <span className="font-semibold">Ihiagwa</span>
              <span className="text-slate-500">Imo</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
