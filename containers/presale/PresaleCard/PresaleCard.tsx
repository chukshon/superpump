import Image from "next/image";
import React from "react";
import PresaleStatus from "./PresaleStatus";
import TwitterIcon from "@/components/Icons/TwitterIcon";
import TelegramIcon from "@/components/Icons/TelegramIcon";
import ProgressBar from "@/components/ui/ProgressBar";

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
  return (
    <li className="w-full lg:w-[330px] h-[600px] border-[1px] border-neutral-0 rounded-[8px] p-[10px]">
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
        <span className="flex justify-between items-center mt-[10px]">
          <h1 className="text-neutral-0 text-[24px]">{props.name}</h1>
          <div className="flex items-center gap-[10px]">
            <TwitterIcon />
            <TelegramIcon />
          </div>
        </span>
        {/* Type of presale */}
        <p className="text-[#7C7C7C] text-[12px]">
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
        <div>
          <span className="flex items-center gap-[10px]">
            <h4 className="text-neutral-0 text-[13px]">Progress</h4>
            <p className="text-[#7C7C7C] text-[12px]">(375.17%)</p>
          </span>

          {/* Progressbar */}
          <div className="mt-[20px] mb-[10px]">
            <ProgressBar />
          </div>

          {/* Progress Details */}
          <span className="flex justify-between">
            <p className="text-[#7C7C7C] text-[12px]">3,750FTM</p>
            <p className="text-[#7C7C7C] text-[12px]">1,000FTM</p>
          </span>
        </div>
      </div>
    </li>
  );
};

export default PresaleCard;
