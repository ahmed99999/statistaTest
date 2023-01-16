import { useQuery } from "react-query";
import { fetchStatistics } from "../services";
import { selectStatistic } from "../selectors/selectStaistic";

interface Params {
  onSuccess?: () => void;
  onError?: () => void;
  statisticId: number;
}

const useStatistic = ({ onSuccess, onError, statisticId }: Params) => {
  return useQuery(["statistic ", statisticId], fetchStatistics, {
    staleTime: 50000,
    onSuccess: onSuccess,
    onError: onError,
    select: selectStatistic(statisticId),
  });
};

export { useStatistic };
