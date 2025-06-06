import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function MovieDetails() {
  const { id, type } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);

  const getDetails = () => {
    axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_API_KEY}`).then((res) => {
      setDetails(res.data);
    });
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="flex flex-col gap-2 p-4 text-white bg-gray-800 grow">
      <div className="flex items-center">
        <button
          className="text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-5xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h1 className="text-2xl font-bold">{details.title || details.name}</h1>
      </div>
      <div className="flex gap-4 p-4 text-white">
        <div className="flex justify-center items-center min-w-50">
          <img className="w-full object-cover rounded-lg" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title} />
        </div>
        <div className="flex flex-col gap-2">
          <span>Overview:</span>
          <p>{details.overview}</p>
          <div className="flex gap-2">
            <span>Lingua: </span>
            <p>{details.original_language}</p>
          </div>
          <div className="flex gap-2">
            <span>Titolo originale: </span>
            <p>{details.original_title || details.original_name}</p>
          </div>
          {details.genres && (
            <div className="flex gap-2">
              <span>Genere: </span>
              <p>{details.genres.map((genre) => genre.name).join(", ")}</p>
            </div>
          )}
          <div className="flex gap-2">
            <span>Data di uscita: </span>
            <p>{details.release_date || details.first_air_date}</p>
          </div>
          <div className="flex gap-2">
            <span>Durata: </span>
            <p>{details.runtime || details.episode_run_time}</p>
          </div>
          <div className="flex gap-2">
            <span>Voto: </span>
            <p>{details.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
