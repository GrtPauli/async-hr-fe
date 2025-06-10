import DashboardLayout from "../../layouts/dashboard";
import DashboardCard1 from "./components/card1";

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-12 gap-6">
        {/* Line chart (Acme Plus) */}
        <DashboardCard1 />
        {/* Line chart (Acme Advanced) */}
        {/* <DashboardCard02 /> */}
        {/* Line chart (Acme Professional) */}
        {/* <DashboardCard03 /> */}
        {/* Bar chart (Direct vs Indirect) */}
        {/* <DashboardCard04 /> */}
        {/* Line chart (Real Time Value) */}
        {/* <DashboardCard05 /> */}
        {/* Doughnut chart (Top Countries) */}
        {/* <DashboardCard06 /> */}
        {/* Table (Top Channels) */}
        {/* <DashboardCard07 /> */}
        {/* Line chart (Sales Over Time) */}
        {/* <DashboardCard08 /> */}
        {/* Stacked bar chart (Sales VS Refunds) */}
        {/* <DashboardCard09 /> */}
        {/* Card (Customers) */}
        {/* <DashboardCard10 /> */}
        {/* Card (Reasons for Refunds) */}
        {/* <DashboardCard11 /> */}
        {/* Card (Recent Activity) */}
        {/* <DashboardCard12 /> */}
        {/* Card (Income/Expenses) */}
        {/* <DashboardCard13 /> */}
      </div>
    </DashboardLayout>
  );
}
