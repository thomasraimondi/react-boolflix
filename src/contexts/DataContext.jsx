import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [topRatesMovies, setTopRatesMovies] = useState([]);
  const [topRatesTv, setTopRatesTv] = useState([]);
  const [geners, setGeners] = useState([]);
  const [genersSelected, setGenersSelected] = useState("");
  const [welcome, setWelcome] = useState("Benvenuto in Boolflix");
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [onTheAirTv, setOnTheAirTv] = useState([]);
  const [airingTodayTv, setAiringTodayTv] = useState([]);

  const fetchTopRatesMovies = (page) => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`;
    axios.get(url).then((res) => {
      setTopRatesMovies(res.data.results.map((movie) => ({ ...movie, type: "movie" })));
    });
  };

  const fetchNowPlayingMovies = (page) => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`;
    axios.get(url).then((res) => {
      setNowPlayingMovies(res.data.results.map((movie) => ({ ...movie, type: "movie" })));
    });
  };

  const fetchPopularMovies = (page) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`;
    axios.get(url).then((res) => {
      setPopularMovies(res.data.results.map((movie) => ({ ...movie, type: "movie" })));
    });
  };

  const fetchUpcomingMovies = (page) => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`;
    axios.get(url).then((res) => {
      setUpcomingMovies(res.data.results.map((movie) => ({ ...movie, type: "movie" })));
    });
  };

  const fetchTopRatesTv = (page) => {
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`;
    axios.get(url).then((res) => {
      setTopRatesTv(res.data.results.map((tv) => ({ ...tv, type: "tv" })));
    });
  };

  const fetchOnTheAirTv = (page) => {
    const url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`;
    axios.get(url).then((res) => {
      setOnTheAirTv(res.data.results.map((tv) => ({ ...tv, type: "tv" })));
    });
  };

  const fetchPopularTv = (page) => {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`;
    axios.get(url).then((res) => {
      setPopularTv(res.data.results.map((tv) => ({ ...tv, type: "tv" })));
    });
  };

  const fetchAiringTodayTv = (page) => {
    const url = `https://api.themoviedb.org/3/tv/airing_today?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`;
    axios.get(url).then((res) => {
      setAiringTodayTv(res.data.results.map((tv) => ({ ...tv, type: "tv" })));
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

  const getAllMovies = (pageTop, pageNow, pagePopular, pageUpcoming) => {
    fetchTopRatesMovies(pageTop);
    fetchNowPlayingMovies(pageNow);
    fetchPopularMovies(pagePopular);
    fetchUpcomingMovies(pageUpcoming);
  };

  const getAllTv = (pageTop, pageOnTheAir, pagePopular, pageAiringToday) => {
    fetchTopRatesTv(pageTop);
    fetchOnTheAirTv(pageOnTheAir);
    fetchPopularTv(pagePopular);
    fetchAiringTodayTv(pageAiringToday);
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
        nowPlayingMovies,
        popularMovies,
        upcomingMovies,
        popularTv,
        onTheAirTv,
        airingTodayTv,
        getAllMovies,
        getAllTv,
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
