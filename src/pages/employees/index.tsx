// src/pages/admin/employees.tsx
import DashboardLayout from "../../layouts/dashboard";
import DataTable from "../../components/table/index";
import { useAdminContext } from "../../context/admin";
import { useEffect } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { Progress } from "antd";

export default function EmployeesPage() {
  const { employees, loading, getAllEmployees } = useAdminContext();
  const router = useNavigate()

  const columns = [
    {
      key: "name",
      header: "Employee",
      render: (_value: any, row: any) => (
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-2">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
              {row.firstName?.charAt(0)}
              {row.lastName?.charAt(0)}
            </span>
          </div>
          <div className="text-gray-800 dark:text-gray-100">
            {row.firstName} {row.lastName}
          </div>
        </div>
      ),
    },
    {
      key: "email",
      header: "Email",
    },
    {
      key: "userType",
      header: "Role",
      align: "center",
      render: (value: string) => (
        <span className="capitalize">{value.toLowerCase()}</span>
      ),
    },
    {
      key: "profileStatus",
      header: "Profile Completion",
      align: "center",
      render: (value: any) => (
        <Progress
          percent={value?.completionPercentage}
        />
      ),
    },
    {
      key: "lastLogin",
      header: "Last Active",
      align: "center",
      render: (value: string) =>
        value ? new Date(value).toLocaleDateString() : "Never",
    },
    {
      key: "action",
      header: "Action",
      align: "center",
      render: (_value: boolean, row: any) => (
        <button onClick={() => router(`/admin/employees/${row?._id}`)} className="text-lg hover:text-violet-500 flex gap-1 cursor-pointer items-center justify-center w-full">
          <p className="text-sm">View</p>
          <HiArrowRight/>
        </button>
      ),
    },
  ];

  useEffect(() => {
    getAllEmployees()
  }, [])

  return (
    <DashboardLayout>
      <div>
        <div className="border-b border-gray-300 dark:border-gray-700/60 pb-3 mb-5">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-2xl mb-1">
            Employees
          </h3>
          <p className="text-gray-800 text-sm dark:text-gray-100 font-light">
            View all employees
          </p>
        </div>

        <div className="space-y-6">
          <DataTable
            columns={columns as any}
            data={employees}
            loading={loading}
            title="Employee Directory"
            description="List of all employees in the system"
            emptyMessage="No employees found"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
