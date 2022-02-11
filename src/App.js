import "./App.css";
import About from "./Pages/AboutDomain/about";

import { Routes, Route } from "react-router-dom";
import SignUpIn from "./Pages/SignInUp/sign-up-in";
import Publication from "./Pages/publication/publication";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/signup" element={<SignUpIn />} />
        <Route path="/publication" element={<Publication />} />
      </Routes>
    </div>
  );
}

export default App;
