

function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#3B070B] md:min-h-[680px] md:flex md:items-center"
    >
      {/* Background Image */}
      <img
        src="/images/christmas-hero.png"
        alt="MONICAKES Early Bird Christmas Hampers Promotion"
        className="
          block
          w-full
          h-auto
          md:absolute
          md:inset-0
          md:w-full
          md:h-full
          md:object-cover
          md:object-center
        "
      />

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#B08D57]" />
    </section>
  );
}

export default Hero;
