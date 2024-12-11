import { useState } from "react";

export default function usePagination<T>(data: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = (data && data.length ? data : []).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPage = Math.ceil(data.length / itemsPerPage);
  return { currentPage, setCurrentPage, paginatedData, totalPage };
}