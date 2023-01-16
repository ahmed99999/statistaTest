import { useQuery } from "react-query";
import { fetchStatistics } from "../services";

const useStatistics = (onSuccess: () => void, onError: () => void) => {
  return useQuery("statistics", fetchStatistics, {
    staleTime: 50000,
    onSuccess: onSuccess,
    onError: onError,
    select: (data) => data.items,
  });
};

export { useStatistics };
