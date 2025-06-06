import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [topRatesMovies, setTopRatesMovies] = useState([]);
  const [topRatesTv, setTopRatesTv] = useState([]);
  const [searchedDataMovies, setSearchedDataMovies] = useState([]);
  const [searchedDataTv, setSearchedDataTv] = useState([]);
  const [geners, setGeners] = useState([]);
  const [genersSelected, setGenersSelected] = useState("");
  const [countSearch, setCountSearch] = useState(0);
  const [welcome, setWelcome] = useState("Benvenuto");

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

  const fetchGeners = async () => {
    const urlGenersMovies = `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`;
    const urlGenersTv = `https://api.themoviedb.org/3/genre/tv/list?api_key=${import.meta.env.VITE_API_KEY}`;
    try {
      const [resMovies, resTv] = await Promise.all([axios.get(urlGenersMovies), axios.get(urlGenersTv)]);
      const allGeners = [...resMovies.data.genres, ...resTv.data.genres];
      const uniqueGeners = Array.from(new Map(allGeners.map((g) => [g.id, g])).values());
      setGeners(uniqueGeners);
    } catch (error) {
      console.error("Errore nel fetch dei generi:", error);
    }
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

  const homeData = (pageMovies, pageTv) => {
    fetchTopRatesMovies(pageMovies);
    fetchTopRatesTv(pageTv);
  };

  const genersData = () => {
    fetchGeners();
  };

  return (
    <DataContext.Provider
      value={{
        topRatesMovies,
        topRatesTv,
        searchedDataMovies,
        searchedDataTv,
        searchData,
        query,
        setQuery,
        homeData,
        geners,
        genersData,
        genersSelected,
        setGenersSelected,
        searchGenersData,
        countSearch,
        setCountSearch,
        welcome,
        setWelcome,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { DataProvider, useData };
