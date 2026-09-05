// ACM Bytes — Bite-sized AI snippets, news flashes & quick reads
// Curated by ACM SIGAI TCET

export const acmBytesData = [
  {
    id: "byte-1",
    title: "GPT-4o Can Now See, Hear & Speak in Real Time",
    category: "LLMs & Agents",
    emoji: "🤖",
    date: "May 2024",
    readTime: "1 min",
    summary:
      "OpenAI's GPT-4o (Omni) is natively multimodal — it can process text, audio, and images in a single end-to-end model, enabling real-time voice conversations with near-human latency.",
    tags: ["OpenAI", "Multimodal", "GPT-4o"],
    color: "bg-retroOrange",
  },
  {
    id: "byte-2",
    title: "Google DeepMind's AlphaFold 3 Predicts All Molecules of Life",
    category: "Research",
    emoji: "🧬",
    date: "May 2024",
    readTime: "2 min",
    summary:
      "AlphaFold 3 extends protein structure prediction to DNA, RNA, and small molecules — a major leap that could revolutionize drug discovery and biotech.",
    tags: ["DeepMind", "AlphaFold", "Biology"],
    color: "bg-retroLime",
  },
  {
    id: "byte-3",
    title: "Deepfakes Are Now Indistinguishable to the Human Eye — Study Finds",
    category: "Ethics & Safety",
    emoji: "🎭",
    date: "March 2024",
    readTime: "1 min",
    summary:
      "A Nature study found that humans correctly identify AI-generated faces only 48.2% of the time — barely better than random chance. Media literacy has never been more critical.",
    tags: ["Deepfake", "Ethics", "Media"],
    color: "bg-retroPink",
  },
  {
    id: "byte-4",
    title: "India's AIRAWAT: Among Asia's Top AI Supercomputers",
    category: "Infrastructure",
    emoji: "🇮🇳",
    date: "2024",
    readTime: "1 min",
    summary:
      "India's AIRAWAT supercomputer, part of the National AI Mission, offers 100+ petaflops of AI compute — putting India on the global AI infrastructure map.",
    tags: ["India", "Supercomputing", "AIRAWAT"],
    color: "bg-retroSky",
  },
  {
    id: "byte-5",
    title: "Sora: OpenAI's Text-to-Video Model Can Generate 60-Second Clips",
    category: "Generative AI",
    emoji: "🎬",
    date: "February 2024",
    readTime: "1 min",
    summary:
      "Sora can generate realistic and imaginative scenes from text prompts up to 60 seconds long, with consistent characters and detailed backgrounds — a new frontier in generative video.",
    tags: ["OpenAI", "Sora", "Video Generation"],
    color: "bg-retroCitrus",
  },
  {
    id: "byte-6",
    title: "Claude 3 Opus Beats GPT-4 on Key Benchmarks",
    category: "LLMs & Agents",
    emoji: "⚡",
    date: "March 2024",
    readTime: "1 min",
    summary:
      "Anthropic's Claude 3 Opus outperformed GPT-4 on graduate-level reasoning (GPQA), math (MATH), and coding (HumanEval), marking a major shift in the LLM leaderboard.",
    tags: ["Anthropic", "Claude", "Benchmarks"],
    color: "bg-retroYellow",
  },
  {
    id: "byte-7",
    title: "AI Agents Are Now Browsing the Web & Writing Code Autonomously",
    category: "LLMs & Agents",
    emoji: "🕷️",
    date: "2024",
    readTime: "2 min",
    summary:
      "Agentic AI frameworks like AutoGPT, LangChain Agents, and OpenAI's Assistants API allow LLMs to autonomously browse, code, search, and complete multi-step tasks without human intervention.",
    tags: ["Agents", "Automation", "LangChain"],
    color: "bg-retroOrange",
  },
  {
    id: "byte-8",
    title: "Mistral 7B: Small Model, Big Performance",
    category: "Open Source AI",
    emoji: "🌬️",
    date: "October 2023",
    readTime: "1 min",
    summary:
      "Mistral AI's 7B parameter model outperforms LLaMA 2 13B on every benchmark — proving that efficient architecture beats raw scale. It's fully open-source.",
    tags: ["Mistral", "Open Source", "Efficiency"],
    color: "bg-retroLime",
  },
  {
    id: "byte-9",
    title: "The EU AI Act: World's First Comprehensive AI Law",
    category: "Ethics & Safety",
    emoji: "⚖️",
    date: "March 2024",
    readTime: "2 min",
    summary:
      "The EU AI Act classifies AI systems by risk — banning unacceptable-risk AI and imposing strict rules on high-risk systems like facial recognition and hiring tools.",
    tags: ["EU", "Regulation", "Policy"],
    color: "bg-retroPink",
  },
  {
    id: "byte-10",
    title: "Diffusion Models 101: How Stable Diffusion Creates Images",
    category: "Computer Vision",
    emoji: "🖼️",
    date: "2023",
    readTime: "3 min",
    summary:
      "Diffusion models work by adding noise to training images and learning to reverse that process. At inference time, they start from pure noise and iteratively 'denoise' to generate stunning images from text prompts.",
    tags: ["Diffusion", "Stable Diffusion", "Generative AI"],
    color: "bg-retroSky",
  },
  {
    id: "byte-11",
    title: "Retrieval-Augmented Generation (RAG) in 60 Seconds",
    category: "LLMs & Agents",
    emoji: "📚",
    date: "2024",
    readTime: "1 min",
    summary:
      "RAG combines a vector database with an LLM — the model retrieves relevant documents before answering, dramatically improving factual accuracy without retraining the entire model.",
    tags: ["RAG", "Vector DB", "LLM"],
    color: "bg-retroCitrus",
  },
  {
    id: "byte-12",
    title: "TCET ACM SIGAI Hosts AI Crime Lab: India's First Deepfake Detection Event",
    category: "SIGAI Updates",
    emoji: "🔍",
    date: "July 2026",
    readTime: "1 min",
    summary:
      "ACM SIGAI TCET organized a first-of-its-kind AI Crime Lab event where students used forensic reasoning to detect deepfakes, AI-generated images, and synthetic audio — blending tech skills with digital ethics.",
    tags: ["SIGAI", "Event", "Deepfake"],
    color: "bg-retroOrange",
  },
];

export const BYTE_CATEGORIES = [
  "ALL",
  "LLMs & Agents",
  "Research",
  "Ethics & Safety",
  "Infrastructure",
  "Generative AI",
  "Open Source AI",
  "Computer Vision",
  "SIGAI Updates",
];

export const CATEGORY_COLORS = {
  "LLMs & Agents": "bg-retroOrange text-black",
  Research: "bg-retroLime text-black",
  "Ethics & Safety": "bg-retroPink text-black",
  Infrastructure: "bg-retroSky text-black",
  "Generative AI": "bg-retroCitrus text-black",
  "Open Source AI": "bg-retroLime text-black",
  "Computer Vision": "bg-retroSky text-black",
  "SIGAI Updates": "bg-retroOrange text-black",
};
