'use client'
import Loading from "@/components/Loading";
import Staff from "@/components/Staff";
import { getMovieCredits, getMovieDetails } from "@/lib/api";
import { Actor, CreditsResponse, Genres, Movie } from "@/lib/models";
import { Progress } from "antd";
import moment from "moment";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: Params }) {
  const [movieData, setMovieData] = useState<Movie>()
  const [movieCredits, setMovieCredits] = useState<CreditsResponse>()
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getData()
    getCredits()
  }, [])

  const getData = async (): Promise<void> => {
    setIsLoading(true)
    const response = await getMovieDetails(params.id)
    setMovieData(response)
    setIsLoading(false)
  }

  const getCredits = async (): Promise<void> => {
    setIsLoading(true)
    const response = await getMovieCredits(params.id)
    setMovieCredits(response)
    setIsLoading(false)
  }

  return (
    <div className="movie-container flex flex-col w-1/1">
      {
        isLoading ?
          <Loading />
          :
          <>
            <div
              className="movie-data flex items-center relative w-full bg-top bg-cover bg-no-repeat overflow-hidden"
              style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}/w500/${movieData?.poster_path})` }}
            >
              <div className="overlay absolute top-0 w-full h-full bg-gray-900 bg-opacity-50"></div>
              <div className="flex sm:flex-wrap md:flex-nowrap flex-grow p-8 z-10">
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}/w300/${movieData?.poster_path}`}
                  alt={movieData?.original_title}
                  className="h-500 rounded-lg mr-10"
                />
                <div className="flex flex-wrap flex-col md:ml-10 sm:w-full sm:mt-7">
                  <div className="flex items-center">
                    <h2 className="text-white text-4xl">{movieData?.original_title}</h2>
                    <h2 className="text-gray-300 text-4xl ml-4">({moment(movieData?.release_date).format('yyyy')})</h2>
                  </div>
                  <div className="flex items-center pt-3">
                    <p className="text-white">{movieData?.release_date}</p>
                    <ul className="flex items-center list-disc list-outside">
                      <li className="text-white mx-7">
                        {
                          movieData?.genres.map((ele: Genres, index: number) => {
                            return <span key={ele.id}>{ele.name} {index !== movieData?.genres.length - 1 ? ', ' : ''}</span>
                          })
                        }
                      </li>
                      <li
                        className="text-white"
                      >
                        {Math.floor(movieData?.runtime as number / 60)}h {movieData?.runtime as number % 60}m
                      </li>
                    </ul>
                  </div>
                  <Progress
                    className="mt-5"
                    type="circle"
                    percent={movieData?.vote_average as number / 10 * 100}
                    format={() => movieData?.vote_average.toFixed(1)}
                    strokeColor={'green'}
                    size='small'
                  />
                  <div className="flex flex-col mt-7">
                    <h3 className="text-white text-2xl mb-3">Overview</h3>
                    <p className="text-white break-words">{movieData?.overview}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-around mt-10 p-6">
              <Staff staff={movieCredits?.cast as Actor[]} title='Cast' />
              <Staff staff={movieCredits?.crew as Actor[]} title='Crew' />
            </div>
          </>
      }

    </div>
  );
}