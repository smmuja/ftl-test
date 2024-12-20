import Link from "next/link";
import { DashboardRuangMeeting } from "./DashboardRuangMeeting";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export function DashboardWrapper() {
  return (
    <>
      <div className="border-gray-400 m-5 bg-slate-50 rounded-md shadow-md p-3">
        <div className="flex justify-end">
          <Link
            href={"/pesan-ruangan"}
            className="bg-teal-700 text-white font-bold p-3 rounded-md m-2"
          >
            + Pesan Ruangan
          </Link>
        </div>
        <div className="flex flex-row items-start gap-5 mb-10">
          <div className="bg-teal-700 w-fit p-3">
            <MdOutlineKeyboardArrowLeft />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Ruang Meeting</h2>
            <p className="text-gray-600">Ruang Meeting</p>
          </div>
        </div>

        <DashboardRuangMeeting />
      </div>
    </>
  );
}
