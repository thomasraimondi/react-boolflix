import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function CardMoviesTv({ item }) {
  return (
    <div key={item.id} className="flex flex-col gap-2 w-1/10 hover:scale-105 transition-all duration-300 text-white">
      {item.poster_path ? (
        <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
      ) : (
        <img className="w-full h-full object-cover" src="/logo.jpeg" alt={item.title} />
      )}
      <ul className="flex flex-col gap-2">
        <li>
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
        </li>
      </ul>
    </div>
  );
}
