import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Realisation from "./pages/Realisation";
import Video from "./pages/Video";
import Contact from "./pages/Contact";
import Peb from "./pages/Peb";
import Conventional from "./pages/Conventional";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RevealingSection from "./components/Revel";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/peb" element={<Peb />} />
        <Route path="/conventional" element={<Conventional />} />
        <Route path="/realisation" element={<Realisation />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
