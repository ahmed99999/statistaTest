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
      <div className="flex flex-row">
        <div className="border-2 border-amber-700 w-9/12">
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
