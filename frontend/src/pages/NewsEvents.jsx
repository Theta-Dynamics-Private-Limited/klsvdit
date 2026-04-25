import React, { useState } from "react";
import { newsItems, events } from "../data/mock";
import { PageHero } from "./About";
import { Calendar } from "lucide-react";

const NewsEvents = () => {
  const [tab, setTab] = useState("news");

  return (
    <main>
      <PageHero
        title="News & Events"
        sub="What's happening at VDIT"
        image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=2400&q=80"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex gap-2 border-b border-[#7a1d2c]/20 mb-10 font-sans-ui">
          {[
            ["news", "News"],
            ["events", "Events"],
          ].map(([k, l]) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`px-5 py-3 text-sm font-semibold tracking-widest transition-colors ${
                tab === k
                  ? "text-[#7a1d2c] border-b-2 border-[#7a1d2c]"
                  : "text-[#3a3a3a] hover:text-[#7a1d2c]"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        {tab === "news" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((n) => (
              <article key={n.id} className="bg-white border border-[#7a1d2c]/10 card-hover">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={n.image} alt={n.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#7a1d2c] tracking-wider font-sans-ui">{n.date}</span>
                  <h3 className="text-[#7a1d2c] text-xl mt-2 font-semibold leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{n.title}</h3>
                  <p className="text-[#3a3a3a]/85 text-sm mt-3 leading-relaxed">{n.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((e) => (
              <div key={e.id} className="border-l-4 border-[#7a1d2c] bg-white p-6 card-hover">
                <div className="flex items-center gap-2 text-[#7a1d2c] text-xs tracking-wider font-sans-ui mb-2">
                  <Calendar size={14} />
                  {e.date} · {e.time}
                </div>
                <h3 className="text-[#2a2a2a] text-xl font-semibold leading-snug">{e.title}</h3>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default NewsEvents;
