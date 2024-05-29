import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainPageDesktopView from "@/containers/home/MainPageDesktopView/MainPageDesktopView";
import MainPageMobileView from "@/containers/home/MainPageMobileView/MainPageMobileView";
import QuickPortfolioSection from "@/containers/home/QuickPortfolioSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#111111] h-[100vh] text-neutral-0 relative">
      <Header />
      <MainPageDesktopView />
      <MainPageMobileView />
      <Footer />
    </main>
  );
}
