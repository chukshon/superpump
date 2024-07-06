import React from "react";

const EarnTopBar = () => {
  const isActive = false;
  return (
    <div className="border-b-[1px] border-[#828282] py-[10px]">
      <ul className="text-neutral-0 flex justify-center gap-[30px] font-[700]">
        <li className={`text-[#47A7FF] text-[15px]`}>Earn</li>
        <li>The Fomo</li>
        <li>Liquid staking</li>
      </ul>
    </div>
  );
};

export default EarnTopBar;
