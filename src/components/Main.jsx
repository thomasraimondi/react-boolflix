import { useData } from "../contexts/DataContext";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CardMoviesTv from "./CardMoviesTv";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  const { topRatesMovies, fetchTopRatesMovies, fetchTopRatesTv, topRatesTv, search, setSearch } = useData();
  const [pageMovies, setPageMovies] = useState(1);
  const [pageTv, setPageTv] = useState(1);

  useEffect(() => {
    setSearch("");
  }, []);

  useEffect(() => {
    if (search.length > 2) {
      navigate("/search");
    }
  }, [search]);

  useEffect(() => {
    fetchTopRatesMovies(pageMovies);
    fetchTopRatesTv(pageTv);
  }, [pageMovies, pageTv]);

  return (
    <>
      <div className="flex flex-col gap-4 bg-gray-900 grow">
        <div className="container mx-auto w-full py-5">
          <span className="text-2xl font-bold p-2 text-white">Top Rated Film</span>
          <div className="flex gap-2 py-5">
            {pageMovies > 1 && (
              <button className="text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-5xl" onClick={() => pageMovies > 1 && setPageMovies(pageMovies - 1)}>
                <FontAwesomeIcon className="cursor-pointer" icon={faChevronLeft} />
              </button>
            )}
            <div className="flex overflow-auto gap-4 justify-center">
              {topRatesMovies.map((item) => (
                <CardMoviesTv key={item.id} item={item} />
              ))}
            </div>
            {topRatesMovies.length === 20 && (
              <button className="text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-5xl" onClick={() => setPageMovies(pageMovies + 1)}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            )}
          </div>
          <span className="text-2xl font-bold p-2 text-white">Top Rated Serie Tv</span>
          <div className="flex gap-2 py-5">
            {pageTv > 1 && (
              <button className="text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-5xl" onClick={() => pageTv > 1 && setPageTv(pageTv - 1)}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            )}
            <div className="flex overflow-auto gap-4 p-2 justify-center">
              {topRatesTv.map((item) => (
                <CardMoviesTv key={item.id} item={item} />
              ))}
            </div>
            {topRatesTv.length === 20 && (
              <button className="text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-5xl" onClick={() => setPageTv(pageTv + 1)}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            )}
          </div>
          {/* <span className="text-2xl font-bold p-2 text-white">Film e Serie Tv Trovati</span>
              <div className="flex flex-wrap gap-4 p-2 justify-center">
              {movieTvSearch.map((item) => (
                <CardMoviesTv key={item.id} item={item} />
                ))}
                </div>
                <button className="text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-5xl" onClick={() => setPageSearch(pageSearch + 1)}>
                <FontAwesomeIcon icon={faChevronRight} />
                </button> */}
        </div>
      </div>
    </>
  );
}
