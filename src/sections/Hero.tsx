
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[520px] sm:min-h-[580px] md:min-h-[680px] flex items-center overflow-hidden"
    >

      {/* Background Image */}
      <img
        src="/images/christmas-hero.jpg"
        alt="Monicakes Christmas Collection"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-16 py-16 md:py-20">

        <div className="max-w-2xl text-white">

          <p className="text-[#D9B66F] text-[10px] sm:text-xs md:text-sm tracking-[0.25em] md:tracking-[0.35em] uppercase mb-5 md:mb-6">
            The Most Wonderful Time of The Year
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight mb-5 md:mb-6">
            Make Your
            <br />
            Christmas
            <br />
            <span className="italic text-[#E5C98D]">
              Sweeter
            </span>
          </h1>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-lg mb-7 md:mb-9">
            Celebrate the magic of Christmas with our
            homemade cookies, delicious cakes, delightful
            puddings and beautifully crafted hampers.
          </p>

          <a
            href="#cookies"
            className="inline-flex items-center justify-center gap-3 bg-[#811E2B] hover:bg-[#A12B3A] text-white px-7 sm:px-10 md:px-12 py-3.5 md:py-4 text-[10px] sm:text-xs tracking-[0.15em] md:tracking-[0.2em] transition-all duration-300"
          >
            EXPLORE COLLECTION
            <ArrowRight size={16} />
          </a>

        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#B08D57]"></div>

    </section>
  );
}

export default Hero;
