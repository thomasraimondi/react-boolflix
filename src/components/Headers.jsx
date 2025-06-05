import { Link } from "react-router-dom";

export default function Headers() {
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
    </header>
  );
}
