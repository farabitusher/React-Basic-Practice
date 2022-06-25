import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Service from "./Components/Service/Service";
import Blog from "./Components/Blogs/Blog";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/service" element={<Service></Service>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/about" element={<About></About>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
