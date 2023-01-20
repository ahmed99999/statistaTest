import request from "../lib/request";
import { StatisticModel } from "../models";
// import env from "ts-react-dotenv";

const selectStatistic = (items: StatisticModel[], statisticId: number) =>
  items.find((item) => item.identifier === statisticId);

const getStatisticResult = (response: any) => response.data.items;

const fetchStatistic = async (
  statisticId: number
): Promise<StatisticModel | undefined> => {
  try {
    const url = `https://cdn.statcdn.com/static/application/search_results.json`; // here would /statistics/:statisticId
    // const url = `${env.API_BASE_URL}`;
    const response = await request.get(url);
    const statisticResult = getStatisticResult(response);

    return selectStatistic(statisticResult, statisticId);
  } catch (e) {
    console.error(e);
    return;
  }
};

export { fetchStatistic };
