import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#111111] h-[100vh] text-neutral-0 relative">
      <Header />
      <Footer />
    </main>
  );
}
