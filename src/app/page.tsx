import BlockInfo from "@/components/BlockInfo";
import SwipperScroll from "@/components/SwipperScroll";
import Home from "@/components/modules/Home";
import Information from "@/components/modules/Infomation";
import Skills from "@/components/modules/Skills";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
  description: "Vo Thanh Tinh",
  icons: {
    icon: "/p81S2Dt1.png",
  },
};
export default function Index() {
  return (
    <div>
      <SwipperScroll />
    </div>
  );
}
