import { useEffect } from "react";
import AppLoader from "../../../components/loader";
import { useAttendanceContext } from "../../../context/attendance";
import DashboardLayout from "../../../layouts/dashboard";
import AttendanceSummaryCard from "./components/card";
import { IoMdClock } from "react-icons/io";
import { IoToday } from "react-icons/io5";

export default function AttendanceSummaryPage() {
  const { stats, loading, fetchStats } = useAttendanceContext();

  useEffect(() => {
    fetchStats()
  }, [])

  return (
    <DashboardLayout>
      {loading ? (
        <div className="flex items-center justify-center p-20">
          <AppLoader/>
        </div>
      ) : (
        <div>
          <div className="border-b border-gray-300 dark:border-gray-700/60 pb-3 mb-5">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-2xl mb-1">Attendance Statistics</h3>
            <p className="text-gray-800 text-sm dark:text-gray-100 font-light">View your attendance statistics</p>
          </div>

          <div className="grid grid-cols-3 gap-5">
            <AttendanceSummaryCard
              icon={<IoMdClock />}
              title="Today's Hours"
              value={stats?.dailyHours}
            />

            <AttendanceSummaryCard
              icon={<IoMdClock />}
              title="This Week Hours"
              value={stats?.weeklyHours}
            />

            <AttendanceSummaryCard
              icon={<IoMdClock />}
              title="This Month Hours"
              value={stats?.monthlyHours}
            />

            <AttendanceSummaryCard
              icon={<IoToday />}
              title="Present Days"
              value={stats?.presentDays}
            />

            <AttendanceSummaryCard
              icon={<IoToday />}
              title="Half Days"
              value={stats?.halfDays}
            />

            <AttendanceSummaryCard
              icon={<IoToday />}
              title="Absent Days"
              value={stats?.absentDays}
            />
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
