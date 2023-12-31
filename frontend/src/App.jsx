import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Register from "./register";
import Login from "./login";
import Agency from "./Agency";
import Home from "./home";
import Mapp from "./Mapp";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path=":id" element={<Agency />} />
        <Route path="/map" element={<Mapp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<h1>logout</h1>}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
