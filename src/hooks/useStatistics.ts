import { useQuery } from "react-query";
import { fetchStatistics } from "../services";

const onSuccess = () => {
  console.log("fetching statistics");
};

const onError = () => {
  console.log("encountering errors while fetching statistics");
};

const useStatistics = (searchValue: string = "") => {
  return useQuery("statistics", () => fetchStatistics(searchValue), {
    staleTime: 50000,
    onSuccess: onSuccess,
    onError: onError,
    select: (data) => data.items,
  });
};

export { useStatistics };
