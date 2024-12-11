import { useState } from "react";

export default function usePagination<T>(data: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = Math.ceil((data?.length || 0) / itemsPerPage);

  const paginatedData = (data || []).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (currentPage > totalPage) {
    setCurrentPage(totalPage || 1);
  }

  return { currentPage, setCurrentPage, paginatedData, totalPage };
}
