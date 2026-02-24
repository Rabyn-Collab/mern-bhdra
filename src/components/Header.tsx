import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex  gap-5 justify-between px-5 items-center">

      <h1 className="text-2xl font-bold">Next Js</h1>


      <div className="flex items-center gap-5">
        <nav>
          <Link href="/form/add">Add Employee</Link>
        </nav>
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        {/* Show the user button when the user is signed in */}
        <SignedIn>
          <UserButton />
        </SignedIn>

      </div>



    </div>
  )
}
