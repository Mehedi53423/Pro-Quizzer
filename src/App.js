import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Error from "./components/Error";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
