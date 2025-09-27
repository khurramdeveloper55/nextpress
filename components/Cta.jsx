import Link from "next/link";

export default function Cta() {
  return (
    <div className="text-center pt-20 pb-16">
      <h1
        className="
    text-6xl mb-4 
    leading-[1.2]            
    xl:text-6xl xl:leading-[1.2] 
    lg:text-5xl lg:leading-[1.3] 
    md:text-4xl md:leading-[1.4] 
    sm:text-3xl sm:leading-[1.4]
  "
      >
        Want to be an{" "}
        <i>
          <b>Inspiring Author ?</b>
        </i>{" "}
        Join Us!
      </h1>

      <p className="text-neutral-500 mb-10">
        Share your ideas with the world. Inspire readers with your stories.{" "}
        <br />
        Start your journey with us today!
      </p>
      <Link href="#">
        <button className="px-10 py-4 text-lg cursor-pointer font-semibold rounded-full bg-black text-white border border-black hover:bg-white hover:text-black transition-all duration-300 shadow-md">
          Become an Author
        </button>
      </Link>
    </div>
  );
}
