import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchTopRatesData = (type) => {
    const url = `https://api.themoviedb.org/3/${type}/top_rated?api_key=${import.meta.env.VITE_API_KEY}`;
    axios.get(url).then((res) => {
      setData(res.data.results);
      console.log(res.data.results);
    });
  };

  const fetchSearchData = (type, search) => {
    const url = `https://api.themoviedb.org/3/search/${type}?api_key=${import.meta.env.VITE_API_KEY}&query=${search}`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data.results);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return <DataContext.Provider value={{ data, fetchSearchData, fetchTopRatesData }}>{children}</DataContext.Provider>;
};

const useData = () => {
  return useContext(DataContext);
};

export { DataProvider, useData };
