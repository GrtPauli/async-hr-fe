import DetailItem from "./item";

export default function BasicDetails() {
  return (
    <div className="px-5 flex flex-col gap-3">
        <div className="grid grid-cols-2 border-b pb-3">
            <DetailItem
                label="First Name"
                value="Stella"
            />

            <DetailItem
                label="Last Name"
                value="Briss"
            />
        </div>
        <div className="grid grid-cols-2 border-b pb-3">
            <DetailItem
                label="Email"
                value="stella@gmail.com"
            />

            <DetailItem
                label="Phone Number"
                value="09134102236"
            />
        </div>
        <DetailItem
                label="Bio"
                value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum magnam veritatis maxime deleniti alias quasi possimus? Saepe soluta eum dolores."
            />
    </div>
  )
}
