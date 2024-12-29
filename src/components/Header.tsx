import React, { useState } from "react";
import logo from "../assets/logo 1.png";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion";
import DarkModeToggle from "./DarkModeProvider";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const moveSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      const handleScroll = () => {
        if (Math.abs(window.scrollY - offsetPosition) < 5) {
          setIsMobileMenuOpen(false);
          window.removeEventListener("scroll", handleScroll);
        }
      };

      window.addEventListener("scroll", handleScroll);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: 1, name: "About Me", href: "#about" },
    { id: 2, name: "Skills", href: "#skills" },
    { id: 3, name: "Projects", href: "#projects" },
    { id: 4, name: "Contact", href: "#contact" },
  ];

  return (
    <header className="text-gray dark:text-light z-50 backdrop-blur-lg fixed top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center md:mx-[15%] ">
        {/* Logo */}
        <div className="text-xl font-semibold">
          <span
            onClick={() => moveSection("#hero")}
            className="flex items-center space-x-2 hover:text-blue "
          >
            <img
              src={logo}
              alt="My Portfolio"
              className="dark:bg-light rounded-md mx-2 h-8 w-12"
            />{" "}
            Ridho
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 font-semibold items-center">
          {navItems.map((item) => (
            <span
              key={item.id}
              onClick={() => moveSection(item.href)}
              className=" hover:text-blue"
            >
              {item.name}
            </span>
          ))}
          <DarkModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray focus:outline-none dark:text-light"
        >
          {isMobileMenuOpen ? <FaX size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`md:hidden bg-light text-dark overflow-hidden dark:bg-gray dark:text-light`}
        >
          <nav className="space-y-4 px-6 py-4">
            {navItems.map((item) => (
              <span
                key={item.id}
                // href={item.href}
                onClick={() => moveSection(item.href)}
                className="block hover:text-blue"
              >
                {item.name}
              </span>
            ))}
            <DarkModeToggle />
          </nav>
        </motion.div>
      }
    </header>
  );
};

export default Header;
