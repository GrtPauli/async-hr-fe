import AppCard from "../../../components/card";
import { IMAGES } from "../../../constants";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import AppEditButton from "../../../components/button/edit";

export default function MainDetails() {
  return (
    <AppCard className="w-[60%] relative">
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
            Stella Briss
          </h3>
          <p className="text-sm leading-loose font-light text-gray-800 dark:text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            magnam veritatis maxime deleniti alias quasi possimus? Saepe soluta
            eum dolores.
          </p>

          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500">
              <MdEmail />
              <p className="text-xs">stella@gmail.com</p>
            </div>
            <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500">
              <FaPhoneSquareAlt />
              <p className="text-xs">09134102236</p>
            </div>
          </div>
        </div>
      </div>

      <AppEditButton className="absolute top-3 right-3" />
    </AppCard>
  );
}
