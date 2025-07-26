import { useEffect, useState } from "react";
import AppCard from "../../components/card";
import DashboardLayout from "../../layouts/dashboard";
import DetailsSidebar from "../profile/components/details-sidebar";
import BasicDetails from "../profile/components/details/basic";
import ContactDetails from "../profile/components/details/contact";
import MainDetails from "../profile/components/main-details";
import { useParams } from "react-router-dom";
import { useAdminContext } from "../../context/admin";
import EmployeeProfileProgress from "./progress";
import AppLoader from "../../components/loader";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";

export default function EmployeeDetailPage() {
  const [current, setCurrent] = useState<
    "basic" | "contact" | "job" | "bank" | "documents"
  >("basic");
  const { id } = useParams<{ id: string }>();
  const { getEmployeeDetails, employeeDetails, loading } = useAdminContext();

  useEffect(() => {
    if (id) {
      getEmployeeDetails(id);
    }
  }, [id]);

  return (
    <DashboardLayout>
      {loading ? (
        <div className="flex items-center justify-center p-20">
          <AppLoader />
        </div>
      ) : (
        <div>
          <div className="border-b border-gray-300 dark:border-gray-700/60 pb-3 mb-5">
            <Link to='/admin/employees' className="inline-flex items-center gap-2 cursor-pointer hover:text-violet-500 mb-5">
              <HiArrowLeft/>
              <span className="text-sm">Back</span>
            </Link>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-2xl mb-1">
                Employee Details
              </h3>
              <p className="ant-progress-text font-light">
                View employee details
              </p>
            </div>
          </div>

          <div className="flex justify-between gap-5 mb-5">
            <EmployeeProfileProgress profile={employeeDetails?.profile} />
            <MainDetails noEdit profile={employeeDetails?.profile} />
          </div>

          <AppCard className="w-full">
            <div className="border-b border-gray-300 dark:border-gray-700/60 pb-3 flex justify-between items-center">
              <p className="font-bold text-xl">My Details</p>
            </div>

            <div className="flex">
              <DetailsSidebar setCurrent={setCurrent} current={current} />

              <div className="w-[75%] p-5">
                {current == "basic" && (
                  <BasicDetails profile={employeeDetails?.profile} />
                )}
                {current == "contact" && (
                  <ContactDetails profile={employeeDetails?.profile} />
                )}
              </div>
            </div>
          </AppCard>
        </div>
      )}
    </DashboardLayout>
  );
}
