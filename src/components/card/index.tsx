import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  children: ReactNode
  className?: string
}

export default function AppCard({ children, className }: IProps) {
  return (
    <div
      className={twMerge(
        "p-5 flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
