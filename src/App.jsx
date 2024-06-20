import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Realisation from "./pages/Realisation";
import Video from "./pages/Video";
import Contact from "./pages/Contact";
import Peb from "./pages/Peb";
import Conventional from "./pages/Conventional";
import ScrollTop from "./components/Utilies/ScrollTop";
import BackToTop from "./components/Utilies/BackToTop";

import Navbar from "./components/Utilies/Navbar";
import Footer from "./components/Utilies/Footer";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollTop />
        <Navbar />
        <React.Suspense fallback={<div/>}>
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
        </React.Suspense>
        <BackToTop />
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
