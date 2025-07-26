import AppCard from "../../../components/card";
import { IMAGES } from "../../../constants";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import AppEditButton from "../../../components/button/edit";
import type { Profile } from "../../../types/profile";

interface IProps {
  profile: Profile
  noEdit?: boolean
}

export default function MainDetails({ profile, noEdit }: IProps) {
  
  return (
    <div className={`${profile?.user?.userType !== 'admin' ? 'w-[60%]' : 'w-full'}`}>
      <AppCard className="relative !h-full">
        <div className="flex gap-5 items-center h-full">
          <img
            className="w-36 h-36 rounded-full border-violet-700 border-4"
            src={IMAGES.UserImg}
            width="32"
            height="32"
            alt="User"
          />
          <div>
            <h3 className="text-2xl font-black text-gray-800 dark:text-gray-100">
              {profile?.basicDetails?.firstName} {profile?.basicDetails?.lastName}
            </h3>
            <p className="text-sm leading-loose font-light text-gray-800 dark:text-gray-100">
              {profile?.basicDetails?.bio || '--'}
            </p>

            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500">
                <MdEmail />
                <p className="text-xs">{profile?.basicDetails?.email}</p>
              </div>

              {profile?.basicDetails?.phoneNumber && (
                <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500">
                  <FaPhoneSquareAlt />
                  <p className="text-xs">{profile?.basicDetails?.phoneNumber}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {!noEdit && (
          <AppEditButton className="absolute top-3 right-3" />
        )}
      </AppCard>
    </div>
  );
}
