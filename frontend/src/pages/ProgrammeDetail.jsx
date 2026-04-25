import React from "react";
import { useParams, Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import { departments } from "../data/mock";
import { ArrowLeft, Beaker, Users, Calendar, Microscope } from "lucide-react";

const ProgrammeDetail = () => {
  const { id } = useParams();
  const dept = departments.find((d) => d.id === id);

  if (!dept) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-[#7a1d2c] text-xl">Programme not found.</p>
        <Link to="/academics" className="inline-flex items-center gap-2 text-[#7a1d2c] underline mt-3">
          <ArrowLeft size={14} /> Back to Academics
        </Link>
      </main>
    );
  }

  return (
    <main>
      <InnerHero
        title={dept.name}
        image={dept.image}
        breadcrumbs={[
          { label: "Academics", to: "/academics" },
          { label: "Departments", to: "/academics#departments" },
          { label: dept.short },
        ]}
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="text-xs tracking-[0.2em] text-[#7a1d2c] font-sans-ui font-semibold">{dept.short}</span>
              <h2 className="text-3xl md:text-4xl text-[#7a1d2c] font-semibold mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                B.E. {dept.name}
              </h2>
              <p className="text-[#2a2a2a]/85 leading-relaxed text-[15.5px] mt-4">{dept.description}</p>
            </div>

            <div>
              <h3 className="text-xl text-[#7a1d2c] font-semibold mb-3 flex items-center gap-2"><Beaker size={20} /> Laboratories</h3>
              <div className="flex flex-wrap gap-2">
                {dept.labs.map((l) => (
                  <span key={l} className="px-3 py-1.5 bg-[#7a1d2c]/10 text-[#7a1d2c] text-sm rounded-full">
                    {l}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl text-[#7a1d2c] font-semibold mb-3 flex items-center gap-2"><Microscope size={20} /> Research Areas</h3>
              <p className="text-[#2a2a2a]/85">{dept.research}</p>
            </div>

            <div>
              <h3 className="text-xl text-[#7a1d2c] font-semibold mb-3">Programme Educational Objectives (PEOs)</h3>
              <ol className="list-decimal list-inside space-y-2 text-[#2a2a2a]/85 text-[15px]">
                <li>Graduates will pursue successful careers in industry, government, academia or entrepreneurship.</li>
                <li>Graduates will demonstrate professional and ethical responsibility in solving engineering problems.</li>
                <li>Graduates will engage in lifelong learning to adapt to evolving technologies.</li>
                <li>Graduates will work effectively in multidisciplinary teams and communicate effectively.</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl text-[#7a1d2c] font-semibold mb-3">Curriculum Highlights</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "VTU Choice-Based Credit System (CBCS)",
                  "Industry-aligned electives",
                  "Mini-project & capstone design",
                  "Internship in Semester VII",
                  "Research methodology elective",
                  "Soft-skills & employability training",
                ].map((p) => (
                  <div key={p} className="bg-white p-3 border-l-4 border-[#7a1d2c] text-sm">{p}</div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="bg-white border border-[#7a1d2c]/15 p-5">
              <h4 className="text-xs uppercase tracking-widest text-[#7a1d2c] font-semibold font-sans-ui">Quick Facts</h4>
              <div className="mt-3 space-y-3 text-sm">
                <div className="flex items-center gap-2"><Calendar size={14} className="text-[#7a1d2c]" /><span>Established: <strong>{dept.established}</strong></span></div>
                <div className="flex items-center gap-2"><Users size={14} className="text-[#7a1d2c]" /><span>Annual Intake: <strong>{dept.intake} seats</strong></span></div>
                <div>Head of Department: <strong>{dept.hod}</strong></div>
                <div>Duration: <strong>4 Years (8 Semesters)</strong></div>
                <div>Affiliation: <strong>VTU, Belagavi</strong></div>
              </div>
              <Link to="/admissions" className="block mt-5 text-center bg-[#7a1d2c] text-[#f7efe2] py-2.5 text-sm font-semibold font-sans-ui hover:bg-[#5b1421] transition">
                Apply for {dept.short}
              </Link>
            </div>

            <div className="bg-[#7a1d2c]/5 border border-[#7a1d2c]/15 p-5">
              <h4 className="text-xs uppercase tracking-widest text-[#7a1d2c] font-semibold font-sans-ui mb-3">Other Departments</h4>
              <ul className="space-y-1.5">
                {departments.filter((d) => d.id !== dept.id).map((d) => (
                  <li key={d.id}>
                    <Link to={`/programme/${d.id}`} className="text-sm text-[#2a2a2a] hover:text-[#7a1d2c]">· {d.short} — {d.name.replace(/\s*\([^)]*\)/g, "")}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ProgrammeDetail;
