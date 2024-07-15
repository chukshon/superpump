import Image from "next/image";
import React from "react";

const SearchInput = () => {
  return (
    <div className="relative border-variant-two rounded-[8px] py-[15px] px-[10px] w-[450px] flex items-center gap-[10px]">
      <input
        placeholder="Search for token name or contr. . ."
        className="w-[70%] outline-none bg-[transparent] placeholder:text-[16px] text-[16px] placeholder:text-[#4A4A4ACC] text-neutral-50 active:bg-[transparent] placeholder:font-[600] font-space_grotesk"
      />
      <button className="text-neutral-0 z-30 rounded-[4px] w-[30%] btn-variant-one py-[6px] px-[20px]">
        Search
      </button>
      <div className="absolute top-[-40px] right-[-150px] z-0">
        <Image
          src="/images/header-eclipse.png"
          width="300"
          height="500"
          alt="header eclipse"
        />
      </div>
    </div>
  );
};

export default SearchInput;
