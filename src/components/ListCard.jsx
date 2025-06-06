import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CardMoviesTv from "./CardMoviesTv";

export default function ListCard({ searchedData, page, setPage }) {
  return (
    <div className="flex gap-4 p-2 justify-center">
      <div className="flex gap-2 py-5">
        {page > 1 && (
          <button className="text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-5xl" onClick={() => setPage(page - 1)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-4 p-2 justify-center">
        {searchedData.map((item) => (
          <CardMoviesTv key={item.id} item={item} />
        ))}
      </div>
      <div className="flex gap-2 py-5">
        {searchedData.length === 20 && (
          <button className="text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-5xl" onClick={() => setPage(page + 1)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>
    </div>
  );
}
