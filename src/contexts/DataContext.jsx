import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [topRatesMovies, setTopRatesMovies] = useState([]);
  const [topRatesTv, setTopRatesTv] = useState([]);
  const [geners, setGeners] = useState([]);
  const [genersSelected, setGenersSelected] = useState("");
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
        homeData,
        geners,
        genersData,
        genersSelected,
        setGenersSelected,
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
