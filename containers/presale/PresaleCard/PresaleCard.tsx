"use client";
import Image from "next/image";
import React from "react";
import PresaleStatus from "./PresaleStatus";
import TwitterIcon from "@/components/Icons/TwitterIcon";
import TelegramIcon from "@/components/Icons/TelegramIcon";
import ProgressBar from "@/components/ui/ProgressBar";
import { useRouter } from "next/navigation";

type PresaleCardProps = {
  id: string;
  name: string;
  status: string;
  image: string;
  type: string;
  softCap: number;
  liquidity: number;
  lockupTime: string;
  salesEnd: string;
  twitterLink: string;
  telegramLink: string;
  total: number;
  available: number;
};
const PresaleCard = (props: PresaleCardProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("presale/2");
  };
  return (
    <li className="border-one w-full lg:w-[330px] rounded-[8px] p-[10px]">
      <div className="bg-[#222222] rounded-[8px] h-full border-[1px] border-neutral-150 py-[15px] px-[10px]">
        <div className="flex justify-between items-start">
          <div className="bg-[#0ECB81] w-[70px] h-[70px] rounded-full grid place-items-center">
            <Image
              src={props.image}
              alt="superpumpfun presale image"
              width={48}
              height={48}
              className=""
            />
          </div>

          <PresaleStatus status={props.status} />
        </div>

        {/* Title and socials */}
        <span className="z-30 flex justify-between items-center mt-[10px]">
          <h1 className="text-neutral-0 text-[24px]">{props.name}</h1>
          <div className="flex items-center gap-[10px]">
            <TwitterIcon />
            <TelegramIcon />
          </div>
        </span>
        {/* Type of presale */}
        <p className="z-30  text-[#7C7C7C] text-[12px]">
          Fair Launch - Max buy 150 FTM
        </p>
        {/* Divider */}
        <span className="block h-[1px] w-full bg-[#293C4D] my-[20px]"></span>

        {/* SoftCap Details */}
        <div>
          <p className="text-neutral-0 text-[14px]">SoftCap</p>
          <h3 className="text-[#26B6EA] text-[16px] font-[700]">1,000 FTM</h3>
        </div>

        {/* Progress */}
        <div className="mt-[30px]">
          <span className="flex items-center gap-[10px]">
            <h4 className="text-neutral-0 text-[13px]">Progress</h4>
            <p className="text-[#7C7C7C] text-[12px]">(375.17%)</p>
          </span>

          {/* Progressbar */}
          <div className="mt-[10px] mb-[10px]">
            <ProgressBar />
          </div>

          {/* Progress Details */}
          <span className="flex justify-between">
            <p className="text-[#7C7C7C] text-[12px]">3,750FTM</p>
            <p className="text-[#7C7C7C] text-[12px]">1,000FTM</p>
          </span>

          <div className="my-[40px]">
            <span className="flex justify-between">
              <p className="text-neutral-0 text-[14px]">Liquidity</p>
              <p className="text-neutral-0 text-[14px]">90%</p>
            </span>
            <span className="flex justify-between">
              <p className="text-neutral-0 text-[14px]">Lockup Time</p>
              <p className="text-neutral-0 text-[14px]">180 days</p>
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-neutral-0 ">
              <p className="text-[13px]">Sales end in:</p>
              <p className="font-[600] text-[14px]">01:17:33:01</p>
            </span>
            <button
              type="button"
              onClick={handleClick}
              className="z-40 bg-custom-radial text-neutral-0 py-[10px] px-[25px] rounded-[8px] text-[13px]"
            >
              View Full Info
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PresaleCard;
