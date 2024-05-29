import type { Metadata } from "next";
import { space_grotesk, chakra_Petch, inter } from "./fonts";
import "./globals.css";

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
        className={`${space_grotesk.className} ${chakra_Petch.className} ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
