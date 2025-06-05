import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [dataMovies, setDataMovies] = useState([]);
  const [dataTv, setDataTv] = useState([]);
  const [topRatesMovies, setTopRatesMovies] = useState([]);
  const [topRatesTv, setTopRatesTv] = useState([]);
  const [search, setSearch] = useState("");

  const fetchTopRatesMovies = () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`;
    axios.get(url).then((res) => {
      setTopRatesMovies(res.data.results);
    });
  };
  const fetchTopRatesTv = () => {
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${import.meta.env.VITE_API_KEY}`;
    axios.get(url).then((res) => {
      setTopRatesTv(res.data.results);
    });
  };

  const fetchSearchData = (search) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${search}`;
    axios
      .get(url)
      .then((res) => {
        setDataMovies(res.data.results);
      })
      .then(() => {
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${import.meta.env.VITE_API_KEY}&query=${search}`).then((res) => {
          setDataTv(res.data.results);
        });
      });
  };
  return <DataContext.Provider value={{ dataMovies, dataTv, topRatesMovies, topRatesTv, fetchSearchData, fetchTopRatesMovies, fetchTopRatesTv, search, setSearch }}>{children}</DataContext.Provider>;
};

const useData = () => {
  return useContext(DataContext);
};

export { DataProvider, useData };
