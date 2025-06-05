import Headers from "./components/Headers";
import Main from "./components/Main";
import { DataProvider } from "./contexts/DataContext";
import DefaultLayout from "./layout/DefaultLayout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Movie from "./pages/Movie";
import TvSeries from "./pages/TvSeries";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Main />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/tv" element={<TvSeries />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
