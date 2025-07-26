import { AiFillProfile } from "react-icons/ai";
import type { Profile } from "../../../types/profile";

const sections = [
  {
    title: "Basic Details",
    icon: <AiFillProfile size={20} className="text-violet-700" />,
    key: "basic",
  },
  {
    title: "Contact Details",
    icon: <AiFillProfile size={20} className="text-violet-700" />,
    key: "contact",
  },
  {
    title: "Job Details",
    icon: <AiFillProfile size={20} className="text-violet-700" />,
    key: "job",
  },
  {
    title: "Bank Details",
    icon: <AiFillProfile size={20} className="text-violet-700" />,
    key: "bank",
  },
  {
    title: "Documents",
    icon: <AiFillProfile size={20} className="text-violet-700" />,
    key: "documents",
  },
];

const sections2 = [
  {
    title: "Basic Details",
    icon: <AiFillProfile size={20} className="text-violet-700" />,
    key: "basic",
  },
  {
    title: "Contact Details",
    icon: <AiFillProfile size={20} className="text-violet-700" />,
    key: "contact",
  },
];

interface IProps {
  profile?: Profile;
  current: "basic" | "contact" | "job" | "bank" | "documents";
  setCurrent: (
    current: "basic" | "contact" | "job" | "bank" | "documents"
  ) => void;
}

export default function DetailsSidebar({
  current,
  setCurrent,
  profile,
}: IProps) {
  return (
    <div className="w-[25%] border-r border-gray-300 dark:border-gray-700/60 pr-3 pt-3">
      {profile?.user?.userType !== 'admin' ? (
        <div className="flex flex-col gap-2">
          {sections?.map((item) => (
            <button
              onClick={() => setCurrent(item.key as any)}
              key={item?.key}
              className={`
                  flex items-center gap-3 text-sm font-light
                  rounded-lg px-3 py-2 cursor-pointer
                  ${
                    current == item.key
                      ? "bg-violet-700/5"
                      : "hover:bg-violet-700/5 duration-150 ease-in"
                  }

              `}
            >
              {item.icon}
              <p className="text-gray-800 dark:text-gray-100">{item.title}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
        {sections2?.map((item) => (
          <button
            onClick={() => setCurrent(item.key as any)}
            key={item?.key}
            className={`
                flex items-center gap-3 text-sm font-light
                rounded-lg px-3 py-2 cursor-pointer
                ${
                  current == item.key
                    ? "bg-violet-700/5"
                    : "hover:bg-violet-700/5 duration-150 ease-in"
                }

            `}
          >
            {item.icon}
            <p className="text-gray-800 dark:text-gray-100">{item.title}</p>
          </button>
        ))}
      </div>
      )}
    </div>
  );
}
