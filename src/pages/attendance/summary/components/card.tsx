import type { ReactNode } from "react";
import AppCard from "../../../../components/card";

interface IProps {
    title: string,
    value?: string | number
    icon: ReactNode
}

export default function AttendanceSummaryCard({ title, value, icon }: IProps) {
  return (
    <div>
        <AppCard>
            <div className="flex items-center gap-3">
                <div className="text-7xl text-violet-700">
                    {icon}
                </div>

                <div>
                    <p>{title}</p>
                    <p className="font-semibold text-2xl">{value}</p>
                </div>
            </div>
        </AppCard>
    </div>
  )
}
