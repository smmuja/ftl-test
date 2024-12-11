import Link from "next/link";
import { CiHome } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";

export function LeftSideBar() {
  return (
    <>
      <div className="bg-white shadow-md w-fit h-screen mt-5">
        <div>
          <Link href={"/"}>
            <CiHome className="m-5 size-10 bg-teal-500 rounded-md text-white" />
          </Link>

          <MdManageAccounts className="m-5 size-10 bg-transparent rounded-md text-teal-500" />
        </div>
      </div>
    </>
  );
}
