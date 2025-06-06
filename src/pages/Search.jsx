import { useData } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CardMoviesTv from "../components/CardMoviesTv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ListCard from "../components/ListCard";

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
          <span className="text-2xl font-bold p-2 text-white"> Film Trovati</span>
          <ListCard searchedData={searchedMovies} page={pageMoviesSearch} setPage={setPageMoviesSearch} />
          <span className="text-2xl font-bold p-2 text-white"> Serie Tv Trovate</span>
          <ListCard searchedData={searchedTv} page={pageTvSearch} setPage={setPageTvSearch} />
        </div>
      </div>
    </>
  );
}
