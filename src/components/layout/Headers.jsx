import { Link } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import NavBar from "./NavBar";
import SearchBar from "../ui/SearchBar";
import { useEffect } from "react";
import { useSearch } from "../../contexts/SearchContext";

export default function Headers() {
  const { welcome } = useData();
  const { countSearch } = useSearch();
  useEffect(() => {
    console.log(countSearch);
  }, [countSearch]);
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
          <NavBar />
        </div>
        <div className="flex items-center gap-5 text-white pr-5">
          <SearchBar />
          <Link to="/">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </div>
      <div className="jumbotron w-full mt-20 relative h-50 bg-red-700">
        <h1 className="text-white text-4xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{welcome}</h1>
      </div>
    </header>
  );
}
