import { Inter, Roboto } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});
