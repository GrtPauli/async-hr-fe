// src/context/AttendanceContext.tsx
import React, { createContext, useContext, useState } from "react";
import api from "../api";
// import { useAuthContext } from "./auth";

interface AttendanceRecord {
  id: string;
  date: string;
  clockIn: string;
  clockOut?: string;
  totalHours?: number;
  status: "present" | "absent" | "half-day" | "leave";
}

interface AttendanceStats {
  averageClockIn: string;
  averageClockOut: string;
  dailyHours: number;
  weeklyHours: number;
  monthlyHours: number;
  presentDays: number;
  absentDays: number;
  halfDays: number;
}

interface AttendanceContextType {
  records: AttendanceRecord[];
  stats: AttendanceStats | null;
  loading: boolean;
  error: string | null;
  currentStatus: "clocked-in" | "clocked-out" | "not-checked-in";
  clockIn: () => Promise<void>;
  clockOut: () => Promise<void>;
  fetchAttendance: (month: number, year: number, employeeId?: string) => Promise<void>;
  fetchStats: () => Promise<void>;
  resetError: () => void;
}

const AttendanceContext = createContext<AttendanceContextType | undefined>(undefined);

export const AttendanceContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // const { user } = useAuthContext();
  const [records, setRecords] = useState<AttendanceRecord[]>([]);
  const [stats, setStats] = useState<AttendanceStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentStatus, setCurrentStatus] = useState<
    "clocked-in" | "clocked-out" | "not-checked-in"
  >("not-checked-in");

  // useEffect(() => {
  //   if (user) {
  //     initializeAttendance();
  //   }
  // }, [user]);

  // const initializeAttendance = async () => {
  //   try {
  //     setLoading(true);
  //     const today = new Date();
  //     await Promise.all([
  //       fetchAttendance(today.getMonth() + 1, today.getFullYear()),
  //       fetchStats(),
  //       checkCurrentStatus(),
  //     ]);
  //   } catch (err: any) {
  //     setError("Failed to initialize attendance data");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const checkCurrentStatus = async () => {
    try {
      const response = await api.get('/attendance/today');
      const todayRecords = response.data;
      
      if (todayRecords.length > 0) {
        const isClockedIn = todayRecords.some(
          (record: any) => record.clockIn && !record.clockOut
        );
        setCurrentStatus(isClockedIn ? 'clocked-in' : 'clocked-out');
      } else {
        setCurrentStatus('not-checked-in');
      }
    } catch (err: any) {
      setCurrentStatus('not-checked-in');
    }
  };

  const clockIn = async () => {
    try {
      setLoading(true);
      await api.post('/attendance/clock-in');
      setCurrentStatus('clocked-in');
      await Promise.all([
        fetchStats(),
        fetchAttendance(new Date().getMonth() + 1, new Date().getFullYear())
      ]);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to clock in');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const clockOut = async () => {
    try {
      setLoading(true);
      await api.post('/attendance/clock-out');
      setCurrentStatus('clocked-out');
      await Promise.all([
        fetchStats(),
        fetchAttendance(new Date().getMonth() + 1, new Date().getFullYear())
      ]);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to clock out');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchAttendance = async (month: number, year: number, employeeId?: string) => {
    try {
      setLoading(true);
      let url = `/attendance/history?month=${month}&year=${year}`;
      if (employeeId) {
        url += `&employeeId=${employeeId}`;
      }
      const response = await api.get(url);
      !employeeId && checkCurrentStatus()
      setRecords(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch attendance records');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      setLoading(true);
      const response = await api.get('/attendance/stats');
      setStats(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch attendance stats');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetError = () => {
    setError(null);
  };

  const value = {
    records,
    stats,
    loading,
    error,
    currentStatus,
    clockIn,
    clockOut,
    fetchAttendance,
    fetchStats,
    resetError
  };

  return (
    <AttendanceContext.Provider value={value}>
      {children}
    </AttendanceContext.Provider>
  );
};

export const useAttendanceContext = () => {
  const context = useContext(AttendanceContext);
  if (context === undefined) {
    throw new Error('useAttendanceContext must be used within an AttendanceContextProvider');
  }
  return context;
};