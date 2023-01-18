import request from "../lib/request";
import { StatisticsResponse } from "../models";
import env from "ts-react-dotenv";

const fetchStatistics = async (
  searchValue: string = ""
): Promise<StatisticsResponse> => {
  try {
    const url = `${env.API_BASE_URL}?q=${searchValue}`;
    const response = await request.get(url); // here would be /statistics

    return response.data;
  } catch (e) {
    console.error(e);
    return { items: [] };
  }
};

export { fetchStatistics };
