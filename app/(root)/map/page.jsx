"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MdDirectionsBike, MdVerified } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const page = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div>
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

      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent className="p-3 px-6">
          <div className="flex justify-between items-center mb-2 gap-2 border border-green-500 rounded-md p-1 hover:bg-slate-300 focus:bg-slate-300">
            <div className="w-10 h-10 rounded-full bg-green-500"></div>
            <div className="flex flex-col">
              <p className="font-bold">Okeke Arinze</p>
              <p className="text-slate-600 text-sm"> 10mins away from you</p>
            </div>
            <MdDirectionsBike className="text-2xl" />
          </div>

          <div className="flex justify-between items-center mb-2 gap-2 border border-green-500 rounded-md p-1 hover:bg-slate-300 focus:bg-slate-300">
            <div className="w-10 h-10 rounded-full bg-green-500"></div>
            <div className="flex flex-col">
              <p className="font-bold">Ezenwa Jesse </p>
              <p className="text-slate-600 text-sm"> 15mins away from you</p>
            </div>
            <MdDirectionsBike className="text-2xl" />
          </div>

          <div className="flex justify-between items-center mb-2 gap-2 border border-green-500 rounded-md p-1 hover:bg-slate-300 focus:bg-slate-300">
            <div className="w-10 h-10 rounded-full bg-green-500"></div>
            <div className="flex flex-col">
              <p className="font-bold">Iheakola Emmanuel </p>
              <p className="text-slate-600 text-sm"> 15mins away from you</p>
            </div>
            <MdDirectionsBike className="text-2xl" />
          </div>

          <button
            onClick={handleOpenModal}
            className="bg-green-600 w-full text-xl text-white p-4 rounded-xl"
          >
            Select Rider
          </button>
        </DrawerContent>
      </Drawer>

      <Dialog open={openModal}  className="mx-5 w-20">
        <DialogContent className='flex flex-col  items-center justify-center w-fit'>
          <h1 className="font-bold">Order Booked</h1>
          <MdVerified className="text-green-600 text-5xl" />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default page;
