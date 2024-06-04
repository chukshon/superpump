import Image from "next/image";
import React from "react";
import SearchInput from "./SearchInput";
import ConnectWalletHeader from "./ConnectWalletHeader";
import MobileNav from "./MobileNav";

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
      <div className="justify-between container w-[100%] flex items-center gap-[40px] py-[10px]  lg:py-[30px] px-[20px]">
        {/* LOGO */}
        <Image
          src="/icons/superpumpfun-logo.svg"
          width="64"
          height="64"
          alt="superpumpfun logo"
        />

        {/* Mobile Connect Wallet */}
        <div className="lg:hidden flex">
          <ConnectWalletHeader />
        </div>

        {/* SOCIALS */}
        <ul className="items-center gap-[20px] hidden lg:flex">
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
        <ul className="hidden items-center gap-x-[30px] lg:flex">
          {tokenomics.map((info, index) => {
            return (
              <li key={index}>
                <p className="text-[16px] w-max">{info.title}</p>
                <p className="mt-[15px]">{info.desc}</p>
              </li>
            );
          })}
        </ul>

        {/* SEARCH INPUT */}
        <div className="hidden xl:flex">
          <SearchInput />
        </div>

        {/* Connect Wallet desktop*/}
        <div className="hidden lg:flex">
          <ConnectWalletHeader />
        </div>

        {/* Mobile Nav */}
        <div className="flex lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
