

const colors = [
  { label: 'Red', color: 'bg-red-500' },
  { label: 'Blue', color: 'bg-blue-600' },
  { label: 'Blue Grey', color: 'bg-gray-800' },
  { label: 'Teal', color: 'bg-teal-500' },
  { label: 'Yellow', color: 'bg-yellow-500' },
  { label: 'Orange', color: 'bg-orange-500' },
];

export default function ColorSection() {
  return (
    <div className="border-t border-b border-gray-200 space-y-5 my-5 pt-5 pb-5">
      <h1 className="text-center">Color Classes</h1>

      <div className="flex flex-wrap text-white flex-col sm:flex-row">
        {colors.map(({ label, color }) => (
          <div className="grow">
            <h1 className={`${color} py-2 px-4`}>{label}</h1>
          </div>
        ))}

      </div>
    </div >
  )
}
