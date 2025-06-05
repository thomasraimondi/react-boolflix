import { useData } from "../contexts/DataContext";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import CardMoviesTv from "./CardMoviesTv";

export default function Main() {
  const { fetchSearchData, dataMovies, dataTv, topRatesMovies, fetchTopRatesMovies, fetchTopRatesTv, topRatesTv, search } = useData();

  useEffect(() => {
    if (search.length > 2) {
      fetchSearchData(search);
    }
  }, [search]);

  useEffect(() => {
    fetchTopRatesMovies();
    fetchTopRatesTv();
  }, []);

  const movieTvSearch = [...dataMovies, ...dataTv];
  console.log(movieTvSearch);

  return (
    <>
      <div className="flex flex-col gap-4 bg-gray-900">
        <div className="container mx-auto w-full py-5">
          {!search ? (
            <>
              <span className="text-2xl font-bold p-2 text-white">Film</span>
              <div className="flex flex-wrap gap-4 p-2 justify-center py-5">
                {topRatesMovies.map((item) => (
                  <CardMoviesTv key={item.id} item={item} />
                ))}
              </div>
              <span className="text-2xl font-bold p-2 text-white">Serie Tv</span>
              <div className="flex flex-wrap gap-4 p-2 justify-center">
                {topRatesTv.map((item) => (
                  <CardMoviesTv key={item.id} item={item} />
                ))}
              </div>
            </>
          ) : (
            <>
              <span className="text-2xl font-bold p-2 text-white">Film e Serie Tv</span>
              <div className="flex flex-wrap gap-4 p-2 justify-center">
                {movieTvSearch.map((item) => (
                  <CardMoviesTv key={item.id} item={item} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
