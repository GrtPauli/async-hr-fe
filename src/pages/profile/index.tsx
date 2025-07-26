import { useState } from "react";
import AppCard from "../../components/card";
import DashboardLayout from "../../layouts/dashboard";
import DetailsSidebar from "./components/details-sidebar";
import MainDetails from "./components/main-details";
import ProfileProgress from "./components/progress";
import BasicDetails from "./components/details/basic";
import AppEditButton from "../../components/button/edit";
import { AppModal } from "../../components/modal";
import EditBasicDetails from "./components/forms/basic";
import EditContactDetails from "./components/forms/contact";
import ContactDetails from "./components/details/contact";
import { useProfileContext } from "../../context/profile";
import JobDetails from "./components/details/job";
import EditJobDetails from "./components/forms/job";
import BankDetails from "./components/details/bank";
import EditBankDetails from "./components/forms/bank";

export default function ProfilePage() {
  const [current, setCurrent] = useState<
    "basic" | "contact" | "job" | "bank" | "documents"
  >("basic");
  const [modal, showModal] = useState(false)
  const {status, profile} = useProfileContext()

  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between gap-5 mb-5">
          {profile?.user?.userType !== 'admin' && (
            <ProfileProgress status={status as any} />
          )}
          <MainDetails profile={profile as any} />
        </div>

        <AppCard className="w-full">
          <div className="border-b border-gray-300 dark:border-gray-700/60 pb-3 flex justify-between items-center">
            <p className="font-bold text-gray-800 dark:text-gray-100 text-xl">My Details</p>
            <AppEditButton onClick={() => showModal(true)} />
          </div>

          <div className="flex">
            <DetailsSidebar profile={profile as any} setCurrent={setCurrent} current={current} />

            <div className="w-[75%] p-5">
              {current == "basic" && <BasicDetails profile={profile as any}/>}
              {current == "contact" && <ContactDetails profile={profile as any}/>}
              {current == "job" && <JobDetails profile={profile as any}/>}
              {current == "bank" && <BankDetails profile={profile as any}/>}
            </div>
          </div>
        </AppCard>

        <AppModal
          show={modal}
          onDimiss={() => showModal(false)} 
          title={
            current == 'basic' ? 'Edit Basic Details' :
            current == 'contact' ? 'Edit Contact Details':
            current == 'job' ? 'Edit Job Details':
            current == 'bank' ? 'Edit Bank Details'
            : ''
          }
          subTitle="Edit details and proceed to update"
          width={600}
        >
          <>
            {current == 'basic' && <EditBasicDetails onDismiss={() => showModal(false)}/>}
            {current == 'contact' && <EditContactDetails onDismiss={() => showModal(false)}/>}
            {current == 'job' && <EditJobDetails onDismiss={() => showModal(false)}/>}
            {current == 'bank' && <EditBankDetails onDismiss={() => showModal(false)}/>}
          </>
        </AppModal>
      </div>
    </DashboardLayout>
  );
}
