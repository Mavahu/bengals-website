import React from 'react';
import Link from 'next/link';
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { FaRegComments } from 'react-icons/fa';
import { BiMessageSquareDots } from 'react-icons/bi';

export default function SideNavbar() {
  return (
    <div className="p-6 h-screen bg-sidecar z-20 top-0">
      <div className="flex flex-col justify-start item-center">
        <h1 className="text-base text-center cursor-pointer font-bold text-black_marlin border-b border-black_marlin pb-4 w-full">
          <Link href="/">Bengals Unisphere</Link>
        </h1>
        <div className=" my-4 border-b border-black_marlin pb-4 text-irish_coffee">
          <Link href="/katzen">
            <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineSpaceDashboard className="text-2xl  group-hover:text-white " />
              <h3 className="text-base group-hover:text-white font-semibold ">
                Katzen
              </h3>
            </div>
          </Link>
          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <CgProfile className="text-2xl  group-hover:text-white " />
            <h3 className="text-base group-hover:text-white font-semibold ">
              Kater
            </h3>
          </div>
          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <FaRegComments className="text-2xl  group-hover:text-white " />
            <h3 className="text-base  group-hover:text-white font-semibold ">
              <Link href="/wuerfe">Würfe</Link>
            </h3>
          </div>
          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineAnalytics className="text-2xl  group-hover:text-white " />
            <h3 className="text-base group-hover:text-white font-semibold ">
              Kontakt
            </h3>
          </div>
          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <BiMessageSquareDots className="text-2xl  group-hover:text-white " />
            <h3 className="text-base group-hover:text-white font-semibold ">
              Bewertungen
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
