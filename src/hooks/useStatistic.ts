import { useQuery } from "react-query";
import { fetchStatistic } from "../services";

const useStatistic = (
  statisticId: number,
  onSuccess?: () => void,
  onError?: () => void
) => {
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
