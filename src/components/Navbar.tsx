
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "../assets/images/logo-monicakes.png";

const menus = [
  { name: "HOME", link: "/" },
  { name: "ABOUT", link: "/#about" },
  { name: "COOKIES", link: "/cookies" },
  { name: "PUDDING", link: "/pudding" },
  { name: "CAKE", link: "/cake" },
  { name: "HAMPERS", link: "/hampers" },
  { name: "CONTACT", link: "/#contact" },
];


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      {/* Announcement Bar */}
      <div className="bg-[#F8E5E9] text-center py-2">
        <p className="text-[10px] sm:text-xs tracking-widest text-[#811E2B]">
          CHRISTMAS PRE-ORDER 2026 IS NOW OPEN
        </p>
      </div>

      {/* Brand Header */}
      <div className="relative flex justify-center items-center py-2 md:py-3">

        {/* Hamburger - Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute left-5 md:hidden text-[#811E2B]"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="MONICAKES"
            className="w-[190px] sm:w-[230px] md:w-[320px] h-auto object-contain"
          />
        </Link>

        {/* WhatsApp Icon - Mobile */}
        <a
          href="https://wa.me/6287785667603"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-5 md:hidden text-[#811E2B]"
          aria-label="Contact MONICAKES via WhatsApp"
        >
          <MessageCircle size={23} />
        </a>

      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center items-center gap-8 lg:gap-12 xl:gap-16 flex-wrap pb-6">
        {menus.map((menu) => (
          <Link
            key={menu.name}
            to={menu.link}
            className="text-sm lg:text-base tracking-[0.12em] font-medium text-[#302927] hover:text-[#B08D57] transition-colors duration-300"
          >
            {menu.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[450px] opacity-100 border-t border-[#F0E5DC]"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center py-3 bg-white">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              to={menu.link}
              onClick={closeMenu}
              className="w-full text-center py-3 text-sm tracking-[0.15em] font-medium text-[#302927] hover:text-[#B08D57] hover:bg-[#F8F5EF] transition-colors"
            >
              {menu.name}
            </Link>
          ))}
        </nav>
      </div>

    </header>
  );
}

export default Navbar;
