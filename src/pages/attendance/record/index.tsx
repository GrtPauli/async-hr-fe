import DashboardLayout from "../../../layouts/dashboard";
import { useState, useEffect, useCallback } from "react";
import { useAttendanceContext } from "../../../context/attendance";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
} from "date-fns";
import { Button, Spin, Alert } from "antd";
import {
  ClockCircleOutlined,
  CheckCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import AppCard from "../../../components/card";
import { useParams } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import AppButton from "../../../components/button";

const RecordAttendancePage = () => {
  const {
    records,
    loading,
    error,
    currentStatus,
    clockIn,
    clockOut,
    fetchAttendance,
    resetError,
  } = useAttendanceContext();
  const { id } = useParams<{ id: string }>();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<"calendar" | "detail">("calendar");

  // Fetch data only when month changes
  useEffect(() => {
    const fetchData = async () => {
      await fetchAttendance(
        currentMonth.getMonth() + 1,
        currentMonth.getFullYear(),
        id
      );
    };
    fetchData();
  }, [currentMonth.getMonth(), currentMonth.getFullYear(), id]);

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const handleDateClick = (day: Date) => {
    setSelectedDate(day);
    setViewMode("detail");
  };

  const handleBackToCalendar = () => {
    setViewMode("calendar");
  };

  const handleClockIn = async () => {
    try {
      await clockIn();
    } catch (err) {
      console.error(err);
    }
  };

  const handleClockOut = async () => {
    try {
      await clockOut();
    } catch (err) {
      console.error(err);
    }
  };

  const renderDay = (day: Date) => {
    const dayRecords = records.filter((record) =>
      isSameDay(new Date(record.date), day)
    );
    const isCurrentMonth = isSameMonth(day, currentMonth);
    const isDayToday = isToday(day);

    return (
      <motion.div
        key={day.toString()}
        onClick={() => handleDateClick(day)}
        className={`border border-gray-300 rounded-lg dark:border-gray-700/60 p-2 min-h-20 cursor-pointer relative ${
          isCurrentMonth ? "" : "opacity-50"
        } hover:bg-violet-700 hover:text-white ${
          isDayToday
            ? "bg-violet-700 !text-white"
            : "text-gray-800 dark:text-gray-100"
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="font-bold mb-1">{format(day, "d")}</div>
        {dayRecords.length > 0 && (
          <div className="absolute bottom-1 right-1 flex items-center gap-1">
            {dayRecords[0].status === "present" && (
              <>
                <CheckCircleOutlined className="" />
                <span className="text-xs ml-1">Present</span>
              </>
            )}
            {dayRecords[0].status === "half-day" && (
              <>
                <ClockCircleOutlined className="" />
                <span className="text-xs ml-1">Half Day</span>
              </>
            )}
            {dayRecords[0].status === "absent" && (
              <>
                <span className="">✖</span>
                <span className="text-xs ml-1">Absent</span>
              </>
            )}
          </div>
        )}
      </motion.div>
    );
  };

  const renderDetailView = () => {
    if (!selectedDate) return null;

    const dayRecords = records.filter((record) =>
      isSameDay(new Date(record.date), selectedDate)
    );

    // Calculate total hours for all records on this day
    const totalDayHours = dayRecords.reduce(
      (sum, record) => sum + (record.totalHours || 0),
      0
    );

    const isSelectedToday = isToday(selectedDate);
    const isClockedIn =
      isSelectedToday &&
      dayRecords.some((record) => record.clockIn && !record.clockOut);

    return (
      <AppCard>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="p-3"
        >
          <AppButton
            onClick={handleBackToCalendar}
            className="flex items-center gap-2 mb-5"
          >
            <HiArrowLeft />
            Back to Calendar
          </AppButton>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              {format(selectedDate, "EEEE, MMMM d, yyyy")}
            </h2>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Total: {totalDayHours.toFixed(2)} hours
            </h3>
          </div>

          {isSelectedToday && !id && (
            <div className="flex gap-4 mb-6">
              <AppButton
                onClick={handleClockIn}
                disabled={currentStatus === "clocked-in"}
                loading={loading}
                 className="w-full"
              >
                Clock In
              </AppButton>

              <AppButton
                onClick={handleClockOut}
                disabled={currentStatus !== "clocked-in"}
                loading={loading}
                variant="danger"
                className="w-full"
              >
                Clock Out
              </AppButton>
            </div>
          )}

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Attendance Records</h3>
            {dayRecords.length === 0 ? (
              <p>No attendance records for this day</p>
            ) : (
              <div className="space-y-4">
                {dayRecords.map((record, index) => (
                  <div key={index} className="border-b border-gray-300 dark:border-gray-700/60 pb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-sm">Clock In:</p>
                        <p className="text-sm font-light">
                          {record.clockIn
                            ? format(new Date(record.clockIn), "hh:mm a")
                            : "N/A"}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Clock Out:</p>
                        <p className="text-sm font-light">
                          {record.clockOut
                            ? format(new Date(record.clockOut), "hh:mm a")
                            : "N/A"}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="font-medium text-sm">Total Hours:</p>
                      <p className="text-sm font-light">{record.totalHours || 0} hours</p>
                    </div>
                    <div className="mt-2">
                      <p className="font-medium text-sm">Status:</p>
                      <p className="text-sm font-light capitalize">{record.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </AppCard>
    );
  };

  const renderCalendarView = () => {
    const daysInMonth = eachDayOfInterval({
      start: startOfMonth(currentMonth),
      end: endOfMonth(currentMonth),
    });

    return (
      <AppCard>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="p-3"
        >
          <div className="flex justify-between items-center mb-5">
            <AppButton
              onClick={handlePrevMonth}
              className="flex items-center gap-2"
            >
              <HiArrowLeft />
              Previous
            </AppButton>
            <h2 className="text-xl font-semibold">
              {format(currentMonth, "MMMM yyyy")}
            </h2>
            <AppButton
              onClick={handleNextMonth}
              className="flex items-center gap-2"
            >
              Next
              <HiArrowRight />
            </AppButton>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-bold p-2">
                {day}
              </div>
            ))}
            {daysInMonth.map((day) => renderDay(day))}
          </div>
        </motion.div>
      </AppCard>
    );
  };

  return (
    <DashboardLayout>
      <div>
        {id ? (
          <div className="border-b border-gray-300 dark:border-gray-700/60 pb-3 mb-5">
            <Link
              to="/admin/attendance"
              className="inline-flex items-center gap-2 cursor-pointer hover:text-violet-500 mb-5"
            >
              <HiArrowLeft />
              <span className="text-sm">Back</span>
            </Link>

            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-2xl mb-1">
                Employee Attendance
              </h3>
              <p className="ant-progress-text font-light">
                View employee attendance
              </p>
            </div>
          </div>
        ) : (
          <div className="border-b border-gray-300 dark:border-gray-700/60 pb-3 mb-5">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-2xl mb-1">
              Attendance
            </h3>
            <p className="text-gray-800 text-sm dark:text-gray-100 font-light">
              Record your attendance daily
            </p>
          </div>
        )}

        <div className="max-w-5xl mx-auto">
          {error && (
            <Alert
              message="Error"
              description={error}
              type="error"
              showIcon
              closable
              onClose={() => resetError()}
              className="mb-4"
            />
          )}

          <AnimatePresence mode="wait">
            {viewMode === "calendar"
              ? renderCalendarView()
              : renderDetailView()}
          </AnimatePresence>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RecordAttendancePage;
