import SelectVariantOne from "@/components/ui/SelectVariantOne";
import PresaleFilterTopBar from "@/containers/presale/PresaleFilterTopBar";
import React from "react";

const Presale = () => {
  const PRESALE_LIST_DATA = [
    {
      id: "1",
      name: "Pope Pepe",
      status: "Live Sale",
      image: "",
      type: "Presale",
      softCap: 1000,
      liquidity: 90,
      lockupTime: "180 days",
      salesEnd: "01:17:33:01",
    },
  ];
  return (
    <main className="lg:border-[1px] border-b-[0px] mx-[20px] my-[10px] border-neutral-0 h-[100vh]">
      <div className="lg:py-[50px] lg:px-[50px] py-[10px]">
        {/* Top Bar */}
        <PresaleFilterTopBar />

        {/* Presale List */}
      </div>
    </main>
  );
};

export default Presale;
