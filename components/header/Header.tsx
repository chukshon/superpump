import Image from "next/image";
import React from "react";
import SearchInput from "./SearchInput";
import ConnectWalletHeader from "./ConnectWalletHeader";
import MobileNav from "./MobileNav";
import Link from "next/link";
import DesktopNav from "./DesktopNav";

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

  return (
    <header className="border-b-[3px] border-neutral-0">
      <div className="justify-between container w-[100%] flex items-center gap-[40px] py-[10px]  lg:py-[30px] px-[20px]">
        {/* Left */}
        <div className="flex gap-[30px]">
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/icons/superpumpfun-logo.svg"
              width="64"
              height="64"
              alt="superpumpfun logo"
            />
          </Link>
          {/* SOCIALS */}
          <ul className=" items-center gap-[20px] hidden lg:flex">
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
            {/* Desktop Nav */}
            <div className="hidden lg:block">
              <DesktopNav />
            </div>
          </ul>
        </div>

        {/* Mobile Connect Wallet */}
        <div className="lg:hidden flex">
          <ConnectWalletHeader />
        </div>

        {/* Right */}
        <div className="hidden lg:flex gap-[10px] items-center">
          {/* SEARCH INPUT */}
          <div className="hidden xl:flex">
            <SearchInput />
          </div>
          {/* Connect Wallet desktop*/}
          <div className="hidden lg:flex">
            <ConnectWalletHeader />
          </div>
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
