import type { Metadata } from "next";
import { Tilt_Neon } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { AOSInit } from "@/components/Aos";

const inter = Tilt_Neon({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Vo Thanh Tinh",
  icons: {
    icon: "/p81S2Dt1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <AOSInit />
      <body className={inter.className}>
        <Header />
        <div className="container mx-auto px-5 pt-5">{children}</div>
      </body>
    </html>
  );
}
