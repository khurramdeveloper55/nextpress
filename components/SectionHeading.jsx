import { ChevronRight } from "lucide-react";

export default function SectionHeading({ title, link }) {
  return (
    <div className="flex flex-row justify-between items-center border rounded-sm p-4 my-4 gap-2 sm:gap-0">
      <h3 className="text-base sm:text-xl font-semibold">{title}</h3>
      <h3 className="flex items-center gap-2 text-sm sm:text-xl font-semibold text-gray-800 cursor-pointer hover:text-black transition">
        {link}
        <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
      </h3>
    </div>
  );
}
