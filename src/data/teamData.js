import defaultPlaceholderImg from "../assets/placeholder-user.png";
import drShiwaniImg from "../assets/dr_shiwani_gupta.jpg.jpeg";
import mrsPranjaliImg from "../assets/mrs_pranjali_sankhe.jpg.jpeg";

// Maps each accent/badge Tailwind class to its real hex value so it can be
// handed to the CSS custom property that drives the running border.
export const ACCENT_HEX = {
  "bg-retroYellow": "#fcd34d",
  "bg-retroOrange": "#ff70a6",
  "bg-retroBlue": "#70d6ff",
  "bg-retroGreen": "#38b000",
};

// Resolves the profile image for a member: use their imported photo if one
// was provided, otherwise fall back to the shared default placeholder.
export function getMemberImage(member) {
  return member.img || defaultPlaceholderImg;
}

export const facultyMembers = [
  {
    id: "shiwani",
    label: "Faculty Sponsor",
    name: "Dr. Shiwani Gupta",
    position: "HOD of Department",
    badgeBg: "bg-retroYellow",
    tag: "FACULTY_01",
    description:
      "Leading the Department of Computer Engineering with a vision for cutting-edge AI research, innovation, and empowering students to pioneer advancements in Machine Learning and Intelligent Systems.",
    linkedin: "https://www.linkedin.com/in/dr-shiwani-gupta-9b731a53/",
    img: drShiwaniImg,
  },
  {
    id: "pranjali",
    label: "Faculty In-Charge",
    name: "Pranjali Sankhe",
    position: "Assistant Professor",
    badgeBg: "bg-retroBlue",
    tag: "FACULTY_02",
    description:
      "Guiding TCET ACM SIGAI with dedication, mentoring student cohorts in AI/ML project development, technical symposiums, and fostering research-driven academic excellence.",
    linkedin: "https://www.linkedin.com/in/pranjali-sankhe-5421aa160/",
    img: mrsPranjaliImg,
  },
];

export const coreTeam = [
  {
    name: "Pranav Vishwakarma",
    position: "Chairperson",
    accent: "bg-retroYellow",
    badgeTag: "CORE",
    bio: "Directing ACM SIGAI operations, fostering research culture, and establishing strategic industry-academic initiatives.",
    linkedin: "https://www.linkedin.com/in/pranav-vishwakarma25/",
  },
  {
    name: "Vipul Choudhari",
    position: "Vice Chairperson",
    accent: "bg-retroBlue",
    badgeTag: "CORE",
    bio: "Managing chapter logistics, cross-departmental coordination, and driving student engagement in AI projects.",
    linkedin: "#",
  },
  {
    name: "Aditya Pandey",
    position: "Secretary",
    accent: "bg-retroOrange",
    badgeTag: "SEC",
    bio: "Handling official communications, administrative documentation, and managing overall SIGAI workflow.",
    linkedin: "#",
  },
  {
    name: "Mahek Chaplot",
    position: "Treasurer",
    accent: "bg-retroGreen",
    badgeTag: "CORE",
    bio: "Overseeing financial planning, resource management, and budgeting for events, hackathons, and research projects.",
    linkedin: "#",
  },
  {
    name: "Riya Yadav",
    position: "Event Manager",
    accent: "bg-retroYellow",
    badgeTag: "EVENTS",
    bio: "Designing and executing flagship tech summits, ML workshops, hackathons, and interactive AI coding sprees.",
    linkedin: "#",
  },
  {
    name: "Harshini Mishal",
    position: "Technical Head",
    accent: "bg-retroBlue",
    badgeTag: "TECH",
    bio: "Architecting technical roadmaps, curating coding bootcamps, and leading AI/ML project implementations.",
    linkedin: "#",
  },
  {
    name: "Sanjana Dubey",
    position: "Creative Head",
    accent: "bg-retroOrange",
    badgeTag: "CREATIVE",
    bio: "Crafting neo-brutalist visual identities, event graphics, UI/UX layouts, and editorial media assets.",
    linkedin: "#",
  },
  {
    name: "Sitanshu Gupta",
    position: "PR Head",
    accent: "bg-retroGreen",
    badgeTag: "PUBLIC RELATIONS",
    bio: "Directing public relations, managing media campaigns, and strengthening SIGAI's community footprint.",
    linkedin: "#",
  },
  {
    name: "Pranjal Sawant",
    position: "Spons",
    accent: "bg-retroYellow",
    badgeTag: "SPONSORSHIP",
    bio: "Building industry alliances, securing corporate sponsorships, and expanding partner opportunities for SIGAI.",
    linkedin: "#",
  },
  {
    name: "Shubham Prajapati",
    position: "TECH",
    accent: "bg-retroBlue",
    badgeTag: "WEBMASTER",
    bio: "Engineering web infrastructure, building interactive platforms, and maintaining digital assets.",
    linkedin: "#",
  },
];

export const juniorCoreTeam = [
  {
    name: "Anamika Yadav",
    position: "JT Creative Head",
    accent: "bg-retroGreen",
    tag: "CREATIVE",
    bio: "Designing promotional posters, editorial banners, and social media branding.",
    linkedin: "#",
  },
  {
    name: "Siddhi Pandey",
    position: "JT Technical Head",
    accent: "bg-retroBlue",
    tag: "TECH",
    bio: "Assisting technical workshops, repository management, and ML algorithm prototypes.",
    linkedin: "#",
  },
  {
    name: "Jeni Shah",
    position: "Inhouse Head",
    accent: "bg-retroOrange",
    tag: "INHOUSE",
    bio: "Coordinating internal team dynamics, managing venue logistics, and ensuring seamless event operations.",
    linkedin: "#",
  },

  {
    name: "Vaishnavi Nayak",
    position: "JT Secretary",
    accent: "bg-retroOrange",
    tag: "SEC",
    bio: "Supporting administrative scheduling, documentation, and internal team syncs.",
    linkedin: "#",
  },
  {
    name: "Yash Oza",
    position: "JT PR & Spons Head",
    accent: "bg-retroYellow",
    tag: "PR & SPONS",
    bio: "Assisting sponsorship deck curation, public outreach, and partner networking.",
    linkedin: "#",
  },

  {
    name: "Preet Kothari",
    position: "JT Event Manager",
    accent: "bg-retroBlue",
    tag: "EVENTS",
    bio: "Assisting in venue management, participant coordination, and event execution.",
    linkedin: "#",
  },
];
