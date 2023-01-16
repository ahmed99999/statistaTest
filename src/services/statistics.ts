import request from "../lib/request";
import { StatisticsResponse } from "../models";
import env from "ts-react-dotenv";

const fetchStatistics = async (): Promise<StatisticsResponse> => {
  try {
    const response = await request.get(env.API_BASE_URL); // here would be /statistics

    return response.data;
  } catch (e) {
    console.error(e);
    return { items: [] };
  }
};

export { fetchStatistics };
