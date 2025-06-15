import { useState } from "react";
import AppCard from "../../components/card";
import DashboardLayout from "../../layouts/dashboard";
import DetailsSidebar from "./components/details-sidebar";
import MainDetails from "./components/main-details";
import ProfileProgress from "./components/progress";
import BasicDetails from "./components/details/basic";
import AppEditButton from "../../components/button/edit";
import { AppModal } from "../../components/modal";
import EditBasicDetails from "./components/forms/edit-basic-details";

export default function ProfilePage() {
  const [current, setCurrent] = useState<
    "basic" | "contact" | "job" | "bank" | "documents"
  >("basic");
  const [modal, showModal] = useState(false)

  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between gap-5 mb-5">
          <ProfileProgress />
          <MainDetails />
        </div>

        <AppCard className="w-full">
          <div className="border-b pb-3 flex justify-between items-center">
            <p className="font-bold text-xl">My Details</p>
            <AppEditButton onClick={() => showModal(true)} />
          </div>

          <div className="flex">
            <DetailsSidebar setCurrent={setCurrent} current={current} />

            <div className="w-[75%] p-5">
              {current == "basic" && <BasicDetails />}
            </div>
          </div>
        </AppCard>

        <AppModal
          show={modal}
          onDimiss={() => showModal(false)} 
          title={
            current == 'basic' ? 'Edit Basic Details'
            : ''
          }
          subTitle="Edit details and proceed to update"
          width={600}
        >
          <>
            {current == 'basic' && <EditBasicDetails onDismiss={() => showModal(false)}/>}
          </>
        </AppModal>
      </div>
    </DashboardLayout>
  );
}
