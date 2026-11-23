import aboutImage from "../assets/images/about-monicakes.jpeg";

function About() {
  return (
    <section
      id="about"
      className="bg-[#F8F5EF] py-16 sm:py-20 md:py-24 px-5 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">

        {/* About Image */}
        <div className="relative">
          <img
  src={aboutImage}
  alt="MONICAKES homemade creations"
  className="w-full aspect-[4/5] object-cover rounded-sm"
/>

          <div className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-5 bg-[#811E2B] text-white px-5 py-4 sm:px-7 sm:py-5">
            <p className="text-[#E8D5A8] text-[10px] sm:text-xs tracking-[0.25em]">
              ESTABLISHED
            </p>
            <p className="font-serif text-2xl sm:text-3xl mt-1">
              2016
            </p>
          </div>
        </div>

        {/* About Content */}
        <div className="pt-6 md:pt-0">
          <p className="text-[#B08D57] text-xs tracking-[0.3em] uppercase mb-4">
            The Story Behind MONICAKES
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#811E2B] leading-tight mb-8">
            A Passion for Baking,
            <span className="block italic">
              Made with Love
            </span>
          </h2>

          <div className="space-y-6 text-[#302927] text-base sm:text-lg leading-relaxed">

            <p>
              MONICAKES was born from a simple passion for baking — a hobby that gradually grew into something more meaningful. Since 2016, we have continued to develop our passion into a journey of creating delightful homemade treats that bring happiness to every occasion.
            </p>

            <p>
              At MONICAKES, we believe that every creation deserves to be made with love and care. That is why we are committed to crafting each product wholeheartedly, using carefully selected premium ingredients to ensure exceptional taste and quality in every bite.
            </p>

            <p>
              More than just baking, MONICAKES is about sharing joy, creating sweet memories, and making every moment a little more special.
            </p>

          </div>

          <div className="mt-8 border-l-2 border-[#B08D57] pl-5">
            <p className="font-serif italic text-[#811E2B] text-lg sm:text-xl">
              Made with love, crafted with passion, and shared with happiness.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
