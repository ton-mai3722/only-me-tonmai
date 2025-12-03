"use client";

import React from "react";
import { usePathname } from "next/navigation";
import MarginWidthWrapper from "@/src/component/margin-width-wrapper";
import SideNav from "@/src/component/side-nav";
import Header from "@/src/component/header";
import HeaderMobile from "@/src/component/header-mobile";
import PageWrapper from "@/src/component/page-wrapper";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideChrome = pathname === "/" || pathname === "/welcome";

  if (hideChrome) {
    return <div className="min-h-screen flex flex-col">{children}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeaderMobile />
      <main className="flex-1">
        <PageWrapper>{children}</PageWrapper>
      </main>
    </div>
  );
};

export default AppShell;
