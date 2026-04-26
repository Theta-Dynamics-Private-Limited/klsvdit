// Mock data for KLS VDIT website

export const announcements = [
  { id: "adm-2026", text: "Admissions Open for Academic Year 2026-27 \u00b7 Apply by June 30, 2026", date: "April 15, 2026" },
  { id: "aiml-launch", text: "B.E. in CSE (AI & ML) \u2014 New Programme launched. Limited seats.", date: "April 10, 2026" },
  { id: "place-2026", text: "VDIT placement season 2026 closes with 320+ offers across core and IT firms.", date: "April 5, 2026" },
  { id: "exam-tt", text: "Notice: 6th & 8th semester examination timetable published.", date: "March 28, 2026" },
  { id: "iedc-fy26", text: "VDIT IEDC invites student startup proposals for FY26 funding round.", date: "March 20, 2026" },
];

export const heroSlides = [
  { id: 1, image: "https://images.unsplash.com/photo-1702549956329-0888cfa45092?w=2400&q=80", title: "ADMISSIONS OPEN | 2026-27", subtitle: "Engineering Excellence at KLS VDIT", cta: "APPLY BY JUNE 30, 2026", link: "/admissions" },
  { id: 2, image: "https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=2400", title: "22 YEARS OF TECHNICAL EXCELLENCE", subtitle: "Transforming Through Technology since 2004", cta: "EXPLORE OUR LEGACY", link: "/about/our-history" },
  { id: 3, image: "https://images.pexels.com/photos/16767715/pexels-photo-16767715.jpeg?w=2400", title: "26-ACRE GREEN CAMPUS", subtitle: "A learning environment cradled by nature", cta: "VISIT THE CAMPUS", link: "/campus" },
  { id: 4, image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=2400&q=80", title: "NEW B.E. IN AI & MACHINE LEARNING", subtitle: "Future-ready programmes for the modern engineer", cta: "LEARN MORE", link: "/programme/cse-aiml" },
];

export const departments = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    short: "CSE",
    intake: 120,
    established: 2004,
    description: "Established in 2004, the department offers a B.E. programme with specialisations in software engineering, data structures, computer networks and emerging areas of computing.",
    image: "https://images.pexels.com/photos/6208728/pexels-photo-6208728.jpeg?w=1000",
    hodId: "f-suresh",
    labs: ["Programming Lab", "Database Lab", "Networks Lab", "Cyber Security Lab", "Data Science Lab"],
    research: "Software Engineering \u00b7 Cloud Computing \u00b7 Cybersecurity \u00b7 Data Mining",
    accreditation: ["NBA Accredited (Tier-2) since 2018", "VTU Recognised Research Centre", "AICTE Approved Intake: 120 seats"],
    achievements: [
      "ACM Inter-Collegiate Programming Champions, Karnataka, 2025",
      "Smart India Hackathon 2024 \u2014 Hardware Track Winners",
      "Best Paper Award at ICACCS 2025 (Bengaluru)",
      "VTU Gold Medal \u2014 Ms. Pooja Kulkarni, Batch 2024",
    ],
    projects: [
      { title: "IoT Smart Agriculture for Uttara Kannada", funding: "VGST Karnataka", amount: "\u20b9 12 L" },
      { title: "Federated Learning for Rural Healthcare", funding: "AICTE RPS", amount: "\u20b9 8 L" },
      { title: "Cyber Threat Intelligence Platform", funding: "DST Nidhi", amount: "\u20b9 15 L" },
    ],
  },
  {
    id: "cse-aiml",
    name: "Computer Science & Engineering (AI & ML)",
    short: "CSE (AI & ML)",
    intake: 60,
    established: 2022,
    description: "A future-ready programme focussing on artificial intelligence, machine learning, deep learning, and intelligent systems for industry 4.0.",
    image: "https://images.pexels.com/photos/9243572/pexels-photo-9243572.jpeg?w=1000",
    hodId: "f-anjali",
    labs: ["AI Lab", "Deep Learning Studio", "GPU Compute Lab", "Robotics Lab"],
    research: "Computer Vision \u00b7 NLP \u00b7 Reinforcement Learning \u00b7 Edge AI",
    accreditation: ["AICTE Approved Intake: 60 seats", "VTU Affiliated since 2022", "NAAC accreditation under preparation for first NBA cycle"],
    achievements: [
      "Top 10 Finalist \u2014 Microsoft Imagine Cup India, 2025",
      "Best AI Project Award at TANTRAJNANA 2025",
      "Selected for NVIDIA AI Educator Programme, 2025",
    ],
    projects: [
      { title: "Multilingual NLP for Kannada-English Code-Mixing", funding: "AICTE RPS", amount: "\u20b9 10 L" },
      { title: "Edge-AI for Wildlife Monitoring \u2014 Dandeli Forest Range", funding: "Karnataka Forest Dept.", amount: "\u20b9 6 L" },
    ],
  },
  {
    id: "ece",
    name: "Electronics & Communication Engineering",
    short: "ECE",
    intake: 60,
    established: 2004,
    description: "The ECE department prepares students in VLSI design, embedded systems, signal processing, and wireless communication with state-of-the-art labs.",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1000&q=80",
    hodId: "f-mahesh",
    labs: ["VLSI Lab", "Embedded Systems Lab", "Communication Lab", "DSP Lab"],
    research: "VLSI Design \u00b7 Wireless Networks \u00b7 IoT \u00b7 Image Processing",
    accreditation: ["NBA Accredited (Tier-2) since 2019", "VTU Recognised Research Centre", "AICTE Approved Intake: 60 seats"],
    achievements: [
      "IEEE Best Student Branch Award (Karnataka Section), 2024",
      "Patent filed: Low-power VLSI architecture for IoT edge nodes",
      "Three students published in IEEE Sensors Journal, 2025",
    ],
    projects: [
      { title: "5G Beamforming Test-bed", funding: "DST SERB", amount: "\u20b9 18 L" },
      { title: "Wearable Health Monitor \u2014 Rural Karnataka", funding: "VGST", amount: "\u20b9 9 L" },
    ],
  },
  {
    id: "eee",
    name: "Electrical & Electronics Engineering",
    short: "EEE",
    intake: 60,
    established: 2004,
    description: "Focuses on power systems, control engineering, renewable energy, and electrical machines, training engineers for India's evolving energy sector.",
    image: "https://images.pexels.com/photos/8423416/pexels-photo-8423416.jpeg?w=1000",
    hodId: "f-ramesh",
    labs: ["Power Systems Lab", "Electrical Machines Lab", "Control Systems Lab", "Renewable Energy Lab"],
    research: "Smart Grids \u00b7 Power Electronics \u00b7 Renewable Energy \u00b7 EV Systems",
    accreditation: ["NBA Accredited (Tier-2) since 2020", "AICTE Approved Intake: 60 seats", "MoU with KREDL for joint research"],
    achievements: [
      "MNRE Sponsored Solar Energy Centre established, 2024",
      "First Prize \u2014 IEEE Power Engineering Quiz, Karnataka, 2025",
      "Faculty publication in IEEE Transactions on Sustainable Energy",
    ],
    projects: [
      { title: "Hybrid Solar-Wind Microgrid for Western Ghats", funding: "MNRE", amount: "\u20b9 22 L" },
      { title: "EV Charging Infrastructure Study", funding: "KREDL", amount: "\u20b9 7 L" },
    ],
  },
  {
    id: "me",
    name: "Mechanical Engineering",
    short: "ME",
    intake: 60,
    established: 2004,
    description: "Offers a comprehensive curriculum in thermodynamics, manufacturing, design and mechatronics, supported by modern workshops and CAD/CAM facilities.",
    image: "https://images.unsplash.com/photo-1702549956329-0888cfa45092?w=1000&q=80",
    hodId: "f-vikram",
    labs: ["CAD/CAM Lab", "Thermodynamics Lab", "Fluid Mechanics Lab", "Manufacturing Workshop"],
    research: "Additive Manufacturing \u00b7 Tribology \u00b7 Thermal Engineering \u00b7 Mechatronics",
    accreditation: ["NBA Accredited (Tier-2) since 2019", "AICTE Approved Intake: 60 seats", "Industry MoU with Bosch & Mahindra"],
    achievements: [
      "SAE BAJA 2025 \u2014 All India Rank 38",
      "Go-Kart Championship Karnataka \u2014 Runners-up, 2024",
      "Two patents granted in additive manufacturing, 2025",
    ],
    projects: [
      { title: "FDM 3D Printing of Bio-composites", funding: "DST SERB", amount: "\u20b9 14 L" },
      { title: "Tribological Study of Hybrid Bearings", funding: "AICTE RPS", amount: "\u20b9 8 L" },
    ],
  },
  {
    id: "civil",
    name: "Civil Engineering",
    short: "Civil",
    intake: 60,
    established: 2004,
    description: "Trains engineers in structural analysis, environmental engineering, geotechnics, and construction management for sustainable infrastructure.",
    image: "https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=1000",
    hodId: "f-suma",
    labs: ["Structural Lab", "Geotechnical Lab", "Surveying Lab", "Environmental Lab"],
    research: "Sustainable Materials \u00b7 Water Resources \u00b7 Earthquake Engineering",
    accreditation: ["AICTE Approved Intake: 60 seats", "NBA accreditation visit \u2014 March 2026", "MoU with PWD Karnataka"],
    achievements: [
      "Best Student Project \u2014 ICI Karnataka Chapter, 2025",
      "National Conference on Sustainable Engineering hosted, 2026",
      "Funded study on flood resilience for Ghataprabha basin",
    ],
    projects: [
      { title: "Sustainable Concrete with Industrial Byproducts", funding: "DST SERB", amount: "\u20b9 12 L" },
      { title: "Earthquake Vulnerability Mapping \u2014 N. Karnataka", funding: "Karnataka SDMA", amount: "\u20b9 9 L" },
    ],
  },
];

// Faculty list with structured profiles. Each faculty has a stable id used in routes /faculty/:id
export const faculty = [
  // CSE
  { id: "f-suresh", name: "Dr. Suresh M. Patil", role: "Professor & Head", deptId: "cse", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&q=80", qualifications: "Ph.D. (CSE), VTU; M.Tech (CSE), IIT Bombay", experience: "24 years", email: "suresh.patil@klsvdit.edu.in", phone: "+91 98456 12300", areas: ["Cloud Computing", "Software Architecture", "Distributed Systems"], courses: ["Operating Systems", "Cloud Computing", "Software Engineering"], publications: 38, projects: 4, bio: "Dr. Suresh M. Patil leads the Department of Computer Science & Engineering at KLS VDIT. His research focuses on scalable cloud architectures, microservice design and dependable distributed systems. He has supervised four Ph.D. scholars and is a senior member of IEEE and ACM." },
  { id: "f-nandini", name: "Prof. Nandini D. Shet", role: "Associate Professor", deptId: "cse", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80", qualifications: "M.Tech (CSE), VTU; Ph.D. (Pursuing)", experience: "15 years", email: "nandini.shet@klsvdit.edu.in", phone: "+91 99001 23012", areas: ["Cybersecurity", "IoT Security", "Web Technologies"], courses: ["Computer Networks", "Cyber Security", "Web Programming"], publications: 22, projects: 2, bio: "Prof. Nandini D. Shet teaches networks and security courses and runs the Cyber Security Lab. She mentors VDIT's CTF team and the Placement Committee on technical preparation." },
  { id: "f-rohan", name: "Mr. Rohan A. Kulkarni", role: "Assistant Professor", deptId: "cse", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80", qualifications: "M.Tech (CSE), NITK Surathkal", experience: "9 years", email: "rohan.k@klsvdit.edu.in", phone: "+91 99860 11102", areas: ["Database Systems", "Data Mining"], courses: ["DBMS", "Data Structures", "DAA"], publications: 14, projects: 1, bio: "Mr. Rohan A. Kulkarni anchors the Database Lab and is faculty advisor to the VDIT Coding Club." },
  { id: "f-shilpa", name: "Ms. Shilpa V. Joshi", role: "Assistant Professor", deptId: "cse", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80", qualifications: "M.Tech (CSE), VTU", experience: "7 years", email: "shilpa.j@klsvdit.edu.in", phone: "+91 99000 11023", areas: ["Software Engineering", "Agile"], courses: ["Software Engineering", "Programming in C", "OOP with Java"], publications: 9, projects: 0, bio: "Ms. Shilpa V. Joshi mentors the Project Cell and coordinates the industry-internship programme for CSE." },

  // CSE (AI & ML)
  { id: "f-anjali", name: "Dr. Anjali V. Kulkarni", role: "Professor & Head", deptId: "cse-aiml", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80", qualifications: "Ph.D. (AI), IIIT Hyderabad", experience: "18 years", email: "anjali.k@klsvdit.edu.in", phone: "+91 99800 12211", areas: ["Computer Vision", "Natural Language Processing"], courses: ["Machine Learning", "Deep Learning", "AI Foundations"], publications: 41, projects: 3, bio: "Dr. Anjali V. Kulkarni founded VDIT's CSE (AI & ML) department in 2022. Her research includes multilingual NLP for Indic languages and edge-deployed computer vision. She is a recognised NVIDIA Deep Learning Institute Instructor." },
  { id: "f-arjun", name: "Mr. Arjun B. Hegde", role: "Assistant Professor", deptId: "cse-aiml", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80", qualifications: "M.Tech (AI/ML), IIT Hyderabad", experience: "6 years", email: "arjun.h@klsvdit.edu.in", phone: "+91 98456 23414", areas: ["Reinforcement Learning", "Robotics"], courses: ["Reinforcement Learning", "Python for AI", "Robotics"], publications: 12, projects: 1, bio: "Mr. Arjun B. Hegde leads the Robotics Lab and runs the AI Innovation Club for undergraduate students." },
  { id: "f-pooja", name: "Ms. Pooja R. Naik", role: "Assistant Professor", deptId: "cse-aiml", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80", qualifications: "M.Tech (Data Science), VTU", experience: "5 years", email: "pooja.n@klsvdit.edu.in", phone: "+91 99641 11500", areas: ["Data Engineering", "MLOps"], courses: ["Big Data", "MLOps", "Data Visualization"], publications: 7, projects: 0, bio: "Ms. Pooja R. Naik focuses on data engineering pipelines and MLOps. She coordinates VDIT's Generative-AI workshops with industry partners." },

  // ECE
  { id: "f-mahesh", name: "Dr. Mahesh G. Hegde", role: "Professor & Head", deptId: "ece", image: "https://images.unsplash.com/photo-1559548331-f9cb98001426?w=600&q=80", qualifications: "Ph.D. (VLSI), IIT Madras", experience: "27 years", email: "mahesh.hegde@klsvdit.edu.in", phone: "+91 99454 12200", areas: ["VLSI Design", "Low-power Architecture"], courses: ["Digital Design", "VLSI Design", "Microprocessors"], publications: 52, projects: 5, bio: "Dr. Mahesh G. Hegde leads the ECE department and the VTU Research Centre. He has been awarded the Karnataka Govt. Best Teacher Award (2022) and holds two granted patents." },
  { id: "f-anand", name: "Prof. Anand B. Shenoy", role: "Associate Professor", deptId: "ece", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80", qualifications: "M.Tech (Embedded Systems), VTU", experience: "16 years", email: "anand.s@klsvdit.edu.in", phone: "+91 99008 21100", areas: ["Embedded Systems", "IoT"], courses: ["Microcontrollers", "Embedded C", "IoT"], publications: 19, projects: 2, bio: "Prof. Anand B. Shenoy heads the Industry-Institute Interaction Cell and the Embedded Systems Lab." },
  { id: "f-divya", name: "Ms. Divya S. Bhat", role: "Assistant Professor", deptId: "ece", image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80", qualifications: "M.Tech (Comm. Systems), NITK", experience: "8 years", email: "divya.b@klsvdit.edu.in", phone: "+91 99002 17712", areas: ["Wireless Communication", "Antenna Design"], courses: ["Wireless Comm.", "Antenna Theory", "Signals & Systems"], publications: 11, projects: 1, bio: "Ms. Divya S. Bhat works on next-generation antenna design and supervises the Communication Lab." },

  // EEE
  { id: "f-ramesh", name: "Dr. Ramesh B. Naik", role: "Professor & Head", deptId: "eee", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", qualifications: "Ph.D. (Power Systems), IISc", experience: "26 years", email: "ramesh.naik@klsvdit.edu.in", phone: "+91 99452 33001", areas: ["Smart Grids", "Renewable Energy"], courses: ["Power Systems", "Smart Grids", "Renewable Energy"], publications: 46, projects: 4, bio: "Dr. Ramesh B. Naik directs VDIT's Centre for Renewable Energy & Sustainable Systems. His funded work on hybrid microgrids has been recognised by MNRE." },
  { id: "f-savita", name: "Prof. Savita V. Patil", role: "Associate Professor", deptId: "eee", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80", qualifications: "M.Tech (Power Electronics), VTU", experience: "14 years", email: "savita.p@klsvdit.edu.in", phone: "+91 99001 33402", areas: ["Power Electronics", "EV Systems"], courses: ["Power Electronics", "EV Systems", "Drives & Control"], publications: 18, projects: 1, bio: "Prof. Savita V. Patil leads the EV Systems studio and mentors VDIT's e-Mobility Club." },
  { id: "f-pradeep", name: "Mr. Pradeep S. Kamble", role: "Assistant Professor", deptId: "eee", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&q=80", qualifications: "M.Tech (Control Systems), VTU", experience: "8 years", email: "pradeep.k@klsvdit.edu.in", phone: "+91 99002 76601", areas: ["Control Systems", "Industrial Automation"], courses: ["Control Engineering", "PLC & SCADA"], publications: 10, projects: 0, bio: "Mr. Pradeep S. Kamble runs the Control Systems Lab and the industrial-automation skill bootcamps." },

  // ME
  { id: "f-vikram", name: "Dr. Vikram S. Joshi", role: "Professor & Head", deptId: "me", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80", qualifications: "Ph.D. (Manufacturing), IIT Bombay", experience: "25 years", email: "vikram.j@klsvdit.edu.in", phone: "+91 99452 89012", areas: ["Additive Manufacturing", "Mechatronics"], courses: ["Manufacturing Processes", "CAD/CAM", "Mechatronics"], publications: 47, projects: 5, bio: "Dr. Vikram S. Joshi heads the Mechanical department. He has been recognised with two granted patents in additive manufacturing." },
  { id: "f-kiran", name: "Prof. Kiran A. Desai", role: "Associate Professor", deptId: "me", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80", qualifications: "M.Tech (Thermal), VTU; Ph.D. (Pursuing)", experience: "13 years", email: "kiran.d@klsvdit.edu.in", phone: "+91 99002 33012", areas: ["Thermal Engineering", "HVAC"], courses: ["Thermodynamics", "Heat & Mass Transfer", "RAC"], publications: 16, projects: 1, bio: "Prof. Kiran A. Desai mentors the SAE BAJA team and runs the Thermodynamics Lab." },
  { id: "f-akash", name: "Mr. Akash V. Gokhale", role: "Assistant Professor", deptId: "me", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80", qualifications: "M.Tech (Design), VTU", experience: "7 years", email: "akash.g@klsvdit.edu.in", phone: "+91 99001 99902", areas: ["Mechanical Design", "FEM"], courses: ["Machine Design", "FEM", "CAD"], publications: 8, projects: 0, bio: "Mr. Akash V. Gokhale teaches design and FEM, and supervises CAD competitions." },

  // Civil
  { id: "f-suma", name: "Dr. Suma R. Kulkarni", role: "Professor & Head", deptId: "civil", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80", qualifications: "Ph.D. (Structural), IISc", experience: "23 years", email: "suma.k@klsvdit.edu.in", phone: "+91 99452 22011", areas: ["Earthquake Engineering", "Structural Health"], courses: ["Structural Analysis", "Earthquake Engg.", "Concrete Structures"], publications: 34, projects: 3, bio: "Dr. Suma R. Kulkarni leads the Civil Engineering department and chairs the Internal Complaints Committee. Her current project is on flood resilience in the Ghataprabha basin." },
  { id: "f-sandesh", name: "Prof. Sandesh M. Patil", role: "Associate Professor", deptId: "civil", image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=600&q=80", qualifications: "M.Tech (Geotech.), VTU", experience: "12 years", email: "sandesh.p@klsvdit.edu.in", phone: "+91 99001 88011", areas: ["Geotechnical Engineering", "Foundations"], courses: ["Geotech. Engg.", "Foundation Design", "Surveying"], publications: 13, projects: 1, bio: "Prof. Sandesh M. Patil heads the Geotechnical Lab and conducts site investigations for KREDL & PWD projects." },
  { id: "f-megha", name: "Ms. Megha B. Hosur", role: "Assistant Professor", deptId: "civil", image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=600&q=80", qualifications: "M.Tech (Environmental), VTU", experience: "6 years", email: "megha.h@klsvdit.edu.in", phone: "+91 99000 41110", areas: ["Environmental Engineering", "Water Quality"], courses: ["Environmental Engg.", "Water Resources"], publications: 7, projects: 0, bio: "Ms. Megha B. Hosur teaches environmental engineering and runs the Water Quality Lab." },
];

export const adminStaff = [
  { id: 1, name: "Shri. Ravindra K. Patil", role: "Registrar" },
  { id: 2, name: "Shri. Mahesh A. Desai", role: "Administrative Officer" },
  { id: 3, name: "Smt. Lata G. Hiremath", role: "Office Superintendent" },
  { id: 4, name: "Shri. Vinod B. Naik", role: "Accounts Officer" },
  { id: 5, name: "Shri. Subhash R. Patil", role: "Librarian" },
  { id: 6, name: "Smt. Pushpa V. Joshi", role: "Examination Section Head" },
];

export const researchers = [
  { id: 1, name: "Ms. Sindhu G. Patil", role: "Research Scholar", deptId: "cse", topic: "Federated Learning for Healthcare" },
  { id: 2, name: "Mr. Rishabh K. Joshi", role: "Research Scholar", deptId: "ece", topic: "5G Beamforming Algorithms" },
  { id: 3, name: "Ms. Mihika R. Naik", role: "Research Scholar", deptId: "eee", topic: "Hybrid Solar-Wind Microgrids" },
  { id: 4, name: "Mr. Karthik S. Bhat", role: "Research Scholar", deptId: "me", topic: "Additive Manufacturing of Composites" },
  { id: 5, name: "Ms. Faiza R. Kulkarni", role: "Research Scholar", deptId: "civil", topic: "Sustainable Concrete with Industrial Byproducts" },
];

export const newsItems = [
  { id: "n1", deptId: "civil", image: "https://images.pexels.com/photos/8423416/pexels-photo-8423416.jpeg?w=1200", title: "VDIT Hosts National Conference on Sustainable Engineering", description: "The Department of Civil Engineering successfully hosted a two-day National Conference on Sustainable Engineering Practices, attended by 200+ delegates from across India.", body: "Held on April 16-17, 2026, the conference featured 24 keynote talks, 6 parallel tracks and a poster session with over 60 entries. Distinguished speakers from IIT Bombay, IISc Bengaluru and PWD Karnataka set the tone for an enriching exchange of ideas around climate-resilient infrastructure, low-carbon construction and sustainable water resources.", date: "April 18, 2026", category: "Events" },
  { id: "n2", deptId: "cse", image: "https://images.pexels.com/photos/6208728/pexels-photo-6208728.jpeg?w=1200", title: "Research Project | IoT Based Smart Agriculture", description: "Faculty members from the CSE department receive a grant from VGST Karnataka to develop low-cost IoT solutions tailored for smallholder farmers in the Uttara Kannada region.", body: "The two-year project, led by Dr. Suresh M. Patil, will design solar-powered sensor nodes for soil moisture, weather and crop-stress detection. Field deployments are planned in Haliyal, Joida and Yellapur taluks, covering 30 farms.", date: "April 10, 2026", category: "Research" },
  { id: "n3", deptId: "eee", image: "https://images.pexels.com/photos/9243572/pexels-photo-9243572.jpeg?w=1200", title: "Faculty Publication | Renewable Energy Systems", description: "VDIT EEE faculty publish a peer-reviewed article on hybrid solar-wind microgrid optimisation in the IEEE Transactions on Sustainable Energy.", body: "Dr. Ramesh B. Naik and team's article presents a model-predictive controller for hybrid microgrids that improves utilisation by 14% over baseline rule-based controllers, with field validation at the campus solar plant.", date: "March 28, 2026", category: "Research" },
  { id: "n4", deptId: "cse", image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=1200&q=80", title: "Placement Drive 2026 | Record Offers", description: "The 2026 placement season concludes with VDIT students securing offers from leading firms including Infosys, TCS, Wipro, L&T, and several core engineering companies.", body: "85% of the eligible UG students received at least one offer; 64 students received multiple offers. The highest package this season is \u20b9 18 LPA from a Bengaluru-based product company.", date: "March 22, 2026", category: "Placement" },
  { id: "n5", deptId: "cse", image: "https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?w=1200", title: "NSS Activities | Village Outreach Programme", description: "VDIT NSS volunteers conduct a week-long village outreach in Haliyal Taluk, addressing digital literacy, health awareness and clean water initiatives.", body: "120 volunteers from across departments participated. The programme reached six villages with sessions on UPI safety, anti-tobacco awareness, and a free health camp organised in collaboration with the local PHC.", date: "March 14, 2026", category: "NSS" },
  { id: "n6", deptId: null, image: "https://images.unsplash.com/photo-1750379046723-5ed69ff11571?w=1200&q=80", title: "Work With Us | Faculty & Research Recruitment", description: "KLS VDIT invites applications for Assistant Professors, Lab Technicians, and Research Associates across multiple departments. Apply by May 30, 2026.", body: "Open positions span CSE, CSE (AI & ML), ECE, EEE, Mechanical and Civil. The full notification with eligibility, qualifications and application format is available on the VDIT careers portal.", date: "March 1, 2026", category: "Recruitment" },
  { id: "n7", deptId: "eee", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80", title: "MoU Signed with Karnataka Renewable Energy Development Ltd.", description: "VDIT formalises a partnership with KREDL for joint research, internships, and energy auditing projects benefiting students of EEE and Mechanical departments.", body: "The MoU enables paid internships at KREDL field offices, joint authoring of energy audits and access to KREDL's testing infrastructure for student capstone projects.", date: "February 18, 2026", category: "Partnership" },
  { id: "n8", deptId: null, image: "https://images.pexels.com/photos/12497061/pexels-photo-12497061.jpeg?w=1200", title: "Convocation 2025 | 462 Graduates Awarded Degrees", description: "The 11th Annual Graduation Day was celebrated in the presence of Hon'ble Vice-Chancellor of VTU Belagavi as Chief Guest.", body: "12 gold medals and 8 distinction certificates were awarded across programmes. The Chief Guest delivered a stirring address calling on graduates to be sensitive to local realities even as they pursue global opportunities.", date: "December 20, 2025", category: "Events" },
  { id: "n9", deptId: "ece", image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=1200&q=80", title: "ECE students publish in IEEE Sensors Journal", description: "Three undergraduate students of the ECE department co-author a paper on low-power IoT edge nodes published in IEEE Sensors Journal.", body: "The paper is the outcome of a year-long mini-project mentored by Dr. Mahesh G. Hegde, demonstrating how disciplined undergraduate research can yield tier-1 publications.", date: "February 5, 2026", category: "Research" },
  { id: "n10", deptId: "me", image: "https://images.unsplash.com/photo-1580130544577-e22c7df3633a?w=1200&q=80", title: "SAE BAJA 2025 | VDIT Team Secures All-India Rank 38", description: "The VDIT SAE BAJA team places in the top 50 nationally, an institute best result.", body: "The team designed, built and successfully ran a single-seat off-road vehicle through the rigorous BAJA endurance event. Mentor: Prof. Kiran A. Desai." , date: "January 22, 2026", category: "Achievement" },
];

export const events = [
  { id: "e1", deptId: null, title: "Tech Symposium 'TANTRAJNANA 2026' | Annual Inter-College Fest", date: "May 8-9, 2026", time: "9:00 AM", venue: "Main Auditorium", description: "VDIT's flagship inter-college techno-cultural fest with 30+ events across coding, robotics, paper presentations, gaming and cultural categories. Open to all engineering colleges of Karnataka." },
  { id: "e2", deptId: "eee", title: "Industry Connect | Guest Lecture by Dr. Prakash Joshi on 'Future of EVs'", date: "May 14, 2026", time: "11:00 AM", venue: "EEE Seminar Hall", description: "Dr. Prakash Joshi, VP-Engineering at a leading Indian EV maker, will discuss India's electric mobility roadmap, charging infrastructure and career opportunities for fresh engineers." },
  { id: "e3", deptId: "cse-aiml", title: "Workshop on Generative AI & Prompt Engineering | Dept. of CSE (AI & ML)", date: "May 20-22, 2026", time: "10:00 AM", venue: "AI Lab, CSE Block", description: "Three-day hands-on workshop covering prompt patterns, fine-tuning open models, and building LLM-powered applications. Limited seats." },
  { id: "e4", deptId: null, title: "Faculty Development Programme | Outcome Based Education", date: "June 2-7, 2026", time: "All Day", venue: "IQAC Conference Room", description: "AICTE-sponsored FDP on OBE, attainment computation, rubric design and assessment for engineering programmes." },
  { id: "e5", deptId: null, title: "VTU Convocation 2026 | Ceremony for Graduating Batch", date: "July 12, 2026", time: "10:30 AM", venue: "VDIT Main Ground", description: "Annual graduation ceremony for the outgoing batch. Family invitations will be issued to all graduating students." },
  { id: "e6", deptId: "cse", title: "Hackathon 'CodeKshatriya' | 24-hour Coding Marathon", date: "August 5-6, 2026", time: "9:00 AM", venue: "CSE Block", description: "Annual 24-hour coding marathon. Teams of 3 build solutions for real problems shortlisted from local enterprises and NGOs." },
];

export const stats = {
  established: "2004",
  students: "1650+",
  campus: "26 Acres",
  faculty: "100+",
  alumni: "7700+",
  ugCourses: "7",
  pgCourses: "2",
  nbaPrograms: "4",
  placement: "85%",
};

export const leaders = [
  { id: 1, name: "Dr. V. A. Kulkarni", role: "Principal", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80", bio: "Dr. V. A. Kulkarni serves as the Principal of KLS VDIT and the Ex-Officio Member of the Local Governing Council. With decades of experience in technical education and academic leadership, he has steered the institute toward NAAC accreditation and sustained NBA tier-2 outcomes for multiple programmes." },
  { id: 2, name: "Shri. Prashant Kulkarni", role: "Chairman, KLS VDIT LGC", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80", bio: "Shri. Prashant Kulkarni chairs the Local Governing Council of KLS VDIT. A long-standing member of the Karnatak Law Society, he has played a key role in shaping VDIT's strategic vision and industry-institute partnerships." },
  { id: 3, name: "Shri. V. M. Deshpande", role: "Member Secretary", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", bio: "As Member Secretary of the LGC and Secretary of the Karnatak Law Society, Shri. V. M. Deshpande has been instrumental in establishing and nurturing VDIT since its inception in 2004." },
  { id: 4, name: "Shri. Ram Bhandare", role: "Member, LGC", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80", bio: "Shri. Ram Bhandare serves as a member of the Local Governing Council, bringing rich experience in education administration and community service." },
  { id: 5, name: "Shri. Prakash G. Badkundri", role: "Member, LGC", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", bio: "A senior member of the KLS VDIT Local Governing Council, Shri. Badkundri contributes to the institute's policy framework and stakeholder engagement." },
];

export const committees = [
  { name: "Internal Quality Assurance Cell (IQAC)", chair: "Dr. V. A. Kulkarni" },
  { name: "Anti-Ragging Committee", chair: "Dr. Suresh M. Patil" },
  { name: "Internal Complaints Committee (ICC)", chair: "Dr. Suma R. Kulkarni" },
  { name: "Examination Committee", chair: "Dr. Mahesh G. Hegde" },
  { name: "Library Advisory Committee", chair: "Shri. Subhash R. Patil" },
  { name: "Discipline Committee", chair: "Dr. Vikram S. Joshi" },
  { name: "Grievance Redressal Committee", chair: "Dr. Ramesh B. Naik" },
  { name: "Research Committee", chair: "Dr. Anjali V. Kulkarni" },
  { name: "Industry Institute Interaction Cell", chair: "Prof. Anand B. Shenoy" },
  { name: "Placement Committee", chair: "Prof. Nandini D. Shet" },
];

export const placements = [
  { company: "Infosys", offers: 42, role: "Systems Engineer" },
  { company: "TCS", offers: 38, role: "Assistant Systems Engineer" },
  { company: "Wipro", offers: 28, role: "Project Engineer" },
  { company: "L&T Construction", offers: 22, role: "Graduate Engineer Trainee" },
  { company: "Cognizant", offers: 19, role: "Programmer Analyst" },
  { company: "Tech Mahindra", offers: 16, role: "Associate Software Engineer" },
  { company: "Capgemini", offers: 15, role: "Analyst" },
  { company: "Mahindra & Mahindra", offers: 9, role: "GET" },
  { company: "Bosch", offers: 8, role: "Embedded Engineer" },
  { company: "Siemens", offers: 6, role: "Engineering Trainee" },
];

export const studentClubs = [
  { id: "coding", name: "VDIT Coding Club", category: "Technical", deptId: "cse", description: "Weekly competitive-programming meets, open-source contributions and the annual CodeKshatriya hackathon.", advisor: "Mr. Rohan A. Kulkarni", image: "https://images.pexels.com/photos/6208728/pexels-photo-6208728.jpeg?w=900" },
  { id: "ai-club", name: "AI Innovation Club", category: "Technical", deptId: "cse-aiml", description: "Reading group and weekend hack-sessions exploring the latest in machine learning and generative AI.", advisor: "Mr. Arjun B. Hegde", image: "https://images.pexels.com/photos/9243572/pexels-photo-9243572.jpeg?w=900" },
  { id: "ieee-sb", name: "IEEE Student Branch", category: "Technical", deptId: "ece", description: "Affiliated to IEEE Karnataka Section. Hosts technical workshops, competitions and IEEE student paper contests.", advisor: "Prof. Anand B. Shenoy", image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=900&q=80" },
  { id: "emobility", name: "VDIT e-Mobility Club", category: "Technical", deptId: "eee", description: "Designs and races battery-electric vehicles. Active participants in EV-bike conversion projects with KREDL.", advisor: "Prof. Savita V. Patil", image: "https://images.pexels.com/photos/8423416/pexels-photo-8423416.jpeg?w=900" },
  { id: "baja", name: "SAE BAJA Team Trishul", category: "Technical", deptId: "me", description: "Designs single-seat off-road vehicles for the SAE BAJA national championship.", advisor: "Prof. Kiran A. Desai", image: "https://images.unsplash.com/photo-1580130544577-e22c7df3633a?w=900&q=80" },
  { id: "ici", name: "ICI Students' Chapter", category: "Technical", deptId: "civil", description: "Indian Concrete Institute student chapter. Conducts site visits, workshops and the annual concrete-mix competition.", advisor: "Prof. Sandesh M. Patil", image: "https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=900" },
  { id: "nss", name: "VDIT NSS Unit", category: "Outreach", deptId: null, description: "120-strong NSS unit conducting village outreach, blood donation drives and environmental awareness.", advisor: "Faculty Co-ordinator", image: "https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?w=900" },
  { id: "iedc", name: "Innovation & Entrepreneurship Cell (IEDC)", category: "Innovation", deptId: null, description: "Student startup incubator with seed funding, mentorship and pitch days.", advisor: "Dr. Anjali V. Kulkarni", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=80" },
  { id: "cultural", name: "Spandana Cultural Club", category: "Cultural", deptId: null, description: "Music, dance, drama and literary club; organises the annual TANTRAJNANA cultural night.", advisor: "Cultural Coordinator", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=80" },
  { id: "sports", name: "VDIT Sports Club", category: "Sports", deptId: null, description: "Cricket, basketball, volleyball, athletics and indoor games. Multiple VTU-zonal medals.", advisor: "Physical Director", image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=900&q=80" },
];

// Helpers
export const facultyByDept = (deptId) => faculty.filter((f) => f.deptId === deptId);
export const newsByDept = (deptId) => newsItems.filter((n) => n.deptId === deptId);
export const eventsByDept = (deptId) => events.filter((e) => e.deptId === deptId);
export const clubsByDept = (deptId) => studentClubs.filter((c) => c.deptId === deptId);
export const findFaculty = (id) => faculty.find((f) => f.id === id);
export const findDept = (id) => departments.find((d) => d.id === id);
export const findNews = (id) => newsItems.find((n) => n.id === id);
export const findEvent = (id) => events.find((e) => e.id === id);
export const findAnnouncement = (id) => announcements.find((a) => a.id === id);
