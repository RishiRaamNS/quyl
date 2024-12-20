"use client";
import Image from "next/image";
import React, { useState } from "react";
import DashboardIcon from "@/components/icons/DashboardIcon";
import StudentsIcon from "./icons/StudentsIcon";
import ChapterIcon from "./icons/ChapterIcon";
import HelpIcon from "./icons/HelpIcon";
import ReportsIcon from "./icons/ReportsIcon";
import SettingsIcon from "./icons/SettingsIcon";

function Sidebar() {
  return (
    <div className="bg-white relative py-8 px-4 pl-10 w-[20vw] font-noto font-bold text-[18px]">
      <Image src="/quyl.svg" width={100} height={100} alt="Logo" />

      <div className="relative flex flex-col mt-10 gap-y-4">
        <div className="flex items-center justify-start text-gray rounded-[6px] gap-x-4 px-4 group hover:bg-offwhite py-4 cursor-pointer hover:text-black">
          <DashboardIcon className="fill-gray h-8 w-8 group-hover:fill-black" />
          <p>Dashboard</p>
        </div>
        <div className="flex items-center justify-start rounded-[6px] text-gray gap-x-6 px-4 group hover:bg-offwhite py-4 cursor-pointer hover:text-black">
          <StudentsIcon className="fill-gray h-6 w-6 group-hover:fill-black" />
          <p>Students</p>
        </div>
        <div className="flex items-center justify-start rounded-[6px] text-gray gap-x-6 px-4 group hover:bg-offwhite py-4 cursor-pointer hover:text-black">
          <ChapterIcon className="fill-gray h-6 w-6 group-hover:fill-black" />
          <p>Chapter</p>
        </div>
        <div className="flex items-center justify-start rounded-[6px] text-gray gap-x-6 px-4 group hover:bg-offwhite py-4 cursor-pointer hover:text-black">
          <HelpIcon className="fill-gray h-6 w-6 group-hover:fill-black" />
          <p>Help</p>
        </div>
        <div className="flex items-center justify-start rounded-[6px] text-gray gap-x-6 px-4 group hover:bg-offwhite py-4 cursor-pointer hover:text-black">
          <ReportsIcon className="fill-gray h-6 w-6 group-hover:fill-black" />
          <p>Reports</p>
        </div>
        <div className="flex items-center justify-start rounded-[6px] text-gray gap-x-6 px-4 group hover:bg-offwhite py-4 cursor-pointer hover:text-black">
          <SettingsIcon className="fill-gray h-6 w-6 group-hover:fill-black" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
