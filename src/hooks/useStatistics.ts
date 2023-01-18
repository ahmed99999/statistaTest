import { useQuery } from "react-query";
import { fetchStatistics } from "../services";

const useStatistics = (
  searchValue: string = "",
  onSuccess: () => void,
  onError: () => void
) => {
  return useQuery("statistics", () => fetchStatistics(searchValue), {
    staleTime: 50000,
    onSuccess: onSuccess,
    onError: onError,
    select: (data) => data.items,
  });
};

export { useStatistics };
