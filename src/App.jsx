import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" />
    </Routes>
  );
}

export default App;
