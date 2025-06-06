import { useRef, useEffect, useState } from "react";
import { useData } from "../contexts/DataContext";
import ListCard from "../components/ListCard";

export default function tv() {
  const boxRef = useRef(null);
  const { topRatesTv, onTheAirTv, popularTv, airingTodayTv, getAllTv } = useData();
  const [pageTop, setPageTop] = useState(1);
  const [pageOnTheAir, setPageOnTheAir] = useState(1);
  const [pagePopular, setPagePopular] = useState(1);
  const [pageAiringToday, setPageAiringToday] = useState(1);

  useEffect(() => {
    getAllTv(pageTop, pageOnTheAir, pagePopular, pageAiringToday);
  }, [pageTop, pageOnTheAir, pagePopular, pageAiringToday]);

  return (
    <>
      <div className="flex flex-col gap-4 bg-gray-900 grow">
        <div className="container mx-auto w-full py-5 bg-gray-900">
          <span className="text-2xl font-bold p-2 text-white">Top Rated</span>
          <div>
            <ListCard searchedData={topRatesTv} page={pageTop} setPage={setPageTop} />
          </div>
          <span className="text-2xl font-bold p-2 text-white">On The Air</span>
          <div>
            <ListCard searchedData={onTheAirTv} page={pageOnTheAir} setPage={setPageOnTheAir} />
          </div>
          <span className="text-2xl font-bold p-2 text-white">Popular</span>
          <div>
            <ListCard searchedData={popularTv} page={pagePopular} setPage={setPagePopular} />
          </div>
          <span className="text-2xl font-bold p-2 text-white">Airing Today</span>
          <div>
            <ListCard searchedData={airingTodayTv} page={pageAiringToday} setPage={setPageAiringToday} />
          </div>
        </div>
      </div>
    </>
  );
}
