import type { Profile } from "../../../../types/profile";
import DetailItem from "./item";

interface IProps {
  profile: Profile;
}

export default function BankDetails({ profile }: IProps) {
  return (
    <div className="px-5 flex flex-col gap-3">
      <div className="grid grid-cols-2 border-b border-gray-300 dark:border-gray-700/60 pb-3">
        <DetailItem label="Bank Name" value={profile?.bankDetails?.bankName} />

        <DetailItem
          label="Branch Code"
          value={profile?.bankDetails?.branchCode}
        />
      </div>

      <div className="grid grid-cols-2 border-b border-gray-300 dark:border-gray-700/60 pb-3">
        <DetailItem
          label="Account Number"
          value={profile?.bankDetails?.accountNumber}
        />

        <DetailItem
          label="Account Holder Name"
          value={profile?.bankDetails?.accountHolderName}
        />
      </div>

      <DetailItem label="Tax Id" value={profile?.bankDetails?.taxId} />
    </div>
  );
}
