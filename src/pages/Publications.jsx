import { FaFire } from "react-icons/fa";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Button } from "../components/ui/Button";
import { RubberStamp } from "../components/ui/ScrapbookQuirks";
import { BlogCharm } from "../components/ui/BlogCharm";
import { PeekingRobot } from "../components/ui/PeekingRobot";

const sampleMagazines = [
  {
    title: "Tejas Vol 4.1",
    smallDescription:
      "We proudly present AI tools, frameworks, and insights redefining the future!",
    bookLink: "https://online.pubhtml5.com/eqdgd/rjrs/",
    image: {
      fileName: "TejadVol41.jpg",
      url: "https://res.cloudinary.com/df9us90ur/image/upload/v1729399795/TejasVol4.1.jpg",
    },
    views: 0,
    optionDate: 2023,
    latest: "yes",
  },
  {
    title: "Tejas Vol 3.2",
    smallDescription:
      "Unveiling our latest edition on AI in industries and automation!",
    bookLink: "https://pubhtml5.com/hiwar/bcxj/",
    image: {
      fileName: "TejadVol32.jpg",
      url: "https://res.cloudinary.com/df9us90ur/image/upload/v1729399795/TejasVol3.2.jpg",
    },
    views: 0,
    optionDate: 2023,
    latest: "yes",
  },
  {
    title: "Tejas Vol 3.1",
    smallDescription:
      "We leverage cutting-edge technology to implement seamlessly.",
    bookLink: "https://pubhtml5.com/hiwar/vfrp/",
    image: {
      fileName: "TejadVol31.jpg",
      url: "https://res.cloudinary.com/df9us90ur/image/upload/v1728923748/TejasVol3.1.avif",
    },
    views: 0,
    optionDate: 2023,
  },
  {
    title: "Tejas Vol 2",
    smallDescription: "Next, our team of experts develops tailored solutions.",
    bookLink: "https://pubhtml5.com/hiwar/uqpn/",
    image: {
      fileName: "TejadVol2.jpg",
      url: "https://res.cloudinary.com/df9us90ur/image/upload/v1728923716/TejasVol2.avif",
    },
    views: 0,
    optionDate: 2023,
  },
  {
    title: "Tejas Vol 1",
    smallDescription:
      "We start by gaining a deep understanding of your business goals.",
    bookLink: "https://online.pubhtml5.com/hiwar/abef/",
    image: {
      fileName: "TejadVol1.jpg",
      url: "https://res.cloudinary.com/df9us90ur/image/upload/v1728923642/TejasVol1.avif",
    },
    views: 0,
    optionDate: 2023,
  },
];

export default function Publications() {
  return (
    <div className="space-y-10 bg-paper-grid min-h-screen pb-12">
      <SectionHeader
        title="PUBLICATIONS & TEJAS"
        subtitle="Explore our flagship technical magazines, AI research, and student-written editions."
        badgeText="MAGAZINES"
        color="bg-retroPurple"
      />

      {/* Grid of Magazines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleMagazines.map((mag, index) => {
          const publicationCharmType =
            mag.latest === "yes"
              ? "sparkles"
              : index % 2 === 0
                ? "book"
                : "trend";

          const publicationCharmColor =
            mag.latest === "yes"
              ? "bg-retroYellow"
              : index % 2 === 0
                ? "bg-retroOrange"
                : "bg-retroBlue";

          return (
            <div
              key={index}
              className="border-3 border-black rounded-2xl p-4 shadow-brutal-lg bg-white flex flex-col justify-between"
            >
              <div>
                {/* Cover Image Container */}
                <div className="relative border-2 border-black rounded-xl overflow-hidden mb-4 h-64 bg-gray-100">
                  <div className="relative border-2 border-black rounded-xl overflow-hidden mb-4 h-64 bg-gray-100 group">
                    <BlogCharm
                      type={publicationCharmType}
                      color={publicationCharmColor}
                    />

                    <img
                      src={mag.image.url}
                      alt={mag.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-1"
                    />
                    {/* Shimmer Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>

                  {/* Year Badge */}
                  <span className="absolute top-2 left-2 font-black text-xs px-2.5 py-1 bg-white border-2 border-black rounded-md shadow-brutal select-none">
                    {mag.optionDate}
                  </span>

                  {/* Latest Volume Sticker Badge */}
                  {mag.latest === "yes" && (
                    <span className="absolute top-2 right-2 font-black text-xs px-2.5 py-1 bg-retroYellow border-2 border-black rounded-md shadow-brutal uppercase select-none">
                      LATEST ISSUE
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="font-black text-2xl text-black leading-tight mb-2">
                  {mag.title}
                </h3>
                <p className="font-bold text-xs text-gray-600 leading-relaxed mb-4">
                  {mag.smallDescription}
                </p>
              </div>

              {/* Read Flipbook Button */}
              <div className="pt-3 border-t-2 border-black">
                <a
                  href={mag.bookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="pink"
                    size="sm"
                    className="w-full justify-center"
                  >
                    Read Flipbook ↗
                  </Button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
