import { useSearch } from "../contexts/SearchContext";
import { useData } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ListCard from "../components/ListCard";

export default function Search() {
  const { query, searchedDataMovies, searchedDataTv, searchData, searchGenersData, countSearch, setCountSearch } = useSearch();
  const { genersSelected, setWelcome } = useData();
  const navigate = useNavigate();
  const [pageMoviesSearch, setPageMoviesSearch] = useState(1);
  const [pageTvSearch, setPageTvSearch] = useState(1);

  useEffect(() => {
    setCountSearch(countSearch + 1);
    setWelcome("Boolflix");
  }, []);

  useEffect(() => {
    console.log(genersSelected);
  }, [genersSelected]);

  useEffect(() => {
    if (query.length > 2) {
      searchData(query, pageMoviesSearch, pageTvSearch);
    } else if (genersSelected.length > 0) {
      searchGenersData(genersSelected, pageMoviesSearch, pageTvSearch);
    } else {
      navigate(-1);
    }
  }, [pageMoviesSearch, pageTvSearch, query, genersSelected]);

  return (
    <>
      <div className="flex flex-col gap-4 bg-gray-900 grow">
        <div className="container mx-auto w-full py-5">
          {searchedDataMovies.length > 0 && (
            <>
              <span className="text-2xl font-bold p-2 text-white"> Film Trovati</span>
              <ListCard searchedData={searchedDataMovies} page={pageMoviesSearch} setPage={setPageMoviesSearch} />
            </>
          )}
          {searchedDataTv.length > 0 && (
            <>
              <span className="text-2xl font-bold p-2 text-white"> Serie Tv Trovate</span>
              <ListCard searchedData={searchedDataTv} page={pageTvSearch} setPage={setPageTvSearch} />
            </>
          )}
          {searchedDataMovies.length === 0 && searchedDataTv.length === 0 && (
            <div className="flex justify-center items-center h-full">
              <span className="text-2xl font-bold p-2 text-white"> Nessun risultato trovato</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
