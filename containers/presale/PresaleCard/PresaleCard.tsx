import Image from "next/image";
import React from "react";
import PresaleStatus from "./PresaleStatus";

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
        <span>
          <h2>Pope Pepe</h2>
          <div></div>
        </span>
      </div>
    </li>
  );
};

export default PresaleCard;
