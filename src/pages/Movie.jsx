import { useRef, useEffect, useState } from "react";
import { useData } from "../contexts/DataContext";
import ListCard from "../components/ListCard";

export default function Movie() {
  const boxRef = useRef(null);
  const { topRatesMovies, homeData } = useData();
  const [pageMovies, setPageMovies] = useState(1);
  const [pageTv, setPageTv] = useState(1);

  useEffect(() => {
    homeData(pageMovies, pageTv);
  }, [pageMovies, pageTv]);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    console.log(box);

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = box;
      console.log(scrollTop);
      console.log(scrollHeight);
      console.log(clientHeight);
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 50; // 50px dal fondo
      if (isNearBottom) {
        console.log("🟢 Quasi alla fine!");
      }
    };

    box.addEventListener("scroll", handleScroll);
    return () => box.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={boxRef} className="overflow-x-auto bg-gray-900">
      <ListCard searchedData={topRatesMovies} page={pageMovies} setPage={setPageMovies} />
    </div>
    // <div ref={boxRef} style={{ height: 200, overflowY: "auto", border: "1px solid gray" }}>
    //   {Array.from({ length: 100 }, (_, i) => (
    //     <div key={i}>Riga {i + 1}</div>
    //   ))}
    // </div>
  );
}
