import { ReactElement } from "react"
import clsx from "clsx"
import { useRouter } from "next/navigation";

import { MovieCardProps } from "@/lib/models"
import { Progress } from "antd"

const MovieCard: React.FC<MovieCardProps> = ({ movie, className }: MovieCardProps): ReactElement => {
  const router = useRouter()

  return (
    <div
      className={
        clsx(
          'movie-card flex flex-grow flex-col rounded-2xl shadow-md box-border hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer',
          className
        )
      }
      onClick={() => router.push(`/movie/${movie.id}`)}
    >
      <div className="relative">
        <img
          className="h-350 block rounded-tl-2xl rounded-tr-2xl"
          src={`${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}/w200/${movie.backdrop_path}`}
          alt={movie.original_title}
        />
        <Progress
          className="absolute -bottom-5 left-2"
          type="circle"
          percent={movie.vote_average / 10 * 100}
          format={() => movie.vote_average.toFixed(1)}
          strokeColor={'green'}
          size='small'
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold pt-4">{movie.original_title}</h3>
        <p className="text-gray-400 pt-1">{movie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard