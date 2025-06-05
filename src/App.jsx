import Main from "./components/Main";
import { DataProvider } from "./contexts/DataContext";
import DefaultLayout from "./layout/DefaultLayout";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
