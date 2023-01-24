import React, { useState } from "react";
import Statistic from "../Statistic";
import { StatisticModel } from "../../models";
import Pagination from "../../features/Pagination";
import { getItemsPerPageNumber } from "../../utils/pagination";

interface Props {
  statistics: StatisticModel[] | undefined;
  onAddToFavourites: (statistic: StatisticModel) => void;
  isLoading: boolean;
  isError: boolean;
  className?: string;
}

const Statistics = ({
  statistics,
  onAddToFavourites,
  isLoading,
  isError,
  className = "",
}: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) {
    return <div>Loading Statistics...</div>;
  }

  if (isError) {
    return <div>Error Loading Statistics...</div>;
  }

  if (!statistics || !statistics.length) {
    return <div>There are statistics</div>;
  }

  const LIMIT = 6;
  const currentStatistics = getItemsPerPageNumber(
    statistics,
    currentPage,
    LIMIT
  );

  const HandlePaginationChange = (pageNumber: number) => {
    setCurrentPage(() => pageNumber);
  };

  return (
    <div className={`${className} mb-3`}>
      <Pagination
        currentPage={currentPage}
        limit={LIMIT}
        total={statistics.length}
        onPageChange={HandlePaginationChange}
      />

      <div className="statisticList">
        {currentStatistics.map((statistic) => (
          <Statistic
            key={statistic.identifier}
            statistic={statistic}
            onAddToFavourites={onAddToFavourites}
          />
        ))}
      </div>
    </div>
  );
};

export default Statistics;
