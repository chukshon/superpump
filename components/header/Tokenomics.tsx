import React from "react";

const Tokenomics = () => {
  const tokenomics = [
    {
      title: "24H VOL",
      desc: "$ 50M",
    },
    {
      title: "LOCKED TVL",
      desc: "$ 88M",
    },
    {
      title: "TOKENS CREATED",
      desc: "1,230,223",
    },
  ];
  return (
    <ul className="text-neutral-0  hidden items-center gap-x-[30px] lg:flex">
      {tokenomics.map((info, index) => {
        return (
          <li key={index}>
            <p className="text-[16px] w-max">{info.title}</p>
            <p className="mt-[15px]">{info.desc}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Tokenomics;
