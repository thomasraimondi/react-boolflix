import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function CardMoviesTv({ item }) {
  // Prendo titolo e data a seconda se è film o serie
  const title = item.title || item.name;
  const year = (item.release_date || item.first_air_date || "").slice(0, 4);
  const vote = item.vote_average ? (item.vote_average / 2).toFixed(1) : "N/A";
  const overview = item.overview || "Nessuna descrizione disponibile.";

  return (
    <Link
      to={`/data/${item.title ? "movie" : "tv"}/${item.id}`}
      className="relative flex flex-col gap-2 min-w-30 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 text-white group bg-gray-800"
    >
      {item.poster_path ? (
        <img className="w-30 h-50 object-cover" src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={title} />
      ) : (
        <img className="w-30 h-50 object-cover" src="/logo.jpeg" alt={title} />
      )}
      {/* Overlay per overview in hover */}
      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col w-30 p-4 transition-opacity duration-300 text-sm text-gray-200 z-10">
        <h2 className="text-white text-sm font-bold break-words whitespace-normal">{title}</h2>
        {/* <span className="text-white">Overview:</span>
        <span className="text-white whitespace-normal grow">{overview.length > 50 ? overview.slice(0, 50) + "..." : overview}</span> */}
        <div className="flex items-center gap-2 mt-1">
          <span className="flex">
            {Array.from({ length: Math.round(item.vote_average / 2) }, (_, i) => (
              <span key={i} className="text-yellow-500">
                <FontAwesomeIcon icon={faStar} />
              </span>
            ))}
            {Array.from({ length: 5 - Math.round(item.vote_average / 2) }, (_, i) => (
              <span key={i} className="text-gray-500">
                <FontAwesomeIcon icon={faStar} />
              </span>
            ))}
          </span>
        </div>
        <span className="text-sm font-semibold ml-1">{vote}</span>
      </div>
    </Link>
  );
}
