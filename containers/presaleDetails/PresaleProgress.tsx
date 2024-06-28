import React from "react";
import CountDownItem from "./components/CountDownItem";

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
    </div>
  );
};

export default PresaleProgress;
