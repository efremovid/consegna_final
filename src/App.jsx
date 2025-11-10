import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Main from "./layout/Main/Main";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import Cards from "./components/Cardrs/Cards";
import Contacts from "./components/Contacts/Contacts";
import Rent from "./components/Rent/Rent";
import PageForm from "./components/PageForm/PageForm";

function App() {
  return (
    <Router>
      <div className="content">
        <Header />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/sale" element={<Cards />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/form" element={<PageForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
