import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Research from "./pages/Research";
import Campus from "./pages/Campus";
import NewsEvents from "./pages/NewsEvents";

const Forum = () => (
  <main className="max-w-5xl mx-auto px-6 lg:px-10 py-24 min-h-[60vh]">
    <h1
      className="text-4xl md:text-5xl text-[#7a1d2c] font-semibold mb-4"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      VDIT Forum
    </h1>
    <p className="text-[#2a2a2a]/85 leading-relaxed">
      The VDIT Forum is a peer-reviewed publication featuring student and
      faculty perspectives on engineering, technology, and society. Issues are
      released bi-annually and are open access.
    </p>
  </main>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/research" element={<Research />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
