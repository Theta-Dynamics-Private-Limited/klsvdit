import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[#f1e6d2] border-t border-[#7a1d2c]/15 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Logo size={90} />
          </div>

          <div>
            <h4 className="text-[#7a1d2c] font-semibold text-xs tracking-[0.18em] mb-4 font-sans-ui">
              KEY LINKS
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/admissions" className="hover:text-[#7a1d2c]">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#7a1d2c]">
                  About VDIT
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-[#7a1d2c]">
                  Academic Records
                </Link>
              </li>
              <li>
                <Link to="/about#alumni" className="hover:text-[#7a1d2c]">
                  Alumni
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#7a1d2c] font-semibold text-xs tracking-[0.18em] mb-4 font-sans-ui">
              VISITORS
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/campus" className="hover:text-[#7a1d2c]">
                  Visit VDIT
                </Link>
              </li>
              <li>
                <Link to="/campus#hostels" className="hover:text-[#7a1d2c]">
                  Stay@VDIT
                </Link>
              </li>
              <li>
                <Link to="/news-events" className="hover:text-[#7a1d2c]">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#7a1d2c] font-semibold text-xs tracking-[0.18em] mb-4 font-sans-ui">
              POLICIES
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#terms" className="hover:text-[#7a1d2c]">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[#7a1d2c]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#anti-ragging" className="hover:text-[#7a1d2c]">
                  Anti-Ragging
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#7a1d2c] font-semibold text-xs tracking-[0.18em] mb-4 font-sans-ui">
              CONTACT US
            </h4>
            <ul className="space-y-2 text-sm text-[#3a3a3a]">
              <li>KLS VDIT, Haliyal</li>
              <li>Uttara Kannada, Karnataka 581 329</li>
              <li className="pt-1">08284 - 220 333</li>
              <li>08284 - 220 332</li>
              <li>info@klsvdit.edu.in</li>
            </ul>
          </div>

          <div>
            <button className="w-full bg-[#7a1d2c] text-[#f7efe2] py-3 px-4 text-sm font-semibold rounded hover:bg-[#5b1421] transition-colors font-sans-ui">
              Subscribe to our newsletter
            </button>
            <div className="mt-5 flex gap-3 text-[#7a1d2c]">
              <a href="#li" aria-label="LinkedIn" className="hover:scale-110 transition">
                <Linkedin size={22} />
              </a>
              <a href="#tw" aria-label="Twitter" className="hover:scale-110 transition">
                <Twitter size={22} />
              </a>
              <a href="#fb" aria-label="Facebook" className="hover:scale-110 transition">
                <Facebook size={22} />
              </a>
              <a href="#ig" aria-label="Instagram" className="hover:scale-110 transition">
                <Instagram size={22} />
              </a>
              <a href="#yt" aria-label="YouTube" className="hover:scale-110 transition">
                <Youtube size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#7a1d2c]/15 text-xs text-[#3a3a3a]/80 flex flex-col md:flex-row justify-between gap-3">
          <span>
            © 2026 KLS Vishwanathrao Deshpande Institute of Technology, Haliyal
          </span>
          <span>
            A Karnatak Law Society Initiative · Affiliated to VTU, Belagavi
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
