import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CardMoviesTv from "./CardMoviesTv";

export default function ListCard({ searchedData, page, setPage }) {
  return (
    <div className="flex gap-4 p-2 justify-center">
      <div className="flex gap-2 py-5">
        <button
          className="text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-5xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <div className="flex gap-4 p-2 overflow-x-auto whitespace-nowrap scrollbar-hide items-center">
        {searchedData.length > 0 ? (
          searchedData.map((item) => <CardMoviesTv key={item.id} item={item} />)
        ) : (
          <div className="flex justify-center items-center h-full">
            <span className="text-white text-2xl font-bold">Nessun risultato trovato</span>
          </div>
        )}
      </div>
      <div className="flex gap-2 py-5">
        <button
          className="text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-5xl disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setPage(page + 1)}
          disabled={searchedData.length < 20}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
