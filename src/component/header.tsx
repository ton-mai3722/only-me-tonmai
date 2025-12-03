"use client";

import React from "react";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "../hooks/use-scroll";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./theme-toggle";
import PillNav from "./pill-nav";

const Header = () => {
  const scrolled = useScroll(50);
  const segment = useSelectedLayoutSegment();
  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 dark:border-gray-800`,
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-950/75":
            scrolled,
          "border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950":
            segment,
        }
      )}
    >
      <div className="flex h-[60px] items-center justify-between px-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center"
          >
            <span className="h-8 w-8 bg-zinc-300 dark:bg-gray-700 rounded-lg" />
            <span className="font-bold text-xl dark:text-white">Logo</span>
          </Link>

          <div className="hidden md:block">
            <PillNav />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="h-8 w-8 rounded-full bg-zinc-300 dark:bg-gray-700 flex items-center justify-center text-center">
            <span className="font-semibold text-sm dark:text-white">TM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
