import Image from "next/image";
import React from "react";
import PresaleStatus from "../presale/PresaleCard/PresaleStatus";
import TelegramIcon from "@/components/Icons/TelegramIcon";
import TwitterIcon from "@/components/Icons/TwitterIcon";

const PresaleBasicInfo = () => {
  return (
    <div>
      {/* Banner */}
      <div className="w-full">
        <Image
          src={"/images/presale-banner.svg"}
          width={100}
          height={300}
          alt="superpumpfun presale banner"
          className="w-full h-[200px] object-cover rounded-[10px]"
        />
      </div>

      <div className="flex flex-col xl:flex-row items-center lg:justify-between">
        <div className="mt-[-70px] xl:mt-[-70px] lg:ml-[30px] bg-[#0ECB81] w-[100px] h-[100px] rounded-full grid place-items-center">
          <Image
            src={"/icons/pepe-presale-icon.svg"}
            width={100}
            height={100}
            alt="superpumpfun presale banner"
            className=" object-contain rounded-[10px]"
          />
        </div>
        <div className="flex flex-col xl:flex-row  gap-[10px] items-center xl:mt-[-30px]">
          <h1 className="text-neutral-0 text-[20px]">Pope Pepe - Presale</h1>
          <span className="flex items-center gap-[20px]">
            <PresaleStatus status={"Live Sale"} />
            <span className="flex gap-[10px]">
              <TelegramIcon />
              <TwitterIcon />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PresaleBasicInfo;
