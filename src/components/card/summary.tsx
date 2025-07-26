import type { ReactNode } from "react";
import AppCard from ".";

interface IProps {
  title: string;
  value?: string | number;
  icon: ReactNode;
}

export default function AppSummaryCard({ title, value, icon }: IProps) {
  return (
    <div className="h-full">
      <AppCard>
        <div className="flex items-center h-full gap-3">
          <div className="text-7xl text-violet-700">{icon}</div>

          <div>
            <p className="text-sm mb-3">{title}</p>
            <p className="font-semibold text-2xl">{value}</p>
          </div>
        </div>
      </AppCard>
    </div>
  );
}
