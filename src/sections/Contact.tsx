
import { MessageCircle } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 px-6 sm:px-10 bg-[#F8F5EF]"
    >
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-[#B08D57] tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm uppercase">
          We'd Love to Hear From You
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#811E2B] mt-4 leading-tight">
          Let's Make Your Christmas Sweeter
        </h2>

        <div className="w-14 h-px bg-[#B08D57] mx-auto my-6" />

        <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8 max-w-xl mx-auto">
          Looking for something sweet for your Christmas
          celebration? Contact us for product information
          and pre-orders.
        </p>

        <a
          href="https://wa.me/6287785667603"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 mt-8 bg-[#811E2B] text-white px-8 sm:px-10 py-4 text-xs sm:text-sm tracking-widest hover:bg-[#B08D57] transition-all duration-300"
        >
          <MessageCircle size={19} />
          CONTACT US VIA WHATSAPP
        </a>

        <p className="font-serif italic text-[#B08D57] text-lg mt-8">
          Made with Love, Shared with Happiness.
        </p>

      </div>
    </section>
  );
}

export default Contact;
