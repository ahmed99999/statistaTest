import { useQuery } from "react-query";
import { fetchStatistic } from "../services";

const onSuccess = () => {
  console.log("fetching statistics");
};

const onError = () => {
  console.log("encountering errors while fetching statistics");
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
