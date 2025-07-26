import AppCard from "../../components/card";
import { ConfigProvider, Progress } from "antd";
import { FaCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import type { Profile } from "../../types/profile";

interface IProps {
  profile: Profile
}

export default function EmployeeProfileProgress({ profile }: IProps) {
  return (
    <div className="w-[40%]">
      <AppCard className="h-full">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Profile Progress
          </h2>

          <div className="flex gap-5 items-center justify-between">
            <div className="text-sm font-light flex flex-col gap-2 justify-between">
              <div className="flex items-center gap-3">
                {profile?.basicDetails?.completed ? (
                  <FaCircleCheck size={20} className="text-violet-700" />
                ) : (
                  <MdCancel size={20} className="text-red-500" />
                )}
                <p className="text-gray-800 dark:text-gray-100">
                  Basic Details
                </p>
              </div>

              <div className="flex items-center gap-3">
                {profile?.contactDetails?.completed ? (
                  <FaCircleCheck size={20} className="text-violet-700" />
                ) : (
                  <MdCancel size={20} className="text-red-500" />
                )}
                <p className="text-gray-800 dark:text-gray-100">
                  Contact Details
                </p>
              </div>

              <div className="flex items-center gap-3">
                {profile?.jobDetails?.completed ? (
                  <FaCircleCheck size={20} className="text-violet-700" />
                ) : (
                  <MdCancel size={20} className="text-red-500" />
                )}
                <p className="text-gray-800 dark:text-gray-100">Job Details</p>
              </div>

              <div className="flex items-center gap-3">
                {profile?.bankDetails?.completed ? (
                  <FaCircleCheck size={20} className="text-violet-700" />
                ) : (
                  <MdCancel size={20} className="text-red-500" />
                )}
                <p className="text-gray-800 dark:text-gray-100">Bank Details</p>
              </div>

              <div className="flex items-center gap-3">
                {profile?.documents?.completed ? (
                  <FaCircleCheck size={20} className="text-violet-700" />
                ) : (
                  <MdCancel size={20} className="text-red-500" />
                )}
                <p className="text-gray-800 dark:text-gray-100">Documents</p>
              </div>
            </div>

            <ConfigProvider
              theme={{
                token: {
                  fontFamily: "",
                },
              }}
            >
              <Progress
                type="dashboard"
                steps={8}
                percent={profile?.completionPercentage}
                trailColor="rgba(0, 0, 0, 0.06)"
                strokeColor="#5d47de"
                strokeWidth={20}
                size={150}
              />
            </ConfigProvider>

            {/* <Progress
              type="circle"
              percent={100}
              steps={{ count: stepsCount, gap: stepsGap }}
              trailColor="rgba(0, 0, 0, 0.06)"
              strokeWidth={20}
            /> */}
          </div>
        </div>
      </AppCard>
    </div>
  );
}
