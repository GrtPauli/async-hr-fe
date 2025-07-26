import type { Profile } from "../../../../types/profile";
import DetailItem from "./item";

interface IProps {
  profile: Profile;
}

export default function JobDetails({ profile }: IProps) {
  return (
    <div className="px-5 flex flex-col gap-3">
      <div className="grid grid-cols-2 border-b border-gray-300 dark:border-gray-700/60 pb-3">
        <DetailItem label="Job Title" value={profile?.jobDetails?.jobTitle} />

        <DetailItem label="Employment Type" value={profile?.jobDetails?.employmentType} />
      </div>

      <div className="grid grid-cols-2 border-b border-gray-300 dark:border-gray-700/60 pb-3">
        <DetailItem label="Start Date" value={profile?.jobDetails?.startDate} />

        <DetailItem label="Work Mode" value={profile?.jobDetails?.workMode} />
      </div>
    </div>
  );
}
