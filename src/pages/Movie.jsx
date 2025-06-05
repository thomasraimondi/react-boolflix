import { useData } from "../contexts/DataContext";
import { useState, useEffect } from "react";

export default function Movie() {
  const { fetchSearchData, data, fetchTopRatesData } = useData();

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    fetchMovies(search);
  };

  const fetchMovies = (search) => {
    fetchSearchData("movie", search);
  };
  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  useEffect(() => {
    fetchTopRatesData("movie");
  }, []);

  return (
    <>
      <span className="text-2xl font-bold p-2">Cerca un film</span>
      <div className="flex items-center gap-2 p-2">
        <input className="bg-white rounded-md p-2 border-2 border-gray-300" type="text" placeholder="Cerca un film" value={search} onChange={handleSearch} />
        <button className="bg-blue-500 text-white rounded-md p-2" onClick={handleSubmit}>
          Cerca
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {data.map((item) => (
          <div key={item.id}>
            <h2 className="text-2xl font-bold">{item.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
