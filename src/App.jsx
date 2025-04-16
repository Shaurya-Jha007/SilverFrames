import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage";

// const apiKey = import.meta.env.VITE_API_KEY;
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DefaultPage />} />
      </Routes>
    </>
  );
}

export default App;
