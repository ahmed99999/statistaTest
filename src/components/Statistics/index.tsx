import React from "react";
import Statistic from "../Statistic";
import { StatisticModel } from "../../models";

interface Props {
  statistics: StatisticModel[] | undefined;
  onAddToFavourites: (statistic: StatisticModel) => void;
  isLoading: boolean;
  isError: boolean;
}

const Statistics = ({
  statistics,
  onAddToFavourites,
  isLoading,
  isError,
}: Props) => {
  if (isLoading) {
    return <div>Loading Statistics...</div>;
  }

  if (isError) {
    return <div>Error Loading Statistics...</div>;
  }

  if (!statistics || !statistics.length) {
    return <div>There are statistics</div>;
  }

  return (
    <div className="border-2 border-amber-700 w-9/12">
      {statistics.map((statistic) => (
        <Statistic
          key={statistic.identifier}
          statistic={statistic}
          onAddToFavourites={onAddToFavourites}
        />
      ))}
    </div>
  );
};

export default Statistics;
