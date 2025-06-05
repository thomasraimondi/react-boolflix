import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function CardMoviesTv({ item }) {
  // Prendo titolo e data a seconda se è film o serie
  const title = item.title || item.name;
  const year = (item.release_date || item.first_air_date || "").slice(0, 4);
  const vote = item.vote_average ? (item.vote_average / 2).toFixed(1) : "N/A";
  const overview = item.overview || "Nessuna descrizione disponibile.";

  return (
    <div className="relative flex flex-col gap-2 w-48 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 text-white group bg-gray-800">
      {item.poster_path ? (
        <img className="w-full h-40 object-cover" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={title} />
      ) : (
        <img className="w-full h-40 object-cover" src="/logo.jpeg" alt={title} />
      )}
      {/* Overlay per overview in hover */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 transition-opacity duration-300 text-sm text-gray-200 z-10">
        <span>{overview.length > 180 ? overview.slice(0, 180) + "..." : overview}</span>
      </div> */}
      <div className="flex flex-col gap-1 p-3 z-20">
        <span className="font-bold text-lg truncate" title={title}>
          {title}
        </span>
        <span className="text-xs text-gray-400">{year}</span>
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
          <span className="text-sm font-semibold ml-1">{vote}</span>
        </div>
      </div>
    </div>
  );
}
