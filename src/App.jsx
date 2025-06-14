import Main from "./components/layout/Main";
import { DataProvider } from "./contexts/DataContext";
import { SearchProvider } from "./contexts/SearchContext";
import DefaultLayout from "./layout/DefaultLayout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Search from "./pages/Search";
import Tv from "./pages/tv";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <DataProvider>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Main />} />
              <Route path="/search" element={<Search />} />
              <Route path="/tv" element={<Tv />} />
              <Route path="/movie" element={<Movie />} />
              <Route path="/:type/:id" element={<MovieDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </DataProvider>
  );
}

export default App;
