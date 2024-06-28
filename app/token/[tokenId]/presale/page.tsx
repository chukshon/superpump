import PresaleCard from "@/containers/presale/PresaleCard/PresaleCard";
import PresaleFilterTopBar from "@/containers/presale/PresaleFilterTopBar";
import Image from "next/image";
import React from "react";

const Presale = () => {
  const PRESALE_LIST_DATA = [
    {
      id: "1",
      name: "Pope Pepe",
      status: "Live Sale",
      image: "/icons/pepe-presale-icon.svg",
      type: "Presale",
      softCap: 1000,
      liquidity: 90,
      lockupTime: "180 days",
      salesEnd: "01:17:33:01",
      twitterLink: "",
      telegramLink: "",
      total: 3750,
      available: 1000,
    },
    {
      id: "2",
      name: "Pope Pepe",
      status: "Upcoming",
      image: "/icons/pepe-presale-icon.svg",
      type: "Fair Launch - Max buy 150 FTM",
      softCap: 1000,
      liquidity: 90,
      lockupTime: "180 days",
      salesEnd: "01:17:33:01",
      twitterLink: "",
      telegramLink: "",
      total: 3750,
      available: 1000,
    },
    {
      id: "3",
      name: "Pope Pepe",
      status: "Live Sale",
      image: "/icons/pepe-presale-icon.svg",
      type: "Fair Launch - Max buy 150 FTM",
      softCap: 1000,
      liquidity: 90,
      lockupTime: "180 days",
      salesEnd: "01:17:33:01",
      twitterLink: "",
      telegramLink: "",
      total: 3750,
      available: 1000,
    },
    {
      id: "4",
      name: "Pope Pepe",
      status: "Live Sale",
      image: "/icons/pepe-presale-icon.svg",
      type: "Fair Launch - Max buy 150 FTM",
      softCap: 1000,
      liquidity: 90,
      lockupTime: "180 days",
      salesEnd: "01:17:33:01",
      twitterLink: "",
      telegramLink: "",
      total: 3750,
      available: 1000,
    },
    {
      id: "5",
      name: "Pope Pepe",
      status: "Live Sale",
      image: "/icons/pepe-presale-icon.svg",
      type: "Fair Launch - Max buy 150 FTM",
      softCap: 1000,
      liquidity: 90,
      lockupTime: "180 days",
      salesEnd: "01:17:33:01",
      twitterLink: "",
      telegramLink: "",
      total: 3750,
      available: 1000,
    },
    {
      id: "6",
      name: "Pope Pepe",
      status: "Live Sale",
      image: "/icons/pepe-presale-icon.svg",
      type: "Fair Launch - Max buy 150 FTM",
      softCap: 1000,
      liquidity: 90,
      lockupTime: "180 days",
      salesEnd: "01:17:33:01",
      twitterLink: "",
      telegramLink: "",
      total: 3750,
      available: 1000,
    },
  ];

  return (
    <main className="relative lg:border-one rounded-tr-[8px] rounded-tl-[8px] mx-[20px] my-[10px] border-neutral-0">
      <Image
        src={"/images/presale-page-ecllipse.png"}
        alt="superpumpfun presale eclipse background "
        className="absolute h-[900px] w-[861px] z-0 hidden lg:block"
        width={30}
        height={30}
      />
      <div className="lg:py-[50px] lg:px-[50px] py-[10px]">
        {/* Top Bar */}
        <PresaleFilterTopBar />

        {/* Presale List */}
        <ul className="z-50 mt-[20px] gap-x-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 place-items-center">
          {PRESALE_LIST_DATA.map((presaleItem) => {
            return <PresaleCard {...presaleItem} key={presaleItem.id} />;
          })}
        </ul>
      </div>
    </main>
  );
};

export default Presale;
