import { useData } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CardMoviesTv from "../components/CardMoviesTv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const navigate = useNavigate();
  const { search, fetchSearchedMovie, fetchSearchedTv, searchedMovies, searchedTv } = useData();
  const [pageMoviesSearch, setPageMoviesSearch] = useState(1);
  const [pageTvSearch, setPageTvSearch] = useState(1);

  useEffect(() => {
    if (search.length > 2) {
      fetchSearchedMovie(search, pageMoviesSearch);
      fetchSearchedTv(search, pageTvSearch);
    }
    if (search.length < 1) {
      navigate("/");
    }
  }, [pageMoviesSearch, pageTvSearch, search]);

  return (
    <>
      <div className="flex flex-col gap-4 bg-gray-900 grow">
        <div className="container mx-auto w-full py-5">
          {/* <span className="text-2xl font-bold p-2 text-white">Film e Serie Tv Trovati</span> */}
          {/* <div className="flex flex-wrap gap-4 p-2 justify-center">
            {searchedMovies.length > 0 && <span className="text-white">Film Trovati: {searchedMovies.length}</span>}
            {searchedTv.length > 0 && <span className="text-white">Serie Tv Trovate: {searchedTv.length}</span>}
          </div> */}
          <span className="text-2xl font-bold p-2 text-white"> Film Trovati</span>
          <div className="flex gap-4 p-2 justify-center">
            <div className="flex gap-2 py-5">
              {pageMoviesSearch > 1 && (
                <button className="text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-5xl" onClick={() => setPageMoviesSearch(pageMoviesSearch - 1)}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-4 p-2 justify-center">
              {searchedMovies.map((item) => (
                <CardMoviesTv key={item.id} item={item} />
              ))}
            </div>
            <div className="flex gap-2 py-5">
              {searchedMovies.length === 20 && (
                <button className="text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-5xl" onClick={() => setPageMoviesSearch(pageMoviesSearch + 1)}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              )}
            </div>
          </div>
          <span className="text-2xl font-bold p-2 text-white"> Serie Tv Trovate</span>
          <div className="flex gap-4 p-2 justify-center">
            <div className="flex gap-2 py-5">
              {pageTvSearch > 1 && (
                <button className="text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-5xl" onClick={() => setPageTvSearch(pageTvSearch - 1)}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-4 p-2 justify-center">
              {searchedTv.map((item) => (
                <CardMoviesTv key={item.id} item={item} />
              ))}
            </div>
            <div className="flex gap-2 py-5">
              {searchedTv.length === 20 && (
                <button className="text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-5xl" onClick={() => setPageTvSearch(pageTvSearch + 1)}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
