"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDENAV_ITEMS } from "./constants";
import { cn } from "../lib/utils";

export default function PillNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-800/50 rounded-full">
      {SIDENAV_ITEMS.map((item) => {
        const isActive =
          pathname === item.path || pathname.startsWith(item.path + "/");

        return (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              "relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200",
              "hover:bg-white/50 dark:hover:bg-gray-700/50",
              isActive
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-400"
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
