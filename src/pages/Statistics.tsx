import React, { useEffect, useState } from "react";
import { useStatistics } from "../hooks/useStatistics";
import Statistic from "../components/Statistic";
import SearchbarInput from "../components/Searchbar";

const onSuccess = () => {
  console.log("fetching statistics");
};

const onError = () => {
  console.log("encountering errors while fetching statistics");
};

const Statistics = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const statisticsResult = useStatistics(searchValue, onSuccess, onError);
  const { isError, isLoading, data: statistics } = statisticsResult;

  useEffect(() => {
    statisticsResult
      .refetch()
      .then(() => console.log(`getting new search data for ${searchValue}`));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

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
    <div className="">
      <SearchbarInput onChange={setSearchValue} />
      {statistics.map((statistic) => (
        <Statistic key={statistic.identifier} statistic={statistic} />
      ))}
    </div>
  );
};

export default Statistics;
