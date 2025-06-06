import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CardMoviesTv from "./CardMoviesTv";
import { useRef, useState } from "react";

export default function ListCard({ searchedData, page, setPage }) {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const [direction, setDirection] = useState("right");

  const updateDirection = (e) => {
    if (!scrollRef.current) return;

    const rect = scrollRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const centerX = rect.left + rect.width / 2;
    setDirection(mouseX < centerX ? "left" : "right");
  };

  const startAutoScroll = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += direction === "right" ? 2 : -2;
      }
    }, 16);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div className="flex gap-4 p-2 justify-center">
      <div className="flex gap-2 py-5">
        <button
          className="text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-5xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          onClick={() => {
            setPage(page - 1);
            scrollRef.current.scrollLeft = 0;
          }}
          disabled={page === 1}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <div
        className="flex gap-4 p-2 overflow-x-auto whitespace-nowrap scrollbar-hide items-center"
        ref={scrollRef}
        onMouseEnter={startAutoScroll}
        onMouseLeave={stopAutoScroll}
        onMouseMove={updateDirection}
      >
        {searchedData.map((item) => (
          <CardMoviesTv key={item.id} item={item} />
        ))}
      </div>
      <div className="flex gap-2 py-5">
        <button
          className="text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-5xl disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {
            setPage(page + 1);
            scrollRef.current.scrollLeft = 0;
          }}
          disabled={searchedData.length < 20}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
