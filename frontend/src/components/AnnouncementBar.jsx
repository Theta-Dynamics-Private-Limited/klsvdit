import React from "react";
import { Megaphone } from "lucide-react";
import { announcements } from "../data/mock";

const AnnouncementBar = () => {
  const items = [...announcements, ...announcements];
  return (
    <div className="bg-[#5b1421] text-[#f7efe2] overflow-hidden">
      <div className="flex items-center max-w-[1900px] mx-auto">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#7a1d2c] text-[#f7efe2] flex-shrink-0 font-sans-ui text-xs uppercase tracking-widest">
          <Megaphone size={14} />
          <span className="hidden sm:inline">Announcements</span>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex gap-12 marquee-track py-2 whitespace-nowrap">
            {items.map((m, i) => (
              <span key={i} className="text-[13px] font-sans-ui flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f7efe2]/70" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
