import { createContext, useContext, useState } from "react";
import axios from "axios";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [searchedDataMovies, setSearchedDataMovies] = useState([]);
  const [searchedDataTv, setSearchedDataTv] = useState([]);
  const [countSearch, setCountSearch] = useState(0);

  const fetchSearchedData = (search, page, type) => {
    const url = `https://api.themoviedb.org/3/search/${type}?api_key=${import.meta.env.VITE_API_KEY}&query=${search}&page=${page}`;
    axios.get(url).then((res) => {
      if (type === "movie") {
        setSearchedDataMovies(res.data.results);
      } else {
        setSearchedDataTv(res.data.results);
      }
    });
  };

  const searchGenersData = (geners, pageMovies, pageTv) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${geners}&page=${pageMovies}`;
    axios.get(url).then((res) => {
      setSearchedDataMovies(res.data.results);
    });
    const urlTv = `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${geners}&page=${pageTv}`;
    axios.get(urlTv).then((res) => {
      setSearchedDataTv(res.data.results);
    });
  };

  const searchData = (search, pageMovies, pageTv) => {
    fetchSearchedData(search, pageMovies, "movie");
    fetchSearchedData(search, pageTv, "tv");
  };
  return <SearchContext.Provider value={{ query, setQuery, searchedDataMovies, searchedDataTv, countSearch, setCountSearch, searchData, searchGenersData }}>{children}</SearchContext.Provider>;
};

const useSearch = () => {
  return useContext(SearchContext);
};

export { SearchProvider, useSearch };
