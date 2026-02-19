import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-baseline gap-5">

      <h1 className="text-2xl font-bold">Next Js</h1>

      <nav>
        <Link href="/form/add">Add Employee</Link>
      </nav>

    </div>
  )
}
