import Home from "@/components/modules/Home";
import Information from "@/components/modules/Infomation";
import Skills from "@/components/modules/Skills";
import HOMEPAGE from "@/components/modules/MainPage";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Vo Thanh Tinh",
  icons: {
    icon: "/p81S2Dt1.png",
  },
};

export default function Index() {
  return (
    <>
      <div className="block md:hidden">
        <Home />
        <Skills />
        <Information />
      </div>
      <div className="hidden md:block">
        <HOMEPAGE />
      </div>
    </>
  );
}
