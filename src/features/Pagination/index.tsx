import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { getMaximumPageNumber } from "../../utils/pagination";

interface Props {
  currentPage: number;
  total: number;
  limit: number;
  onPageChange: (currentPage: number) => void;
}

const Pagination = ({ currentPage, total, limit, onPageChange }: Props) => {
  const maxPageNumber = getMaximumPageNumber(total, limit);

  const handleNextPage = () => {
    const nextPageNumber = currentPage + 1;
    if (nextPageNumber >= maxPageNumber) {
      return;
    }

    onPageChange(nextPageNumber);
  };

  const handlePreviousPage = () => {
    const previousPageNumber = currentPage - 1;
    if (previousPageNumber < 1) {
      return;
    }

    onPageChange(previousPageNumber);
  };

  return (
    <div className="pagination">
      <button className="paginationButton" onClick={handlePreviousPage}>
        <BsArrowLeft />
        <span>Previous Page</span>
      </button>
      <button className="paginationButton" onClick={handleNextPage}>
        <span>Next Page</span>
        <BsArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
