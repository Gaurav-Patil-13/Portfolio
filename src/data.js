export const PROFILE = {
  name: "Gaurav Patil",
  email: "gauravofficial4545@gmail.com",
  phone: "+91-9823224151",
  github: "https://github.com/Gaurav-Patil-13",
  instagram: "https://www.instagram.com/gaurav_patil_45_/",
  linkedin: "https://www.linkedin.com/in/gaurav-patil-1729b531a/",
};

export const NAV = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export const SKILLS = [
  { title: "Programming Languages", items: ["C++", "Java", "JavaScript", "SQL"] },
  { title: "Frontend Development", items: ["React.js", "Tailwind CSS"] },
  { title: "Backend Development", items: ["Node.js", "Express.js"] },
  { title: "Databases", items: ["MySQL", "MongoDB"] },
  { title: "Tools & DevOps", items: ["Git", "GitHub", "Docker"] },
  {
    title: "Computer Science Fundamentals",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems"],
  },
];

export const PROJECTS = [
  {
    number: "01",
    name: "WARGAMES",
    tagline: "Linux Learning Platform",
    tech: ["Docker", "React.js", "xterm.js", "Node.js", "Express.js", "PostgreSQL"],
    points: [
      "Multi-level Linux challenge platform with level-specific tasks, automated flag validation, and sequential level progression.",
      "xterm.js integrated with Docker containers for an interactive browser-based Linux terminal with real-time command execution.",
      "Dockerized for easy deployment; played by 250+ users during community events.",
    ],
    stat: "250+",
    statLabel: "players at community events",
    github: "https://github.com/Gaurav-Patil-13/WARGAMES",
    gradient: "linear-gradient(135deg,#1b0524 0%,#3b0a52 55%,#7a2d00 130%)",
  },
  {
    number: "02",
    name: "QuickChat",
    tagline: "Real-Time Messaging Platform",
    tech: ["React", "Node.js", "Express.js", "Socket.io", "MongoDB", "JWT"],
    points: [
      "Full-stack MERN chat app with Socket.IO for instant messaging and persistent delivery.",
      "JWT-based authentication across REST API endpoints to prevent unauthorized access.",
      "Cloudinary integration for real-time image sharing, storing optimized URLs in MongoDB.",
      "MongoDB schemas for users and messages keep chat history and session state consistent across refreshes and re-logins.",
    ],
    stat: "JWT",
    statLabel: "secured REST + Socket.IO",
    github: "https://github.com/Gaurav-Patil-13/Quick-Chat",
    gradient: "linear-gradient(135deg,#06131f 0%,#0e2f5c 55%,#5a1a7a 130%)",
  },
  {
    number: "03",
    name: "Holo-Heri",
    tagline: "3D Heritage Visualization System",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Blender", "Raspberry Pi"],
    points: [
      "Full-stack holographic system to digitally preserve and display Indian heritage with realistic 3D reconstructions and interactive controls.",
      "Web-based Model Viewer integrated with hologram hardware for real-time visualization and interaction.",
      "Digitized 6 heritage artifacts into interactive 3D reconstructions for Smart India Hackathon 2025.",
    ],
    stat: "3D",
    statLabel: "Heritage Visualization",
    github: "https://github.com/Gaurav-Patil-13/HoloHeri",
    gradient: "linear-gradient(135deg,#1f0a02 0%,#6b2a05 55%,#a1007f 130%)",
  },
];

export const PROFILES = [
  { site: "Codeforces", handle: "patilgaurav5634", rating: "1135", url: "https://codeforces.com/profile/patilgaurav5634" },
  { site: "LeetCode", handle: "gauravpatil40", rating: "1618", url: "https://leetcode.com/u/gauravpatil40/" },
  { site: "CodeChef", handle: "patil_gaurav45", rating: "1548", url: "https://www.codechef.com/users/rohit_sharm45" },
  { site: "GeeksforGeeks", handle: "patilgau2nmb", rating: "", url: "https://www.geeksforgeeks.org/profile/patilgau2nmb/" },
];

export const ACHIEVEMENTS = [
  { big: "750+", title: "Problems solved", text: "DSA and competitive programming problems across CodeChef, Codeforces, LeetCode, and GeeksforGeeks." },
  { big: "Finalist", title: "Smart India Hackathon 2025", text: "National Finalist recognition, collaborating in a 6-member team on a holographic heritage visualization system." },
  { big: "2nd", title: "Runner-Up · WCPC March 2024", text: "Secured 2nd Runner-Up at WCPC, an ICPC-style competitive programming contest." },
  { big: "2★", title: "CodeChef rating", text: "Achieved a 2-Star rating through consistent contest participation." },
];

export const EDUCATION = [
  { years: "2023 – 2027", school: "Walchand College of Engineering, Sangli", detail: "B.Tech, Computer Science and Engineering", score: "CGPA: 8/10" },
  { years: "2023", school: "Dr. Chandrabhanu Sonvane Jr. College, Latur", detail: "Senior Secondary", score: "82.17%" },
  { years: "2021", school: "Shri Deshikendra Vidayala Highschool, Latur", detail: "Matriculation", score: "89.40%" },
];
