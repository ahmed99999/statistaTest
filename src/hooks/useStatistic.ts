import { useQuery } from "react-query";
import { fetchStatistic } from "../services";

const onSuccess = () => {
  console.log("fetching statistic");
};

const onError = () => {
  console.log("encountering errors while fetching statistic");
};

const useStatistic = (statisticId: number) => {
  return useQuery(
    ["statistic ", statisticId],
    () => fetchStatistic(statisticId),
    {
      staleTime: 50000,
      onSuccess: onSuccess,
      onError: onError,
    }
  );
};

export { useStatistic };
