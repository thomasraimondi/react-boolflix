import { useData } from "../contexts/DataContext";
import { NavLink } from "react-router-dom";

export default function Main() {
  const { data } = useData();
  console.log(data);
  return (
    <main className="container mx-auto bg-gray-100 p-5 grow">
      <div className="flex">
        <NavLink to="/movie" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Movie
        </NavLink>
        <NavLink to="/tv" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          TV Series
        </NavLink>
      </div>
    </main>
  );
}
