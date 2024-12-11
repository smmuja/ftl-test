import { ruangMeetingData } from "@/data/RuangMeetingData";
import { RuangMeetingTable } from "../table/RuangMeetingTable";
import usePagination from "@/hooks/usePagination";
import { RuangMeetingDataProps } from "@/types/RuangMeetingDataProps";

export function DashboardRuangMeeting() {
  const { currentPage, setCurrentPage, paginatedData, totalPage } =
    usePagination<RuangMeetingDataProps>(ruangMeetingData, 2);

  const pageButtons = [];
  for (let i = 1; i <= totalPage; i++) {
    pageButtons.push(i);
  }

  const startIndex = (currentPage - 1) * 2 + 1; // 1-based index for start
  const endIndex = Math.min(currentPage * 2, ruangMeetingData.length); // 1-based index for end

  return (
    <>
      {ruangMeetingData.length > 0 ? (
        <>
          <RuangMeetingTable ruangMeetingData={paginatedData} />

          <p className="text-end mt-3">
            Page {currentPage} of {totalPage}
          </p>

          <div className="flex flex-row justify-between items-center">
            <div>
              <p>
                Showing{" "}
                <strong>
                  {startIndex}-{endIndex}
                </strong>{" "}
                of <strong>{ruangMeetingData.length}</strong>{" "}
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-50 border rounded"
              >
                Previous
              </button>

              {/* Show page buttons */}
              {pageButtons.map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded border ${
                    page === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPage}
                className="px-4 py-2 bg-gray-50  border rounded"
              >
                Next
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
