import DashboardHeader from "@/app/_components/DashboardHeader/DashboardHeader";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import { MdKey } from "react-icons/md";

const Page = () => {
  return (
    <div className="">
      <DashboardHeader />
      <div className="p-[30px] ">
        <div className="flex max-sm:flex-col">
          {/* part1 */}
          <div className=" w-[23%] max-w-[400px] h-[600px] m-[12px] bg-[#E6F2F8] rounded-[10px] max-sm:w-full max-lg:bg-white max-sm:h-auto">
            <div className=" text-[14px] text-[#49454F] font-semibold p-3 pt-6 max-lg:hidden">
              NodeDa ID Dashboard
            </div>
            <div className=" text-[12px] text-[#49454F] p-3 max-lg:hidden ">
              Personal Information
            </div>
            <div className="h-[50px] w-[85%] rounded-[25px] bg-[#BFDDEE] m-3 flex items-center max-lg:flex-col max-lg:bg-white  max-lg:items-start ">
              <div className="size-6 text-black  pl-4 max-sm:pl-0">
                <FaUser />
              </div>
              <div className=" text-[12px] text-[#1D192B] pl-5 max-sm:pl-0">
                Manage ID
              </div>
            </div>
            <Link href='/pages/Dashboard2' className=" cursor-pointer m-3 mt-4 flex max-lg:flex-col  ">
              <div className="size-7 text-black  pl-4 max-sm:pl-0">
                <MdKey />
              </div>

              <div className="   text-[12px] text-[#49454F] pl-4 max-lg:hidden">
                Change Password
              </div>
            </Link>
          </div>
          {/* part2 */}

          <div className="m-[12px] w-[70%] ml-10 max-sm:w-full max-sm:ml-0">
            {/* box1 */}
            <div className="w-full py-1 bg-[#BFDDEE] rounded-[5px]">
              <div className="text-[12px] text-[#49454F] pt-2 pl-2">
                Full Name
              </div>
              <input
                type="text"
                className="w-full h-full bg-transparent border-none outline-none pl-2 text-[16px] text-[#1C1B1F]"
                placeholder="John Doe"
              />
            </div>
            <div className=" text-[12px] text-[#49454F] pt-3 pl-2">
              First Name,Last Name{" "}
            </div>

            {/* box2 */}
            <div className="w-full py-1 bg-[#F6F6F6] mt-3 rounded-[5px] ">
              <div className=" text-[11px] text-[#BFBDBF] pt-2 pl-2">
                E-Mail
              </div>
              <input
                type="text"
                className="w-full h-full bg-transparent border-none outline-none pl-2 text-[16px] text-[#1C1B1F] "
                placeholder="john.doe@NodeDa.com"
              />
            </div>
            <div className=" text-[11px] text-[#BFBDBF] pt-3 pl-2">
              john.doe@NodeDa.com
            </div>
            {/* box3 */}
            <div className=" mt-14">
              <span className=" bg-[#BA4300] p-3 text-white rounded-[15px]">
                Delete Account
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
