import Link from "next/link";

export default function Header() {
  return (
    <div>
      <h1>Logo</h1>
      <nav>
        <Link href={'/posts/add'}>Add News</Link>
      </nav>
    </div>
  )
}
