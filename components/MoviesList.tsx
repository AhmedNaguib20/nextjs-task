import { ReactElement } from "react";

import { Movie } from "@/lib/models";
import MovieCard from "./MovieCard";

const MoviesList: React.FC<{movies: Movie[]}> = ({movies}: {movies: Movie[]}): ReactElement => {
  return (
    <div className="flex flex-wrap mb-10 mt-10">
      {
        movies?.map(movie => (
          <MovieCard className='sm:w-1/2 md:w-1/3 lg:w-1/6 m-5' movie={movie} key={movie.id} />
        ))
      }
    </div>
  )
}

export default MoviesList