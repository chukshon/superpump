import type { Metadata } from "next";
import { space_grotesk, chakra_Petch, inter } from "./fonts";
import "./globals.css";
import Header from "@/components/header/Header";
import { ModalProvider } from "@/context/ModalContext";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "SuperPump | Trade",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#111111] ${space_grotesk.className} ${chakra_Petch.className} ${inter.className}`}
      >
        <Providers>
          <ModalProvider>
            <Header />
            {children}
          </ModalProvider>
        </Providers>

        <div id="modal-root" />
      </body>
    </html>
  );
}
