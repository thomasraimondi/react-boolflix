import { Link } from "react-router-dom";
import { useData } from "../contexts/DataContext";

export default function Headers() {
  const { search, setSearch } = useData();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header>
      <div className="flex justify-between items-center  bg-gray-100 p-2 rounded-md w-full">
        <div className="flex items-center gap-2">
          <img src="/vite.svg" alt="logo" />
          <Link to="/" className="text-2xl font-bold">
            Boolflix
          </Link>
        </div>
      </div>
      <div className="jumbotron w-full">
        <img className="w-full h-50 object-cover" src="../src/assets/img/jumbotron.png" alt="jumbotron" />
      </div>
      <div className="flex items-center gap-2 p-2">
        <input className="bg-white rounded-md p-2 border-2 border-gray-300" type="text" placeholder="Cerca un film" value={search} onChange={handleSearch} />
        {/* <button className="bg-blue-500 text-white rounded-md p-2" onClick={handleSubmit}>
          Cerca
        </button> */}
      </div>
    </header>
  );
}
