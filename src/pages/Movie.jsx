import { useRef, useEffect, useState } from "react";
import { useData } from "../contexts/DataContext";
import ListCard from "../components/ListCard";

export default function Movie() {
  const boxRef = useRef(null);
  const { topRatesMovies, nowPlayingMovies, popularMovies, upcomingMovies, getAllMovies } = useData();
  const [pageTop, setPageTop] = useState(1);
  const [pageNow, setPageNow] = useState(1);
  const [pagePopular, setPagePopular] = useState(1);
  const [pageUpcoming, setPageUpcoming] = useState(1);

  useEffect(() => {
    getAllMovies(pageTop, pageNow, pagePopular, pageUpcoming);
  }, [pageTop, pageNow, pagePopular, pageUpcoming]);

  return (
    <>
      <div className="flex flex-col gap-4 bg-gray-900 grow">
        <div className="container mx-auto w-full py-5 bg-gray-900">
          <span className="text-2xl font-bold p-2 text-white">Top Rated</span>
          <div>
            <ListCard searchedData={topRatesMovies} page={pageTop} setPage={setPageTop} />
          </div>
          <span className="text-2xl font-bold p-2 text-white">Now Playing</span>
          <div>
            <ListCard searchedData={nowPlayingMovies} page={pageNow} setPage={setPageNow} />
          </div>
          <span className="text-2xl font-bold p-2 text-white">Popular </span>
          <div>
            <ListCard searchedData={popularMovies} page={pagePopular} setPage={setPagePopular} />
          </div>
          <span className="text-2xl font-bold p-2 text-white">Upcoming </span>
          <div>
            <ListCard searchedData={upcomingMovies} page={pageUpcoming} setPage={setPageUpcoming} />
          </div>
        </div>
      </div>
    </>
  );
}
