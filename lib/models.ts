export interface ApiRequest {
  url: string,
  method: API_METHODS,
  body: any
}

export interface Genres {
  id: number,
  name: string
}

export interface MoviesResponse {
  page: number,
  results: Movie[],
  total_pages: number,
  total_results: number
}

export interface CreditsResponse {
  crew: Actor[],
  cast: Actor[]
}

export interface Actor {
  id: number,
  character: string,
  original_name: string,
  profile_path: string
}

export interface Movie {
  id: number,
  backdrop_path: string,
  release_date: string,
  original_title: string,
  vote_average: number,
  poster_path: string,
  genres: Genres[],
  overview: string,
  runtime: number
}

export interface MovieCardProps {
  movie: Movie,
  className: string
}

export enum API_METHODS {
  POST = 'POST',
  GET = 'GET'
}

export enum MOVIES_TYPES {
  Upcoming = 'upcoming',
  'Top rated' = 'top_rated',
  Popular = 'popular'
}