// src/context/AdminContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import api from "../api";

interface TodayAttendance {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  totalHours: number | null;
  status: string | null;
  lastClockedIn: string | null;
  lastClockedOut: string | null;
}

interface Employee {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  userType: string;
  isActive: boolean;
  lastLogin?: string;
}

interface EmployeeDetails extends Employee {
  profile?: any;
  recentAttendance?: any[];
}

interface AttendanceRecord {
  _id: string;
  date: string;
  clockIn: string;
  clockOut?: string;
  totalHours?: number;
  status: string;
}

interface DashboardStats {
  totalEmployees: number;
  employeesWithCompletedProfiles: number;
  todayHours: number;
  weekHours: number;
  monthHours: number;
}

interface TopPerformer {
  userId: string;
  name: string;
  totalHours: number;
  daysWorked: number;
}

interface AdminContextType {
  employees: Employee[];
  employeeDetails: EmployeeDetails | null;
  attendanceRecords: AttendanceRecord[];
  dashboardStats: DashboardStats | null;
  topPerformers: TopPerformer[];
  loading: boolean;
  fetchingTopPeformers: boolean;
  error: string | null;
  getAllEmployees: () => Promise<void>;
  getEmployeeDetails: (id: string) => Promise<void>;
  getEmployeeAttendance: (
    id: string,
    startDate?: string,
    endDate?: string
  ) => Promise<void>;
  getDashboardStats: () => Promise<void>;
  getTopPerformers: (period: "day" | "week" | "month" | "all") => Promise<void>;
  resetError: () => void;
  todayAttendance: TodayAttendance[];
  getTodayAttendance: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [employeeDetails, setEmployeeDetails] =
    useState<EmployeeDetails | null>(null);
  const [attendanceRecords, setAttendanceRecords] = useState<
    AttendanceRecord[]
  >([]);
  const [dashboardStats, setDashboardStats] = useState<DashboardStats | null>(
    null
  );
  const [topPerformers, setTopPerformers] = useState<TopPerformer[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchingTopPeformers, setFetchingTopPeformers] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [todayAttendance, setTodayAttendance] = useState<TodayAttendance[]>([]);

  const getTodayAttendance = async () => {
    try {
      setLoading(true);
      const response = await api.get("/admin/attendance/today");
      setTodayAttendance(response.data);
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Failed to fetch today's attendance"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getAllEmployees = async () => {
    try {
      setLoading(true);
      const response = await api.get("/admin/employees");
      setEmployees(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch employees");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getEmployeeDetails = async (id: string) => {
    try {
      setLoading(true);
      const response = await api.get(`/admin/employees/${id}`);
      setEmployeeDetails(response.data);
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Failed to fetch employee details"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getEmployeeAttendance = async (
    id: string,
    startDate?: string,
    endDate?: string
  ) => {
    try {
      setLoading(true);
      let url = `/admin/employees/${id}/attendance`;
      if (startDate && endDate) {
        url += `?startDate=${startDate}&endDate=${endDate}`;
      }
      const response = await api.get(url);
      setAttendanceRecords(response.data);
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Failed to fetch attendance records"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getDashboardStats = async () => {
    try {
      setLoading(true);
      const response = await api.get("/admin/dashboard/stats");
      setDashboardStats(response.data);
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Failed to fetch dashboard stats"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getTopPerformers = async (
    period: "day" | "week" | "month" | "all" = "week"
  ) => {
    try {
      setFetchingTopPeformers(true);
      const response = await api.get(
        `/admin/dashboard/top-performers?period=${period}`
      );
      setTopPerformers(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch top performers");
      throw err;
    } finally {
      setFetchingTopPeformers(false);
    }
  };

  const resetError = () => {
    setError(null);
  };

  const value = {
    employees,
    employeeDetails,
    attendanceRecords,
    dashboardStats,
    topPerformers,
    loading,
    error,
    getAllEmployees,
    getEmployeeDetails,
    getEmployeeAttendance,
    getDashboardStats,
    getTopPerformers,
    resetError,
    fetchingTopPeformers,
    todayAttendance,
    getTodayAttendance  
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error(
      "useAdminContext must be used within an AdminContextProvider"
    );
  }
  return context;
};
