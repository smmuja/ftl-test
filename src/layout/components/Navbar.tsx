import Link from "next/link";
import { FaUser } from "react-icons/fa";

export function Navbar() {
  return (
    <>
      <nav className="bg-gradient-to-r from-black to-teal-900 flex justify-between items-center w-full sticky top-0 text-white font-semibold z-10 h-[90px] p-3">
        <Link href="/" className="text-white">
          FTL iMeeting
        </Link>
        <div className="gap-3 py-3 flex flex-row">
          <FaUser className="text-white" />
          <p className="font-bold text-white">John Doe</p>
        </div>
      </nav>
    </>
  );
}
