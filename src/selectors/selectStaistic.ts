import { StatisticsResponse } from "../models";

export const selectStatistic = (statisticId: number) => {
  return (data: StatisticsResponse) => {
    return data.items.find((statistic) => statistic.identifier === statisticId);
  };
};
