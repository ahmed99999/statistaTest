import http from '../request';
import axios, { AxiosStatic } from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<AxiosStatic>;

const FAKE_API_URL = 'https://dummyjson.com/products/1';
const FAKE_WRONG_API_URL = 'https://dummy11json.com/products/1';

describe('fetchData', () => {
    it('fetches successfully data from an API', async () => {
        const fateStatisticData = {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "...",
            images: ["...", "...", "..."]
        };
        const response = { data: fateStatisticData };

        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(response));

        await expect(http.get(FAKE_API_URL)).resolves.toEqual(response);
    });

    it('fetches erroneously data from an API', async () => {
        const errorMessage = 'SOMETHING UNEXPECTED HAPPENED';

        mockedAxios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );

        await expect(http.get(FAKE_WRONG_API_URL)).rejects.toThrow(errorMessage);
    });
});