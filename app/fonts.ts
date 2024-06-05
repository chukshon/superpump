import { Inter, Roboto, Space_Grotesk, Chakra_Petch } from "next/font/google";

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

export const space_grotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-space_grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const chakra_Petch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-chakra_Petch",
  subsets: ["latin"],
  display: "swap",
});
