import { useProfileContext } from "../../context/profile";
import DashboardLayout from "../../layouts/dashboard";
import AdminDashboard from "./admin";

export default function HomePage() {
  const {profile} = useProfileContext()

  return (
    <DashboardLayout>
      {profile?.user?.userType == 'admin' ? (
        <AdminDashboard/>
      ) : (
        <div className="grid grid-cols-12 gap-6">
          
        </div>
      )}
    </DashboardLayout>
  );
}
