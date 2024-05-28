import Image from "next/image";
import React from "react";
import SearchInput from "./SearchInput";
import ConnectWalletHeader from "./ConnectWalletHeader";

const Header = () => {
  const socials = [
    {
      name: "chart",
      link: "https://twitter.com/",
      logo: "/icons/chart.svg",
      alt: "chart logo",
      width: 24,
      height: 24,
    },
    {
      name: "telegram",
      link: "https://twitter.com/",
      logo: "/icons/telegram-icon.svg",
      alt: "superpumpfun telegram logo",
      width: 30.4,
      height: 24,
    },
    {
      name: "twitter",
      link: "https://twitter.com/",
      logo: "/icons/x-logo.svg",
      alt: "superpumpfun x logo",
      width: 23.48,
      height: 24,
    },
    {
      name: "question",
      link: "https://twitter.com/",
      logo: "/icons/questionmark-logo.svg",
      alt: "superpumpfun x logo",
      width: 19,
      height: 24,
    },
  ];

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
    <header className="border-b-[3px] border-neutral-0">
      <div className="container flex items-center gap-[40px] py-[30px] px-[0px]">
        {/* LOGO */}
        <Image
          src="/icons/superpumpfun-logo.svg"
          width="64"
          height="64"
          alt="superpumpfun logo"
        />

        {/* SOCIALS */}
        <ul className="flex items-center gap-[20px]">
          {socials.map((social, index) => {
            return (
              <li key={index}>
                <a href={social.link} target="_blank">
                  <Image
                    src={social.logo}
                    width={social.width}
                    height={social.height}
                    alt={social.alt}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* TOKENOMICS */}
        <ul className="flex items-center gap-y-[10px] gap-x-[30px]">
          {tokenomics.map((info, index) => {
            return (
              <li key={index}>
                <p>{info.title}</p>
                <p className="mt-[15px]">{info.desc}</p>
              </li>
            );
          })}
        </ul>

        {/* SEARCH INPUT */}
        <SearchInput />

        {/* Connect Wallet */}
        <ConnectWalletHeader />
      </div>
    </header>
  );
};

export default Header;
