import { useData } from "../../contexts/DataContext";
import { useSearch } from "../../contexts/SearchContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListCard from "../ListCard";

export default function Main() {
  const navigate = useNavigate();
  const { topRatesMovies, topRatesTv, homeData } = useData();
  const { query, setQuery } = useSearch();
  const [pageMovies, setPageMovies] = useState(1);
  const [pageTv, setPageTv] = useState(1);

  useEffect(() => {
    setQuery("");
  }, []);

  useEffect(() => {
    homeData(pageMovies, pageTv);
  }, [pageMovies, pageTv]);

  return (
    <>
      <div className="flex flex-col gap-4 bg-gray-900 grow">
        <div className="container mx-auto w-full py-5">
          <span className="text-2xl font-bold p-2 text-white">Top Rated Film</span>
          <ListCard searchedData={topRatesMovies} page={pageMovies} setPage={setPageMovies} />
          <span className="text-2xl font-bold p-2 text-white">Top Rated Serie Tv</span>
          <ListCard searchedData={topRatesTv} page={pageTv} setPage={setPageTv} />
        </div>
      </div>
    </>
  );
}
