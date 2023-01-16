import React from "react";
import { useStatistics } from "../hooks/useStatistics";
import Statistic from "../components/Statistic";

interface Props {}

const onSuccess = () => {
  console.log("fetching statistics");
};

const onError = () => {
  console.log("encountering errors while fetching statistics");
};

const Statistics = (_: Props) => {
  const {
    isError,
    isLoading,
    data: statistics,
  } = useStatistics(onSuccess, onError);

  if (isLoading) {
    return <div>Loading Statistics...</div>;
  }

  if (isError) {
    return <div>Error Loading Statistics...</div>;
  }

  if (!statistics) {
    return <div>There are no matching statistics for your search..</div>;
  }

  return (
    <div className="font-bold">
      {statistics.map((statistic) => (
        <Statistic key={statistic.identifier} statistic={statistic} />
      ))}
    </div>
  );
};

export default Statistics;
