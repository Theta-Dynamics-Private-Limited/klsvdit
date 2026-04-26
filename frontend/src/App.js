import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingApply from "./components/FloatingApply";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Research from "./pages/Research";
import Campus from "./pages/Campus";
import NewsEvents from "./pages/NewsEvents";

// Inner About sub-pages
import AboutVDIT from "./pages/AboutVDIT";
import PrincipalsMessage from "./pages/PrincipalsMessage";
import VisionMission from "./pages/VisionMission";
import OurHistory from "./pages/OurHistory";
import GoverningBodies from "./pages/GoverningBodies";
import People from "./pages/People";
import Committees from "./pages/Committees";
import Rules from "./pages/Rules";
import RTI from "./pages/RTI";
import IQAC from "./pages/IQAC";
import NIRF from "./pages/NIRF";
import MandatoryDisclosure from "./pages/MandatoryDisclosure";
import FinancialStatements from "./pages/FinancialStatements";

// Other inner pages
import ProgrammeDetail from "./pages/ProgrammeDetail";
import Placements from "./pages/Placements";
import Library from "./pages/Library";
import Alumni from "./pages/Alumni";
import Students from "./pages/Students";
import FacultyProfile from "./pages/FacultyProfile";
import NewsDetail from "./pages/NewsDetail";
import EventDetail from "./pages/EventDetail";
import Announcements from "./pages/Announcements";
import AnnouncementDetail from "./pages/AnnouncementDetail";
import StudentClubs from "./pages/StudentClubs";

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
        <AnnouncementBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* About + sub */}
          <Route path="/about" element={<Navigate to="/about/about-vdit" replace />} />
          <Route path="/about/about-vdit" element={<AboutVDIT />} />
          <Route path="/about/principals-message" element={<PrincipalsMessage />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/our-history" element={<OurHistory />} />
          <Route path="/about/governing-bodies" element={<GoverningBodies />} />
          <Route path="/about/people" element={<People />} />
          <Route path="/about/committees" element={<Committees />} />
          <Route path="/about/rules" element={<Rules />} />
          <Route path="/about/rti" element={<RTI />} />
          <Route path="/about/iqac" element={<IQAC />} />
          <Route path="/about/nirf" element={<NIRF />} />
          <Route path="/about/mandatory-disclosure" element={<MandatoryDisclosure />} />
          <Route path="/about/financial-statements" element={<FinancialStatements />} />
          {/* Legacy About page */}
          <Route path="/about-legacy" element={<About />} />
          {/* Academics + departments */}
          <Route path="/academics" element={<Academics />} />
          <Route path="/programme/:id" element={<ProgrammeDetail />} />
          {/* Other top-level */}
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/research" element={<Research />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/library" element={<Library />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/students" element={<Students />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/faculty/:id" element={<FacultyProfile />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/announcement/:id" element={<AnnouncementDetail />} />
          <Route path="/student-clubs" element={<StudentClubs />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <FloatingApply />
      </BrowserRouter>
    </div>
  );
}

export default App;
