import React from "react";
import { Slider } from "@/components/ui/slider";
import GroupItem from "../GroupItem";
import Image from "next/image";
import Divider from "@/components/ui/Divider";

const VoteSection = () => {
  return (
    <div className="py-[40px] px-[15px] flex justify-between">
      <div>
        <Slider defaultValue={[33]} max={100} step={1} />
        <div className="mt-[30px] flex justify-end">
          <button className="text-[13px] bg-custom-radial text-neutral-0 py-[5px] px-[30px] rounded-[4px]">
            Approve Eth
          </button>
        </div>
      </div>
      {/* Pool Votes */}
      <div>
        <GroupItem
          label="Pool Votes"
          value="216,651.4"
          className="gap-[10px]"
        />
        <p className="text-[#4A4A4A] text-[13px]">12.7355%</p>
      </div>

      {/* Apr */}
      <GroupItem label="APR" value="799%" className="gap-[10px]" />

      {/* Next Emission */}
      <div className={`flex flex-col`}>
        <p className="text-neutral-0">Next Emission</p>
        <span className="flex  gap-[5px] items-center ">
          <p className="text-[#47A7FF] ">1,223,223</p>
          <Image
            src="/icons/eth-logo.svg"
            width="30"
            height="30"
            alt="superfun vote token logo"
          />
        </span>
      </div>
      {/* Sponsorships */}
      <div className={`flex flex-col`}>
        <p className="text-neutral-0">Sponsorships</p>
        <span className="flex  gap-[5px] items-center ">
          <p className="text-[#47A7FF] ">1,223,223</p>
          <Image
            src="/icons/eth-logo.svg"
            width="20"
            height="20"
            alt="superfun vote token logo"
          />
        </span>
        <span className="flex  gap-[5px] items-center ">
          <p className="text-[#47A7FF] ">1,223,223</p>
          <Image
            src="/icons/eth-logo.svg"
            width="20"
            height="20"
            alt="superfun vote token logo"
          />
        </span>
        <Divider className="bg-[#FFFFFF] my-[5px]" />
        <p className="text-[#4A4A4A] text-[11px]">Net Total: $321.55</p>
      </div>

      {/* My Votes */}
      <div>
        <GroupItem label="My Votes" value="12.23" className="gap-[10px]" />
        <p className="text-[#4A4A4A] text-[13px]">12.7355%</p>
      </div>

      {/* Available Votes */}
      <div>
        <GroupItem
          label="Available Votes"
          value="87.77"
          className="gap-[10px]"
        />
        <p className="text-[#4A4A4A] text-[13px]">12.7355%</p>
      </div>

      {/* My $ Per Vote */}
      <GroupItem label="My $ Per Vote" value="$1.223" className="gap-[10px]" />
    </div>
  );
};

export default VoteSection;
