import React from "react";
import CountDownItem from "./components/CountDownItem";
import ProgressBar from "@/components/ui/ProgressBar";
import GroupDetails from "./components/GroupDetails";
import Divider from "@/components/ui/Divider";

const PresaleProgress = () => {
  const COUNTDOWN = ["01", "01", "01", "01"];
  return (
    <div>
      {/* Timer */}
      <div className="flex items-center flex-col">
        <h1 className="text-neutral-0 text-[20px] font-[600]">
          Presale Ends in
        </h1>
        <ul className="flex gap-[10px]">
          {COUNTDOWN.map((count) => {
            return <CountDownItem count={count} />;
          })}
        </ul>
      </div>

      {/* Progress */}
      <div className="my-[30px]">
        <span className="flex items-center gap-[10px]">
          <h4 className="text-neutral-0 text-[20px]">Progress</h4>
          <p className="text-neutral-0 text-[15px]">(375.17%)</p>
        </span>

        {/* Progressbar */}
        <div className="mt-[10px] mb-[10px]">
          <ProgressBar />
        </div>

        {/* Progress Details */}
        <span className="flex justify-between text-neutral-0 text-[11px]">
          <p className="">3,750FTM</p>
          <p className="">1,000FTM</p>
        </span>
      </div>

      {/* Contribute */}
      <div>
        <input
          className="px-[10px] w-full outline-none bg-neutral-300 border-neutral-150 rounded-[8px] py-[10px]"
          placeholder="you need atleast 0.01 FTM for network fee"
        />
        <div className="flex justify-end mt-[20px]">
          <button
            type="button"
            className="bg-custom-radial text-neutral-0 w-[150px] rounded-[4px] py-[5px]"
          >
            Contribute
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="mt-[30px] flex flex-col gap-[10px]">
        <GroupDetails label={"Status"} value={"Live Sale"} />
        <GroupDetails label={"Sale Type"} value={"Public"} />
        <GroupDetails label={"Max Buy"} value={"150 FTM"} />
        <GroupDetails label={"Current Rate"} value={"1 FTM = 1,000 POPEPEPE"} />
        <GroupDetails label={"Current Raised"} value={"3,750 FTM (375.33%)"} />
      </div>
      <Divider className="bg-[#47A7FF] my-[20px]" />
    </div>
  );
};

export default PresaleProgress;
