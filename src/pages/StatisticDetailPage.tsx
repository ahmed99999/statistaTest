import React from "react";
import { useStatistic } from "../hooks/useStatistic";
import { useParams } from "react-router-dom";

const onSuccess = () => {
  console.log("fetching statistics");
};

const onError = () => {
  console.log("encountering errors while fetching statistics");
};

const StatisticDetailPage = () => {
  let { statisticId = "" } = useParams();

  const {
    isError,
    isLoading,
    data: statistic,
  } = useStatistic(parseInt(statisticId), onSuccess, onError);

  if (isLoading) {
    return <div>Loading Statistic...</div>;
  }

  if (isError) {
    return <div>Error Loading Statistic...</div>;
  }

  if (!statistic) {
    return <div>this statistic was not found</div>;
  }

  return (
    <div className="">
      {statistic.title}
      {statistic.description}
    </div>
  );
};

export default StatisticDetailPage;
