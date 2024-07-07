import React from "react";
import Image from "next/image";
import CountDownItem from "@/containers/presaleDetails/components/CountDownItem";
import { RiFileCopyLine } from "react-icons/ri";
import { IoShareSocialSharp } from "react-icons/io5";
import Divider from "@/components/ui/Divider";

const VoteCard = () => {
  const COUNTDOWN = ["01", "01", "01", "01"];
  return (
    <div className="border-one w-full md:min-w-[300px] p-[15px] rounded-[8px]">
      <div className="px-[10px] py-[20px] bg-[#222222] rounded-[8px] h-full border-[#22252A] border-[1px]">
        {/* Token icon */}
        <div className="flex justify-between items-start">
          <div className="bg-[#0ECB81] w-[50px] h-[50px] rounded-full grid place-items-center">
            <Image
              src={"/icons/pepe-presale-icon.svg"}
              alt="superpumpfun vote card image"
              width={438}
              height={48}
              className=""
            />
          </div>
          <div>
            <p className="text-neutral-0 text-[13px] text-right">
              Time til Vote Ends:
            </p>
            <ul className="flex gap-[10px]">
              {COUNTDOWN.map((count) => {
                return <CountDownItem count={count} />;
              })}
            </ul>
          </div>
        </div>
        {/* Votes Count */}
        <div className="flex justify-between mt-[10px]">
          <h1 className="text-neutral-0 font-[600] text-[20px]">Pope Pepe</h1>
          <button
            type="button"
            className="bg-neutral-150 rounded-[4px] py-[3px] w-[100px]"
          >
            800 Votes
          </button>
        </div>
        {/* Rank and Ca group */}
        <div className="flex justify-between mt-[10px]">
          <div className="flex items-center gap-[10px]">
            <p className="text-[#7C7C7C] text-[13px]">Ca.....1234</p>
            <span className="text-neutral-0 flex items-center">
              <button type="button">
                <RiFileCopyLine />
              </button>
              <button type="button">
                <IoShareSocialSharp />
              </button>
            </span>
          </div>

          <button
            type="button"
            className="bg-neutral-150 rounded-[4px] py-[3px] w-[100px]"
          >
            Rank First
          </button>
        </div>
        <Divider className="bg-[#47A7FF3D] mt-[10px] mb-[15px]" />

        {/* Rewards and Vote */}
        <div className="flex justify-between items-center">
          <span className="">
            <h2 className="text-neutral-0 text-[15px]">Rewards:</h2>
            <h3 className="text-[#26B6EA] text-[23px]">1,000 FTM</h3>
          </span>
          <button
            type="button"
            className="text-neutral-0 w-[100px] bg-custom-radial rounded-[4px] py-[3px]"
          >
            Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoteCard;
