import { Link } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const { geners, genersData, setGenersSelected } = useData();

  useEffect(() => {
    genersData();
  }, []);

  const handleGeners = (e) => {
    setGenersSelected(e.target.value);
    navigate("/search");
  };

  return (
    <div className="flex items-center gap-5 text-white">
      <Link to="/">Home</Link>
      <Link to="/tv">Serie Tv</Link>
      <Link to="/movie">Film</Link>
      <Link to="/">Giochi</Link>
      <Link to="/">Nuovi e Popolari</Link>
      <Link to="/">La mia lista</Link>
      <Link to="/">Sfoglia per lingua</Link>
      <select name="geners" id="geners" onChange={handleGeners}>
        <option value="">Sfoglia per genere</option>
        {geners.map((gener) => (
          <option key={gener.id} value={gener.id}>
            {gener.name}
          </option>
        ))}
      </select>
    </div>
  );
}
