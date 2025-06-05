import Main from "./components/Main";
import { DataProvider } from "./contexts/DataContext";
import DefaultLayout from "./layout/DefaultLayout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Search from "./pages/Search";
import Tv from "./pages/tv";
import Movie from "./pages/Movie";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Main />} />
            <Route path="/search" element={<Search />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/movie" element={<Movie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
