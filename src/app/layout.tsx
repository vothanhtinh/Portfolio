import type { Metadata } from "next";
import { Tilt_Neon } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { AOSInit } from "@/configs/Aos";
import MenuMobile from "@/components/molecules/MenuToggle";
import Footer from "@/components/Footer";

const inter = Tilt_Neon({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Vo Thanh Tinh",
  icons: {
    icon: "/p81S2Dt1.png",
  },
  openGraph: {
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Gfel-AapoSZTh5Lnp4WWv4lypUWN7wbqZg&usqp=CAU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AOSInit />

      <body className={inter.className}>
        <div className="max-w-screen-2xl mx-auto relative">
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
