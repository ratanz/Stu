import type { Metadata } from "next";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";
import LenisScroll from "@/app/LenisScroll";


const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StudioSize",
  description: "StudioSize is a free and open source platform for creating and sharing studio logos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bebasNeue.className}>
        <LenisScroll />
        {children}</body>
    </html>
  );
}
