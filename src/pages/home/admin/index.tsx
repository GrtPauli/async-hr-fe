import { useEffect } from "react";
import { useAdminContext } from "../../../context/admin";
import AppLoader from "../../../components/loader";
import AppSummaryCard from "../../../components/card/summary";
import { HiUsers } from "react-icons/hi2";
import { IoMdClock } from "react-icons/io";
import StatsChart from "./chart";

export default function AdminDashboard() {
  const { getDashboardStats, dashboardStats, loading } = useAdminContext();

  useEffect(() => {
    getDashboardStats();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center p-20">
          <AppLoader />
        </div>
      ) : (
        <div>
          <div className="border-b border-gray-300 dark:border-gray-700/60 pb-3 mb-5">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-2xl mb-1">
              Dashboard
            </h3>
            <p className="text-gray-800 text-sm dark:text-gray-100 font-light">
              View your all statistics
            </p>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-5">
              <AppSummaryCard
                icon={<HiUsers />}
                title="Total Employees"
                value={dashboardStats?.totalEmployees}
              />
            <AppSummaryCard
                icon={<HiUsers />}
                title="Employees With Completed Profiles"
                value={dashboardStats?.employeesWithCompletedProfiles}
              />
              <AppSummaryCard
                icon={<IoMdClock />}
                title="Total Hours Worked Today"
                value={dashboardStats?.todayHours}
              />
              <AppSummaryCard
                icon={<IoMdClock />}
                title="Total Hours Worked This Week"
                value={dashboardStats?.weekHours}
              />
              <AppSummaryCard
                icon={<IoMdClock />}
                title="Total Hours Worked This Month"
                value={dashboardStats?.monthHours}
              />
            </div>
          </div>

          <div className="mt-5">
            <StatsChart/>
          </div>
        </div>
      )}
    </div>
  );
}
