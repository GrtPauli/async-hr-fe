interface IProps {
    label: string
    value: string
}

export default function DetailItem({ label, value }: IProps) {
  return (
    <div>
        <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
        <p className="text-gray-800 dark:text-gray-100 text-sm leading-loose">{value}</p>
    </div>
  )
}
