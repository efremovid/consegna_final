import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Main from "./layout/Main/Main";

function App() {
  return (
    <div className="content">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
