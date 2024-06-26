import MainPageDesktopView from "@/containers/home/MainPageDesktopView/MainPageDesktopView";
import MainPageMobileView from "@/containers/home/MainPageMobileView/MainPageMobileView";

export default function Home() {
  return (
    <main className="h-[100%] bg-[#111111] text-neutral-0 relative pb-[50px]">
      <MainPageDesktopView />
      <MainPageMobileView />
    </main>
  );
}
