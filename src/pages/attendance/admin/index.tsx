import { useEffect } from 'react';
import DashboardLayout from "../../../layouts/dashboard";
import DataTable from "../../../components/table/index";
import { useAdminContext } from "../../../context/admin";
import { HiArrowRight } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

export default function AdminAttendancePage() {
  const { todayAttendance, getTodayAttendance, loading } = useAdminContext();
  const router = useNavigate()

  useEffect(() => {
    getTodayAttendance();
  }, []);

  const columns = [
    {
      key: 'name',
      header: 'Employee',
      render: (_value: any, row: any) => (
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-2">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
              {row.firstName?.charAt(0)}{row.lastName?.charAt(0)}
            </span>
          </div>
          <div className="text-gray-800 dark:text-gray-100">
            {row.firstName} {row.lastName}
          </div>
        </div>
      )
    },
    {
      key: 'totalHours',
      header: 'Hours Worked',
      align: 'center',
      render: (value: number | null) => (
        <span className={value ? 'font-medium' : 'text-gray-400 dark:text-gray-500'}>
          {value ? `${value.toFixed(2)}h` : 'N/A'}
        </span>
      )
    },
    {
      key: 'status',
      header: 'Status',
      align: 'center',
      render: (value: string | null) => (
        <span className={`px-2 py-1 text-xs rounded-full capitalize ${
          value === 'present' ? 'bg-green-100 text-green-800' :
          value === 'half-day' ? 'bg-yellow-100 text-yellow-800' :
          value === 'absent' ? 'bg-red-100 text-red-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {value || 'Not clocked in'}
        </span>
      )
    },
    {
      key: 'lastClockedIn',
      header: 'Last Clock In',
      align: 'center',
      render: (value: string | null) => (
        <span className={value ? '' : 'text-gray-400 dark:text-gray-500'}>
          {value ? new Date(value).toLocaleTimeString() : 'N/A'}
        </span>
      )
    },
    {
      key: 'lastClockedOut',
      header: 'Last Clock Out',
      align: 'center',
      render: (value: string | null) => (
        <span className={value ? '' : 'text-gray-400 dark:text-gray-500'}>
          {value ? new Date(value).toLocaleTimeString() : 'N/A'}
        </span>
      )
    },
    {
        key: "action",
        header: "Action",
        align: "center",
        render: (_value: boolean, row: any) => (
        <button onClick={() => router(`/admin/attendance/${row?._id}`)} className="text-lg hover:text-violet-500 flex gap-1 cursor-pointer items-center justify-center w-full">
            <p className="text-sm">View Calendar</p>
            <HiArrowRight/>
        </button>
        ),
    },
  ];

  return (
    <DashboardLayout>
      <div>
        <div className="border-b border-gray-300 dark:border-gray-700/60 pb-3 mb-5">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-2xl mb-1">
            Today's Attendance
          </h3>
          <p className="text-gray-800 text-sm dark:text-gray-100 font-light">
            View all employee attendance
          </p>
        </div>

        <div className="space-y-6">
          <DataTable
            columns={columns as any}
            data={todayAttendance}
            loading={loading}
            title="Today's Attendance Records"
            description="Clock-in and clock-out times for all employees"
            emptyMessage="No attendance records found for today"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}