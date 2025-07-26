import type { Profile } from "../../../../types/profile";
import DetailItem from "./item";

interface IProps {
  profile: Profile
}

export default function BasicDetails({ profile }: IProps) {

  return (
    <div className="px-5 flex flex-col gap-3">
      <div className="grid grid-cols-2 border-b border-gray-300 dark:border-gray-700/60 pb-3">
        <DetailItem
          label="First Name"
          value={profile?.basicDetails?.firstName}
        />

        <DetailItem label="Last Name" value={profile?.basicDetails?.lastName} />
      </div>
      <div className="grid grid-cols-2 border-b border-gray-300 dark:border-gray-700/60 pb-3">
        <DetailItem label="Email" value={profile?.basicDetails?.email} />

        <DetailItem
          label="Phone Number"
          value={profile?.basicDetails?.phoneNumber}
        />
      </div>
      <DetailItem label="Bio" value={profile?.basicDetails?.bio} />
    </div>
  );
}
