import { Link } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Headers() {
  const { search, setSearch } = useData();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className="">
      <div className="flex justify-between items-center  bg-gray-900 p-2 w-full fixed top-0 left-0 right-0 z-50 h-20">
        <div className="flex items-center gap-5 w-full">
          <div className="flex items-center gap-2">
            <img src="/logo.jpeg" alt="logo" className="w-10 h-10" />
            <Link to="/" className="text-2xl font-bold text-red-500">
              Boolflix
            </Link>
          </div>
          <div className="flex items-center gap-5 text-white">
            <Link to="/">Home</Link>
            <Link to="/tv">Serie Tv</Link>
            <Link to="/movie">Film</Link>
            <Link to="/">Giochi</Link>
            <Link to="/">Nuovi e Popolari</Link>
            <Link to="/">La mia lista</Link>
            <Link to="/">Sfoglia per lingua</Link>
          </div>
        </div>
        <div className="flex items-center gap-5 text-white pr-5">
          <div className="flex items-center gap-2 p-2">
            <input className=" p-2 border-2 border-gray-300" type="text" placeholder="Cerca un film" value={search} onChange={handleSearch} />
          </div>
          <Link to="/">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </div>
      <div className="jumbotron w-full mt-20">
        <img className="w-full h-50 object-cover" src="../src/assets/img/jumbotron.png" alt="jumbotron" />
      </div>
    </header>
  );
}
