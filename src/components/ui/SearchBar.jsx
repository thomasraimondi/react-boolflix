import { useSearch } from "../../contexts/SearchContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SearchBar() {
  const { query, setQuery } = useSearch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.length > 2) {
      navigate("/search");
    }
  }, [query]);

  return (
    <div className="flex items-center gap-2 p-2">
      <input className=" p-2 border-2 border-gray-300" type="text" placeholder="Cerca un film" value={query} onChange={handleSearch} />
    </div>
  );
}
