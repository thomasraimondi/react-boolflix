import { useData } from "../../contexts/DataContext";

export default function SearchBar() {
  const { query, setQuery } = useData();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex items-center gap-2 p-2">
      <input className=" p-2 border-2 border-gray-300" type="text" placeholder="Cerca un film" value={query} onChange={handleSearch} />
    </div>
  );
}
