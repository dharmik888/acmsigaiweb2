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
    bio: "“Empowering minds to transform knowledge into meaningful innovation.”",
    linkedin: "https://www.linkedin.com/in/dr-shiwani-gupta-9b731a53/",
    img: drShiwaniImg,
  },
  {
    id: "mrs-pranjali-sankhe",
    name: "Mrs. Pranjali Sankhe",
    position: "Assistant Professor",
    badgeTag: "FACULTY IN-CHARGE",
    accent: "bg-retroSky",
    accentBorder: "border-retroSky",
    bio: "“Guiding ideas with purpose, discipline, and a vision for progress.”",
    linkedin: "https://www.linkedin.com/in/pranjali-sankhe-5421aa160/",
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
    bio: "“Lead with vision, inspire with action, create lasting impact.”",
    linkedin: "https://www.linkedin.com/in/pranav-vishwakarma25/",
    github: "https://github.com/",
    img: pranavImg,
  },
  {
    name: "Vipul Choudhari",
    position: "Vice Chairperson",
    accent: "bg-retroLime",
    accentBorder: "border-retroLime",
    badgeTag: "CORE",
    bio: "“Leadership is turning shared ambition into collective achievement.”",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    img: vipulImg,
  },
  {
    name: "Aditya Pandey",
    position: "Secretary",
    accent: "bg-retroCitrus",
    accentBorder: "border-retroCitrus",
    badgeTag: "CORE",
    bio: "“Clarity in communication, consistency in action.”",
    linkedin: "https://www.linkedin.com/in/aditya-pandey-aiml/",
    github: "https://github.com/",
    img: adityaImg,
  },
  {
    name: "Mahek Chaplot",
    position: "Treasurer",
    accent: "bg-retroSky",
    accentBorder: "border-retroSky",
    badgeTag: "CORE",
    bio: "“Every great vision grows stronger with thoughtful management.”",
    linkedin: "https://www.linkedin.com/in/mahek-chaplot-175938371/",
    github: "https://github.com/",
    img: mahekImg,
  },
  {
    name: "Riya Yadav",
    position: "Event Manager",
    accent: "bg-retroOrange",
    accentBorder: "border-retroOrange",
    badgeTag: "CORE",
    bio: "“Great experiences begin with ideas and succeed through execution.”",
    linkedin: "https://www.linkedin.com/in/riya-b98086343/",
    github: "https://github.com/",
    img: riyaImg,
  },
  {
    name: "Sanjana Dubey",
    position: "Creative Head",
    accent: "bg-retroLime",
    accentBorder: "border-retroLime",
    badgeTag: "CORE",
    bio: "“Creativity is intelligence given the freedom to imagine.”",
    linkedin: "https://www.linkedin.com/in/sanjana-dubey-b9451b352/",
    github: "https://github.com/",
    img: sanjanaImg,
  },
  {
    name: "Sitanshu Gupta",
    position: "PR Head",
    accent: "bg-retroCitrus",
    accentBorder: "border-retroCitrus",
    badgeTag: "CORE",
    bio: "“Build connections, tell stories, create influence.”",
    linkedin: "https://www.linkedin.com/in/sitanshu-gupta-814151271/",
    github: "https://github.com/",
    img: sitanshuImg,
  },
  {
    name: "Pranjal Sawant",
    position: "Spons Head",
    accent: "bg-retroSky",
    accentBorder: "border-retroSky",
    badgeTag: "CORE",
    bio: "“Creating opportunities through connections that matter.”",
    linkedin: "https://www.linkedin.com/in/pranjal-sawant-4421a0376/",
    github: "https://github.com/",
    img: pranjalImg,
  },
  {
    name: "Harshini Mishal",
    position: "Technical Head",
    accent: "bg-retroOrange",
    accentBorder: "border-retroOrange",
    badgeTag: "CORE",
    bio: "“Hard work beats talent. Consistency builds excellence.”",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    img: harshiniImg,
  },
  {
    name: "Shubham Prajapati",
    position: "Webmaster",
    accent: "bg-retroLime",
    accentBorder: "border-retroLime",
    badgeTag: "CORE",
    bio: "“Where logic meets creativity, remarkable experiences emerge.”",
    linkedin: "https://www.linkedin.com/in/shubham-prajapati-a71801372/",
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
    bio: "“Turn imagination into something people remember.”",
    linkedin: "https://www.linkedin.com/in/anamika-yadav-3a500022b/",
    github: "https://github.com/",
    img: anamikaImg,
  },
  {
    name: "Siddhi Pandey",
    position: "JT Technical Head",
    accent: "bg-retroSky",
    accentBorder: "border-retroSky",
    badgeTag: "JT CORE",
    bio: "“Learn relentlessly, experiment fearlessly, build intelligently.”",
    linkedin: "https://www.linkedin.com/in/siddhi-pandey-a234b6380/",
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
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    img: vaishnaviImg,
  },
  {
    name: "Preet Kothari",
    position: "JT Event Manager",
    accent: "bg-retroLime",
    accentBorder: "border-retroLime",
    badgeTag: "JT CORE",
    bio: "“Plan with purpose, execute with precision.”",
    linkedin: "https://www.linkedin.com/",
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
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    img: yashImg,
  },
  {
    name: "Jeni Shah",
    position: "Inhouse Head",
    accent: "bg-retroSky",
    accentBorder: "border-retroSky",
    badgeTag: "JT CORE",
    bio: "“Strong teams are built through collaboration, trust, and shared purpose.”",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    img: jeniImg,
  },
];

export function getMemberImage(member) {
  return member.img || defaultPlaceholderImg;
}
