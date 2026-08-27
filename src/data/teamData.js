// src/data/teamData.js

// Default Fallback
import defaultPlaceholderImg from "../assets/placeholder-user.png";

// Faculty Images
import drShiwaniImg from "../assets/dr_shiwani_gupta.jpg.jpeg";
import mrsPranjaliImg from "../assets/mrs_pranjali_sankhe.jpg.jpeg";

// Core Team Images
import pranavImg from "../assets/Pranav.jpg";
import vipulImg from "../assets/Vipul.jpg";
import adityaImg from "../assets/Aditya.jpg";
import mahekImg from "../assets/MahekChaplot.jpg";
import riyaImg from "../assets/Riya.png";
import sanjanaImg from "../assets/sanjana.jpg";
import sitanshuImg from "../assets/Sitanshu.jpg";
import pranjalImg from "../assets/Pranjal.jpg";
import harshiniImg from "../assets/harshini.jpg";
import shubhamImg from "../assets/Shubham.jpg";

// Junior Core Team Images
import vaishnaviImg from "../assets/Vaishnavi.jpg";
import preetImg from "../assets/Preet.jpg";
import anamikaImg from "../assets/anamika.jpg";
import yashImg from "../assets/yash.jpg";
import jeniImg from "../assets/JENI.jpg";
import siddhiImg from "../assets/siddhi.jpg";

/*
  Accent system — pulled straight from index.css's @theme tokens:
  retroOrange, retroLime, retroCitrus, retroSky (retroNavy skipped as a fill
  since it's too dark for black text). Each member stores BOTH the literal
  bg-* and border-* class names (not built dynamically) so Tailwind's
  content scanner can actually find and generate them.
*/

export const facultyMembers = [
  {
    id: "dr-shiwani-gupta",
    name: "Dr. Shiwani Gupta",
    position: "Faculty Sponsor",
    badgeTag: "FACULTY SPONSOR",
    accent: "bg-retroOrange",
    accentBorder: "border-retroOrange",
    bio: "Guiding TCET ACM SIGAI with vision, fostering research initiatives, and mentoring student cohorts in AI/ML advancements.",
    linkedin: "https://www.linkedin.com/in/dr-shiwani-gupta-28405018/",
    img: drShiwaniImg,
  },
  {
    id: "mrs-pranjali-sankhe",
    name: "Mrs. Pranjali Sankhe",
    position: "Assistant Professor",
    badgeTag: "FACULTY IN-CHARGE",
    accent: "bg-retroSky",
    accentBorder: "border-retroSky",
    bio: "Supporting student project development, technical symposiums, and promoting academic excellence across domain activities.",
    linkedin: "https://www.linkedin.com/in/pranjali-sankhe-955613134/",
    img: mrsPranjaliImg,
  },
];

export const coreTeam = [
  {
    name: "Pranav Vishwakarma",
    position: "Chairperson",
    accent: "bg-retroOrange",
    accentBorder: "border-retroOrange",
    badgeTag: "CORE",
    bio: "Leading overall chapter operations, aligning team initiatives, and building strategic tech opportunities for students.",
    linkedin: "https://www.linkedin.com/in/pranav-vishwakarma/",
    github: "https://github.com/",
    img: pranavImg,
  },
  {
    name: "Vipul Choudhari",
    position: "Vice Chairperson",
    accent: "bg-retroLime",
    accentBorder: "border-retroLime",
    badgeTag: "CORE",
    bio: "Overseeing internal team execution, program workflows, and driving high-impact technical initiatives across teams.",
    linkedin: "https://www.linkedin.com/in/vipul-choudhari/",
    github: "https://github.com/",
    img: vipulImg,
  },
  {
    name: "Aditya Pandey",
    position: "Secretary",
    accent: "bg-retroCitrus",
    accentBorder: "border-retroCitrus",
    badgeTag: "CORE",
    bio: "Managing chapter documentation, operational communication, and cross-team execution rhythm.",
    linkedin: "https://www.linkedin.com/in/aditya-pandey/",
    github: "https://github.com/",
    img: adityaImg,
  },
  {
    name: "Mahek Chaplot",
    position: "Treasurer",
    accent: "bg-retroSky",
    accentBorder: "border-retroSky",
    badgeTag: "CORE",
    bio: "Handling financial planning, event budgeting, resource allocation, and overall chapter accounts transparently.",
    linkedin: "https://www.linkedin.com/in/mahek-chaplot/",
    github: "https://github.com/",
    img: mahekImg,
  },
  {
    name: "Riya Yadav",
    position: "Event Manager",
    accent: "bg-retroOrange",
    accentBorder: "border-retroOrange",
    badgeTag: "CORE",
    bio: "Designing, scheduling, and executing engaging technical workshops, hackathons, and speaker sessions.",
    linkedin: "https://www.linkedin.com/in/riya-yadav/",
    github: "https://github.com/",
    img: riyaImg,
  },
  {
    name: "Sanjana Dubey",
    position: "Creative Head",
    accent: "bg-retroLime",
    accentBorder: "border-retroLime",
    badgeTag: "CORE",
    bio: "Leading visual identity, design guidelines, UI/UX aesthetics, and creative branding across event campaigns.",
    linkedin: "https://www.linkedin.com/in/sanjana-dubey/",
    github: "https://github.com/",
    img: sanjanaImg,
  },
  {
    name: "Sitanshu Gupta",
    position: "PR Head",
    accent: "bg-retroCitrus",
    accentBorder: "border-retroCitrus",
    badgeTag: "CORE",
    bio: "Driving public relations, social media outreach, and community engagement to expand the chapter footprint.",
    linkedin: "https://www.linkedin.com/in/sitanshu-gupta/",
    github: "https://github.com/",
    img: sitanshuImg,
  },
  {
    name: "Pranjal Sawant",
    position: "Spons Head",
    accent: "bg-retroSky",
    accentBorder: "border-retroSky",
    badgeTag: "CORE",
    bio: "Establishing strategic industry sponsorships, corporate outreach, and venue/event funding partnerships.",
    linkedin: "https://www.linkedin.com/in/pranjal-sawant/",
    github: "https://github.com/",
    img: pranjalImg,
  },
  {
    name: "Harshini Mishal",
    position: "Technical Head",
    accent: "bg-retroOrange",
    accentBorder: "border-retroOrange",
    badgeTag: "CORE",
    bio: "Architecting technical projects, code labs, machine learning research, and overseeing technical workshops.",
    linkedin: "https://www.linkedin.com/in/harshini-mishal/",
    github: "https://github.com/",
    img: harshiniImg,
  },
  {
    name: "Shubham Prajapati",
    position: "Webmaster",
    accent: "bg-retroLime",
    accentBorder: "border-retroLime",
    badgeTag: "CORE",
    bio: "Developing and maintaining web systems, project portals, and front-end architectures for the chapter.",
    linkedin: "https://www.linkedin.com/in/shubham-prajapati/",
    github: "https://github.com/",
    img: shubhamImg,
  },
];

export const juniorCoreTeam = [
  {
    name: "Anamika Yadav",
    position: "JT Creative Head",
    accent: "bg-retroCitrus",
    accentBorder: "border-retroCitrus",
    badgeTag: "JT CORE",
    bio: "Supporting graphic design asset creation, poster layouts, and social media collateral.",
    linkedin: "https://www.linkedin.com/in/anamika-yadav/",
    github: "https://github.com/",
    img: anamikaImg,
  },
  {
    name: "Siddhi Pandey",
    position: "JT Technical Head",
    accent: "bg-retroSky",
    accentBorder: "border-retroSky",
    badgeTag: "JT CORE",
    bio: "Assisting in technical content curation, coding challenges, and web feature updates.",
    linkedin: "https://www.linkedin.com/in/siddhi-pandey/",
    github: "https://github.com/",
    img: siddhiImg,
  },
  {
    name: "Vaishnavi Nayak",
    position: "JT Secretary",
    accent: "bg-retroOrange",
    accentBorder: "border-retroOrange",
    badgeTag: "JT CORE",
    bio: "Assisting in chapter records, administrative scheduling, and inter-team operational coordination.",
    linkedin: "https://www.linkedin.com/in/vaishnavi-nayak/",
    github: "https://github.com/",
    img: vaishnaviImg,
  },
  {
    name: "Preet Kothari",
    position: "JT Event Manager",
    accent: "bg-retroLime",
    accentBorder: "border-retroLime",
    badgeTag: "JT CORE",
    bio: "Assisting in venue management, event logistics, timeline monitoring, and delegate support.",
    linkedin: "https://www.linkedin.com/in/preet-kothari/",
    github: "https://github.com/",
    img: preetImg,
  },
  {
    name: "Yash Oza",
    position: "JT PR & Spons Head",
    accent: "bg-retroCitrus",
    accentBorder: "border-retroCitrus",
    badgeTag: "JT CORE",
    bio: "Helping manage sponsor leads, brand communications, and promotional campaigns across campuses.",
    linkedin: "https://www.linkedin.com/in/yash-oza/",
    github: "https://github.com/",
    img: yashImg,
  },
  {
    name: "Jeni Shah",
    position: "Inhouse Head",
    accent: "bg-retroSky",
    accentBorder: "border-retroSky",
    badgeTag: "JT CORE",
    bio: "Coordinating internal team communications, session execution, and internal operations smooth flow.",
    linkedin: "https://www.linkedin.com/in/jeni-shah/",
    github: "https://github.com/",
    img: jeniImg,
  },
];

export function getMemberImage(member) {
  return member.img || defaultPlaceholderImg;
}
