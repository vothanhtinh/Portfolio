"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";

const navItems = {
  "/": {
    name: "Home",
  },
  "/about": {
    name: "About",
  },
  "/skill": {
    name: "Skill",
  },
  "/contact": {
    name: "Contact",
  },
};

export default function Header() {
  const pathName = usePathname();

  return (
    <aside className="-ml-[8px]  tracking-tight ">
      <div className="lg:sticky lg:top-20 ">
        <LayoutGroup>
          <nav
            className="flex flex-row item-center justify-between relative px-20 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div>
              <Image
                src="https://wizlogo-bucket.s3.us-east-2.amazonaws.com/generated-images/2023-10-17/p81S2Dt1.png"
                alt="avatart"
                width={100}
                height={70}
              />
            </div>
            <div className=" md:flex-row space-x-0 pr-10 hidden md:flex">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle"
                  >
                    <span className="relative py-5 px-4 font-bold text-xl">
                      {name}
                      {pathName === path ? (
                        <motion.div
                          className="absolute h-[3px] top-12 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                          layoutId="sidebar"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 50,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
