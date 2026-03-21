"use client";

import { RevalidateTags } from "@app/action";

const Copyright = () => {
  return (
    <>
      <div
        className="flex justify-center text-center px-2 text-[14px] font-Montserrat font-normal py-5 bg-black text-white cursor-pointer"
        onClick={() => RevalidateTags()}
      >
        <p className="pr-2">©2026 All Rights reserved</p>
        <p className="pl-2 border-l-[1px] border-gray-400">
          Designed by ADS Company
        </p>
      </div>
    </>
  );
};

export default Copyright;
