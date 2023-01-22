import React, { useEffect, useState } from "react";
import { useStatistics } from "../hooks/useStatistics";
import SearchbarInput from "../components/Searchbar";
import Favorites from "../features/Favorites";
import { StatisticModel } from "../models";
import { objectExistsInArray } from "../utils/object";
import Statistics from "../components/Statistics";

const StatisticsPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [favouriteStatistics, setFavouriteStatistics] = useState<
    StatisticModel[]
  >([]);

  const statisticsResult = useStatistics(searchValue);
  const { isError, isLoading, data: statistics } = statisticsResult;

  useEffect(() => {
    statisticsResult
      .refetch()
      .then(() => console.log(`getting new search data for ${searchValue}`));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const onAddToFavourites = (statistic: StatisticModel) => {
    // here would be the post request to with just statisticId to add to favourites
    if (objectExistsInArray(favouriteStatistics, statistic, "identifier")) {
      return;
    }
    const resultFavourites = [...favouriteStatistics, statistic];
    setFavouriteStatistics(() => resultFavourites);
  };

  const onDeleteFromFavourites = (statisticId: number) => {
    // here would be the delete request to with just statisticId to delete from favourites
    const resultFavourites = favouriteStatistics.filter(
      (favouriteStatistic) => favouriteStatistic.identifier !== statisticId
    );
    setFavouriteStatistics(() => resultFavourites);
  };

  return (
    <div className="flex flex-col">
      <SearchbarInput onChange={setSearchValue} />
      <div className="flex bg-gray-100">
        <Statistics
          statistics={statistics}
          onAddToFavourites={onAddToFavourites}
          isLoading={isLoading}
          isError={isError}
          className={"w-4/5"}
        />

        <Favorites
          items={favouriteStatistics}
          onDeleteFromFavourites={onDeleteFromFavourites}
          className={"w-1/4"}
        />
      </div>
    </div>
  );
};

export default StatisticsPage;
