import { request } from "./request";

export const GetCategories = async (): Promise<string[]> => {
  try {
    const response = await request.get("/categories");
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const GetJokeByCategory = async (category: string): Promise<Joke> => {
  try {
    const response = await request.get(`/random?category=${category}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const GetJokeBySearch = async (
  search: string
): Promise<SearchJokeModel> => {
  try {
    const response = await request.get(`/search?query=${search}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const GetRandomJoke = async (): Promise<Joke> => {
  try {
    const response = await request.get("/random");
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
