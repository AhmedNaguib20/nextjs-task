'use client'
import { useEffect, useState } from "react";
import { Pagination } from "antd";
import { SegmentedValue } from "antd/es/segmented";

import MoviesList from "@/components/MoviesList";
import { getMoviesList } from "@/lib/api";
import { MOVIES_TYPES, Movie, MoviesResponse } from "@/lib/models";
import Loading from "@/components/Loading";
import Segment from "@/components/Segment";



export default function Movies() {
  const [moviesData, setMoviesData] = useState<MoviesResponse>()
  const [page, setPage] = useState<number>(1)
  const [segment, setSegment] = useState<MOVIES_TYPES>(MOVIES_TYPES.Popular)
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getData()
  }, [])

  const getData = async (page: number = 1, segment: MOVIES_TYPES = MOVIES_TYPES.Popular): Promise<void> => {
    setIsLoading(true)
    const response = await getMoviesList(page, segment)
    setMoviesData(response)
    setIsLoading(false)
  }

  const onPageNumberChange = (page: number): void => {
    setPage(page)
    getData(page, segment)
  }

  const onSegmentChange = (segment: MOVIES_TYPES): void => {
    setSegment(MOVIES_TYPES[segment])
    getData(1, MOVIES_TYPES[segment])
  }

  return (
    <div className="flex flex-col p-6">
      <Segment onChange={(e: SegmentedValue) => onSegmentChange(e)} />
      {
        isLoading ?
          (
            <Loading />
          )
          :
          (
            <>
              <MoviesList movies={moviesData?.results as Movie[]} />
              <Pagination
                current={page}
                total={moviesData?.total_results}
                pageSize={20}
                showSizeChanger={false}
                onChange={onPageNumberChange}
                className="mb-10"
              />
            </>
          )
      }
    </div>
  )
}