import { API_METHODS, ApiRequest, CreditsResponse, MOVIES_TYPES, Movie, MoviesResponse } from "./models";

const fetcher = async ({ url, method, body }: ApiRequest) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${url}?&api_key=${process.env.NEXT_PUBLIC_API_KEY}`, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  const data = await res.json();
  return data;
};

export const getMoviesList = async (page: number = 2, segment: MOVIES_TYPES): Promise<MoviesResponse> => {
  return fetcher({
    url: `movie/${segment}?page=${page}`,
    method: API_METHODS.GET,
    body: null
  });
};

export const getMovieDetails = async (movie_id: number): Promise<Movie> => {
  return fetcher({
    url: `movie/${movie_id}`,
    method: API_METHODS.GET,
    body: null
  });
};

export const getMovieCredits = async (movie_id: number): Promise<CreditsResponse> => {
  return fetcher({
    url: `movie/${movie_id}/credits`,
    method: API_METHODS.GET,
    body: null
  });
};