import { useData } from "../contexts/DataContext";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListCard from "./ListCard";

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
          <ListCard searchedData={topRatesMovies} page={pageMovies} setPage={setPageMovies} />
          <span className="text-2xl font-bold p-2 text-white">Top Rated Serie Tv</span>
          <ListCard searchedData={topRatesTv} page={pageTv} setPage={setPageTv} />
        </div>
      </div>
    </>
  );
}
