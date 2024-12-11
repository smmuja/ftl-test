import { ruangMeetingData } from "@/data/RuangMeetingData";
import { RuangMeetingTable } from "../table/RuangMeetingTable";
import usePagination from "@/hooks/usePagination";
import { RuangMeetingDataProps } from "@/types/RuangMeetingDataProps";

export function DashboardRuangMeeting() {
  const { currentPage, setCurrentPage, paginatedData, totalPage } =
    usePagination<RuangMeetingDataProps>(ruangMeetingData, 2);
  return (
    <>
      {ruangMeetingData.length > 0 ? (
        <>
          <RuangMeetingTable ruangMeetingData={paginatedData} />

          <p className="text-end mt-3">
            Page {currentPage} of {totalPage}
          </p>
          <div className="flex gap-4 justify-end mt-4">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPage}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
