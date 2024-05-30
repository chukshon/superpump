import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainPageDesktopView from "@/containers/home/MainPageDesktopView/MainPageDesktopView";
import MainPageMobileView from "@/containers/home/MainPageMobileView/MainPageMobileView";
import QuickPortfolioSection from "@/containers/home/QuickPortfolioSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[100%] bg-[#111111] text-neutral-0 relative pb-[50px]">
      <Header />
      <MainPageDesktopView />
      <MainPageMobileView />
    </main>
  );
}
