
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[520px] sm:min-h-[580px] md:min-h-[680px] flex items-center overflow-hidden"
    >

      {/* Background Image */}
      <img
        src="/images/christmas-hero.png"
        alt="Monicakes Christmas Collection"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

    
      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#B08D57]"></div>

    </section>
  );
}

export default Hero;
