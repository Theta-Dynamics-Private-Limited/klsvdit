import React from "react";
import { NavLink } from "react-router-dom";

const SectionSidebar = ({ title, items = [] }) => {
  return (
    <aside className="lg:w-72 flex-shrink-0">
      <div className="bg-white border border-[#7a1d2c]/15 sticky top-32">
        <div className="px-5 py-4 bg-[#7a1d2c] text-[#f7efe2]">
          <h3 className="text-base font-sans-ui font-semibold tracking-wider uppercase">
            {title}
          </h3>
        </div>
        <ul className="divide-y divide-[#7a1d2c]/10">
          {items.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `block px-5 py-3 text-sm transition-colors ${
                    isActive
                      ? "bg-[#f7efe2] text-[#7a1d2c] border-l-4 border-[#7a1d2c] font-semibold"
                      : "text-[#2a2a2a] hover:bg-[#f7efe2]/60 hover:text-[#7a1d2c] border-l-4 border-transparent"
                  }`
                }
              >
                {item.label}
              </NavLink>
              {item.children && (
                <ul className="pl-5 pb-2">
                  {item.children.map((c) => (
                    <li key={c.to}>
                      <NavLink
                        to={c.to}
                        end
                        className={({ isActive }) =>
                          `block py-1.5 text-[13px] ${
                            isActive
                              ? "text-[#7a1d2c] font-semibold"
                              : "text-[#3a3a3a] hover:text-[#7a1d2c]"
                          }`
                        }
                      >
                        · {c.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SectionSidebar;
