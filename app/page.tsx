import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import QuickPortfolio from "@/containers/home/QuickPortfolio";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#111111] h-[100vh] text-neutral-0 relative">
      <Header />
      <div className="flex-col lg:flex-row px-[10px] mt-[50px] mb-[100px] flex items-center gap-[20px] justify-center w-[100%]">
        <QuickPortfolio />
        <QuickPortfolio />
        <QuickPortfolio />
      </div>
      <Footer />
    </main>
  );
}
