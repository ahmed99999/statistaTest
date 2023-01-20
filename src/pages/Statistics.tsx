import React, { useEffect, useState } from "react";
import { useStatistics } from "../hooks/useStatistics";
import Statistic from "../components/Statistic";
import SearchbarInput from "../components/Searchbar";
import Favorites from "../Features/Favorites";
import { StatisticModel } from "../models";
import { objectExistsInArray } from "../utils/object";

const onSuccess = () => {
  console.log("fetching statistics");
};

const onError = () => {
  console.log("encountering errors while fetching statistics");
};

const Statistics = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [favouriteStatistics, setFavouriteStatistics] = useState<
    StatisticModel[]
  >([]);

  const statisticsResult = useStatistics(searchValue, onSuccess, onError);
  const { isError, isLoading, data: statistics } = statisticsResult;

  useEffect(() => {
    statisticsResult
      .refetch()
      .then(() => console.log(`getting new search data for ${searchValue}`));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const onAddToFavourites = (statistic: StatisticModel) => {
    if (objectExistsInArray(favouriteStatistics, statistic, "identifier")) {
      return;
    }
    const resultFavourites = [...favouriteStatistics, statistic];
    setFavouriteStatistics(() => resultFavourites);
  };

  const onDeleteFromFavourites = (statisticId: number) => {
    const resultFavourites = favouriteStatistics.filter(
      (favouriteStatistic) => favouriteStatistic.identifier !== statisticId
    );
    setFavouriteStatistics(() => resultFavourites);
  };

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
    <div className="flex flex-col">
      <SearchbarInput onChange={setSearchValue} />
      <div className="flex flex-row justify-between">
        <div>
          {statistics.map((statistic) => (
            <Statistic
              key={statistic.identifier}
              statistic={statistic}
              onAddToFavourites={onAddToFavourites}
            />
          ))}
        </div>

        <Favorites
          items={favouriteStatistics}
          onDeleteFromFavourites={onDeleteFromFavourites}
        />
      </div>
    </div>
  );
};

export default Statistics;
