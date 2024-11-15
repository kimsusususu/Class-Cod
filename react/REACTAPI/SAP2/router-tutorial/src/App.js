
import { Routes,Route } from "react-router-dom"
import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/profiles/:username" element={<Profile/>}/>
    </Routes>
  );
}

export default App;
