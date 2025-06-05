import { useData } from "../contexts/DataContext";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

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

  return (
    <>
      {!search ? (
        <>
          <span className="text-2xl font-bold p-2">Film</span>
          <div className="flex flex-wrap gap-4 p-2 justify-center items-center">
            {topRatesMovies.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 border-2 border-gray-300 rounded-md p-2 w-1/10 hover:scale-105 transition-all duration-300">
                <span className="text-md font-bold grow">{item.title}</span>
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                <ul className="flex flex-col gap-2">
                  <li>{item.original_title}</li>
                  <li>{item.original_language}</li>
                  <li>
                    {Array.from({ length: Math.round(item.vote_average / 2) }, (_, i) => (
                      <span key={i} className="text-yellow-500">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                    ))}
                    {Array.from({ length: 5 - Math.round(item.vote_average / 2) }, (_, i) => (
                      <span key={i} className="text-gray-500">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                    ))}
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <span className="text-2xl font-bold p-2">Serie Tv</span>
          <div className="flex flex-wrap gap-4 p-2 justify-center items-center">
            {topRatesTv.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 border-2 border-gray-300 rounded-md p-2 w-1/10">
                <span className="text-md font-bold grow">{item.name}</span>
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                <ul className="flex flex-col gap-2">
                  <li>{item.original_name}</li>
                  <li>{item.original_language}</li>
                  <li>
                    {Array.from({ length: Math.round(item.vote_average / 2) }, (_, i) => (
                      <span key={i} className="text-yellow-500">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                    ))}
                    {Array.from({ length: 5 - Math.round(item.vote_average / 2) }, (_, i) => (
                      <span key={i} className="text-gray-500">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                    ))}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <span className="text-2xl font-bold p-2">Film e Serie Tv</span>
          <div className="flex flex-wrap gap-4 p-2 justify-center items-center">
            {movieTvSearch.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 border-2 border-gray-300 rounded-md p-2 w-1/10">
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || item.name} />
                <span className="text-md font-bold grow">{item.name || item.title}</span>
                <ul className="flex flex-col gap-2">
                  <li>{item.original_name}</li>
                  <li>{item.original_language}</li>
                  <li>
                    {Array.from({ length: Math.round(item.vote_average / 2) }, (_, i) => (
                      <span key={i} className="text-yellow-500">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                    ))}
                    {Array.from({ length: 5 - Math.round(item.vote_average / 2) }, (_, i) => (
                      <span key={i} className="text-gray-500">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                    ))}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
