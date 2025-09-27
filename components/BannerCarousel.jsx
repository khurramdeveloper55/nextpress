import Image from "next/image";
import BannerCarouselClient from "./BannerCarouselClient";

const slides = [
  {
    id: 1,
    title: "Travel",
    desc: "A journey into breathtaking destinations, hidden gems, and cultural wonders. Discover tips, stories, and guides to inspire your next adventure across the globe.",
    img: "/img/thumbs-1.jpg",
    thumb: "/img/thumbs-pagi-1.jpg",
  },
  {
    id: 2,
    title: "Fashion & Styles",
    desc: "A curated collection of fashion inspiration, beauty tutorials, and lifestyle recommendations. Explore the world of fashion through our eyes, from runway trends to everyday style.",
    img: "/img/thumbs-2.jpg",
    thumb: "/img/thumbs-pagi-2.jpg",
  },
  {
    id: 3,
    title: "Technology",
    desc: "Your guide to the latest innovations, tools, and digital trends shaping the modern world. From gadgets to software, explore how technology transforms everyday life.",
    img: "/img/thumbs-3.jpg",
    thumb: "/img/thumbs-pagi-3.jpg",
  },
  {
    id: 4,
    title: "Relationships",
    desc: "Insights into love, family, and friendships with practical advice and heartfelt stories. Explore ways to nurture meaningful connections and strengthen the bonds that matter most.",
    img: "/img/thumbs-4.jpg",
    thumb: "/img/thumbs-pagi-4.jpg",
  },
  {
    id: 5,
    title: "Design",
    desc: "A showcase of creativity, innovation, and aesthetics across interiors, graphics, and lifestyle. Find ideas, trends, and tips to bring beauty and function into every space.",
    img: "/img/thumbs-5.jpg",
    thumb: "/img/thumbs-pagi-5.jpg",
  },
];

export default function BannerCarouselServer() {
  return (
    <div className="relative w-full mx-auto pt-8 border-t-1 mt-6">
      <div className="hidden relative overflow-hidden rounded-lg h-[550px]">
        <Image
          src={slides[0].img}
          alt={slides[0].title}
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white text-center z-10">
          <h2 className="text-[32px] md:text-[40px] font-bold mt-4 leading-snug max-w-3xl">
            {slides[0].title}
          </h2>
          <p className="mt-3 max-w-2xl">{slides[0].desc}</p>
        </div>
      </div>

      {/* Client-side interactive carousel */}
      <BannerCarouselClient slides={slides} />
    </div>
  );
}
