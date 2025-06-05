import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [topRatesMovies, setTopRatesMovies] = useState([]);
  const [topRatesTv, setTopRatesTv] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchedTv, setSearchedTv] = useState([]);

  const fetchTopRatesMovies = (page) => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`;
    axios.get(url).then((res) => {
      setTopRatesMovies(res.data.results);
    });
  };
  const fetchTopRatesTv = (page) => {
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`;
    axios.get(url).then((res) => {
      setTopRatesTv(res.data.results);
    });
  };

  const fetchSearchedMovie = (search, page) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${search}&page=${page}`;
    axios.get(url).then((res) => {
      setSearchedMovies(res.data.results);
    });
  };

  const fetchSearchedTv = (search, page) => {
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${import.meta.env.VITE_API_KEY}&query=${search}&page=${page}`;
    axios.get(url).then((res) => {
      setSearchedTv(res.data.results);
    });
  };

  return (
    <DataContext.Provider value={{ topRatesMovies, topRatesTv, searchedMovies, searchedTv, fetchSearchedMovie, fetchSearchedTv, fetchTopRatesMovies, fetchTopRatesTv, search, setSearch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { DataProvider, useData };
