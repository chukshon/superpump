import Image from "next/image";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { AiFillCopy } from "react-icons/ai";
import { PiTelegramLogoLight } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";

const ChartViewHeader = () => {
  return (
    <div className="flex md:justify-between items-center z-30">
      <div className="flex items-center gap-[15px]">
        {/* Token info */}
        <div className="flex items-center gap-[8px] z-30">
          <Image
            src={"/images/tokens/beach-token.svg"}
            alt=""
            width="60"
            height="60"
            className=""
          />
          <span className="text-neutral-0">
            <p className="text-[15px] font-[700]">Pope Pepe</p>
            <p className="text-[12px]">POPEPE / FTM</p>
          </span>
        </div>

        {/* Watch */}
        <button
          type="button"
          className="z-30 flex gap-[10px] items-center bg-[#4A4A4ACC] h-max w-max  px-[10px] py-[5px] rounded-[4px]"
        >
          <IoStarSharp color="#003CFF" size={15} />
          <p className="text-neutral-0">Watch</p>
        </button>

        {/* Token pair and social */}
        <div className="flex items-center gap-[10px] z-30">
          {/* Token */}
          <div className="hidden sm:flex  items-center">
            <span className="flex items-center gap-[10px]">
              <p className="text-[#47A7FF] text-[15px] font-chakra_Petch">
                Token
              </p>
              <AiFillCopy className="text-neutral-0" size={25} />
            </span>

            {/* Divider */}
            <span className="bg-[#4A4A4A] w-[2px] h-[20px]"></span>

            {/* Pair */}
            <span className="flex items-center gap-[10px]">
              <p className="text-[#47A7FF] text-[15px] font-chakra_Petch">
                Pair
              </p>
              <AiFillCopy className="text-neutral-0" size={25} />
            </span>
            {/* Divider */}
            <span className="bg-[#4A4A4A] w-[2px] h-[20px]"></span>
          </div>

          {/* Socials */}
          <span className="flex items-center gap-[10px] z-30">
            <PiTelegramLogoLight className="text-[#47A7FF]" size={23} />
            <RiTwitterXLine className="text-[#47A7FF]" size={20} />
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-[4px] z-30">
        <p className="text-[#4A4A4A] text-[14px] font-chakra_Petch">
          Created By:
        </p>
        <span className="bg-[#003CFF] flex justify-center items-center px-[10px] py-[5px]">
          <Image
            src="/images/user.png"
            alt="brown-rectangle-bg"
            width="30"
            height="30"
            className="object-contain"
          />
          <p className="text-neutral-0 text-[12px]">@SuperPump01</p>
        </span>
      </div>
    </div>
  );
};

export default ChartViewHeader;
