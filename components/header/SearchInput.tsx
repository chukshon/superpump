import Image from "next/image";
import React from "react";

const SearchInput = () => {
  return (
    <div className="rounded-[10px] relative border-[1px] py-[15px] px-[10px] w-[450px] flex items-center gap-[10px]">
      <input
        placeholder="Search for token name or contr. . ."
        className="w-[70%] outline-none bg-[transparent] placeholder:text-[#4A4A4ACC] text-neutral-50 active:bg-[transparent] "
      />
      <button className="z-30 rounded-[4px] w-[30%] bg-custom-radial py-[3px] px-[20px]">
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
