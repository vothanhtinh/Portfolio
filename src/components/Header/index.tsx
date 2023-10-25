"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion, useCycle } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import MenuMobile, { MenuToggle } from "../molecules/MenuToggle";

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
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="flex flex-row-reverse ">
      <div className="md:hidden p-5 z-50 fixed">
        <MenuMobile isOpen={isOpen} toggleOpen={toggleOpen} />
        {isOpen && (
          <div className="fixed  inset-0 bg-white flex  justify-end p-5 ">
            <div className="flex flex-col ">
              <MenuMobile isOpen={isOpen} toggleOpen={toggleOpen} />
              <div>
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
                            className="absolute h-[3px] top-12 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1]  to-neutral-900"
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
            </div>
          </div>
        )}
      </div>
      <aside className="-ml-[8px]  tracking-tight ">
        <div className="flex justify-between fixed  top-0 left-0 right-0 h-20 bg-white  z-30 ">
          <LayoutGroup>
            <nav
              className="flex flex-row item-center justify-between px-5 md:px-20 pb-0 w-full"
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
                      className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle "
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
    </div>
  );
}
