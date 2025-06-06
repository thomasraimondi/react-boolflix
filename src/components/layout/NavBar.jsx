import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex items-center gap-5 text-white">
      <Link to="/">Home</Link>
      <Link to="/tv">Serie Tv</Link>
      <Link to="/movie">Film</Link>
      <Link to="/">Giochi</Link>
      <Link to="/">Nuovi e Popolari</Link>
      <Link to="/">La mia lista</Link>
      <Link to="/">Sfoglia per lingua</Link>
      <Link to="/">Sfoglia per genere</Link>
    </div>
  );
}
