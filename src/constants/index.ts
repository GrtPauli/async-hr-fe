import { AiOutlineClockCircle } from "react-icons/ai";
import UserAvatar from "../assets/images/user-avatar-32.png";
import UserImg from "../assets/images/user.png";
import { HiUsers } from "react-icons/hi2";

export const IMAGES = {
  UserAvatar,
  UserImg
};

export const APP_LINKS = {
  pages: [
    {
      title: "Dashboard",
      icon: `<path d="M5.936.278A7.983 7.983 0 0 1 8 0a8 8 0 1 1-8 8c0-.722.104-1.413.278-2.064a1 1 0 1 1 1.932.516A5.99 5.99 0 0 0 2 8a6 6 0 1 0 6-6c-.53 0-1.045.076-1.548.21A1 1 0 1 1 5.936.278Z" /><path d="M6.068 7.482A2.003 2.003 0 0 0 8 10a2 2 0 1 0-.518-3.932L3.707 2.293a1 1 0 0 0-1.414 1.414l3.775 3.775Z" />`,
      children: [
        { title: "Home", path: "/" },
      ],
    },
    {
      title: "Attendance",
      icon: AiOutlineClockCircle,
      children: [
        { title: "Summary", path: "/attendance/summary" },
        { title: "Clock In", path: "/attendance/record" },
      ],
    },
    {
      title: "Settings",
      icon: `<path d="M10.5 1a3.502 3.502 0 0 1 3.355 2.5H15a1 1 0 1 1 0 2h-1.145a3.502 3.502 0 0 1-6.71 0H1a1 1 0 0 1 0-2h6.145A3.502 3.502 0 0 1 10.5 1ZM9 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 9a3.502 3.502 0 0 1 3.355 2.5H15a1 1 0 1 1 0 2H8.855a3.502 3.502 0 0 1-6.71 0H1a1 1 0 1 1 0-2h1.145A3.502 3.502 0 0 1 5.5 9ZM4 12.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" fillRule="evenodd" />`,
      children: [
        { title: "My Profile", path: "/my-profile" },
      ],
    },
  ],
  more: [
  ],
  singleLinks: [
  ],
};

export const ADMIN_APP_LINKS = {
  pages: [
    {
      title: "Dashboard",
      icon: `<path d="M5.936.278A7.983 7.983 0 0 1 8 0a8 8 0 1 1-8 8c0-.722.104-1.413.278-2.064a1 1 0 1 1 1.932.516A5.99 5.99 0 0 0 2 8a6 6 0 1 0 6-6c-.53 0-1.045.076-1.548.21A1 1 0 1 1 5.936.278Z" /><path d="M6.068 7.482A2.003 2.003 0 0 0 8 10a2 2 0 1 0-.518-3.932L3.707 2.293a1 1 0 0 0-1.414 1.414l3.775 3.775Z" />`,
      children: [
        { title: "Home", path: "/" },
      ],
    },
    {
      title: "Employees",
      icon: HiUsers,
      children: [
        { title: "View Employees", path: "/admin/employees" },
      ],
    },
    {
      title: "Attendance",
      icon: AiOutlineClockCircle,
      children: [
        { title: "View Attendance", path: "/admin/attendance" },
      ],
    },
    {
      title: "Settings",
      icon: `<path d="M10.5 1a3.502 3.502 0 0 1 3.355 2.5H15a1 1 0 1 1 0 2h-1.145a3.502 3.502 0 0 1-6.71 0H1a1 1 0 0 1 0-2h6.145A3.502 3.502 0 0 1 10.5 1ZM9 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 9a3.502 3.502 0 0 1 3.355 2.5H15a1 1 0 1 1 0 2H8.855a3.502 3.502 0 0 1-6.71 0H1a1 1 0 1 1 0-2h1.145A3.502 3.502 0 0 1 5.5 9ZM4 12.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" fillRule="evenodd" />`,
      children: [
        { title: "My Profile", path: "/my-profile" },
      ],
    },
  ],
  more: [
  ],
  singleLinks: [
  ],
};