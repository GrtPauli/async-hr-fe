import { FiEdit3 } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

interface IProps {
  className?: string
  onClick?: () => void
}

export default function AppEditButton({ className, onClick }: IProps) {
  return (
    <button onClick={onClick} className={
        twMerge(
            "text-white flex items-center justify-center bg-violet-700 rounded-full shadow-xl w-[30px] h-[30px]",
            className
        )
    }>
        <FiEdit3/>
    </button>
  )
}
