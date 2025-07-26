import type { Profile } from "../../../../types/profile";
import DetailItem from "./item";

interface IProps {
  profile: Profile
}

export default function ContactDetails({ profile }: IProps) {

  return (
    <div className="px-5 flex flex-col gap-3">
        <div className="flex flex-col gap-3">
            <p className="font-semibold border-b border-gray-300 dark:border-gray-700/60 pb-3">Address</p>

            <div className="grid grid-cols-2 border-b border-gray-300 dark:border-gray-700/60 pb-3">
                <DetailItem
                    label="Country"
                    value={profile?.contactDetails?.address?.country}
                />

                <DetailItem 
                    label="State" 
                    value={profile?.contactDetails?.address?.state} 
                />
            </div>

            <div className="grid grid-cols-2 border-b border-gray-300 dark:border-gray-700/60 pb-3">
                <DetailItem
                    label="City"
                    value={profile?.contactDetails?.address?.city}
                />

                <DetailItem 
                    label="Postal Code" 
                    value={profile?.contactDetails?.address?.postalCode} 
                />
            </div>

            <div className="pb-3">
                <DetailItem 
                    label="Street Address" 
                    value={profile?.contactDetails?.address?.street} 
                />
            </div>
        </div>

        <div className="flex flex-col gap-3">
            <p className="font-semibold border-b border-gray-300 dark:border-gray-700/60 pb-3">Emergency Contact</p>

            <div className="grid grid-cols-2 border-b border-gray-300 dark:border-gray-700/60 pb-3">
                <DetailItem
                    label="Emergency Contact Name"
                    value={profile?.contactDetails?.emergencyContact?.name}
                />

                <DetailItem 
                    label="Emergency Contact Phone" 
                    value={profile?.contactDetails?.emergencyContact?.phone} 
                />
            </div>

            <div className="border-b border-gray-300 dark:border-gray-700/60 pb-3">
                <DetailItem 
                    label="Relationship" 
                    value={profile?.contactDetails?.emergencyContact?.relationship} 
                />
            </div>
        </div>
    </div>
  );
}
