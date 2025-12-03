import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col pt-6 px-6 space-y-4 bg-zinc-100 dark:bg-gray-900 grow pb-8 max-w-7xl mx-auto w-full">
      {children}
    </div>
  );
}
