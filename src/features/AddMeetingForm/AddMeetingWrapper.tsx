import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { AddMeetingForm } from "./AddMeetingForm";

export function AddMeetingdWrapper() {
  return (
    <>
      <div className="border-gray-400 m-5 bg-slate-50 rounded-md shadow-md p-3">
        <div className="flex flex-row items-start gap-5">
          <div className="bg-teal-700 w-fit p-3">
            <MdOutlineKeyboardArrowLeft />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Ruang Meeting</h2>
            <p className="text-gray-600 flex flex-row items-center">
              Ruang Meeting{" "}
              <MdKeyboardArrowRight className="text-teal-900 font-bold text-xl" />{" "}
              Pesan Ruangan{" "}
            </p>
          </div>
        </div>

        <AddMeetingForm />
      </div>
    </>
  );
}
