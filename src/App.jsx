import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Main from "./layout/Main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cards from "./components/Cardrs/Cards";

function App() {
  return (
    <div className="content">
      <Header />
      <Router>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/sale" element={<Cards />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
