"use client";

import React from "react";
import { usePathname } from "next/navigation";
import MarginWidthWrapper from "@/src/component/margin-width-wrapper";
import SideNav from "@/src/component/side-nav";
import Header from "@/src/component/header";
import HeaderMobile from "@/src/component/header-mobile";
import PageWrapper from "@/src/component/page-wrapper";

/**
 * AppShell conditionally renders the navigation chrome (SideNav, Headers)
 * Hide chrome on the welcome page ("/welcome") for a cleaner landing screen.
 */
const AppShell = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  // Hide chrome on landing page now served at root "/" and keep support for legacy "/welcome"
  const hideChrome = pathname === "/" || pathname === "/welcome";

  if (hideChrome) {
    return (
      <div className="min-h-screen flex flex-col">{children}</div>
    );
  }

  return (
    <div className="flex">
      <main className="flex-1">
        <MarginWidthWrapper>
          <SideNav />
          <Header />
          <HeaderMobile />
          <PageWrapper>{children}</PageWrapper>
        </MarginWidthWrapper>
      </main>
    </div>
  );
};

export default AppShell;
