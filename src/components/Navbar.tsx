"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Banquet Facilities", href: "/banquet" },
  { name: "Gallery", href: "/gallery" },
  { name: "Catering", href: "/catering" },
  { name: "Menu Kits", href: "/services#kits" },
  { name: "Hosting", href: "/services#hosting" },
  { name: "Contact & Hours", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-dark-100/90 backdrop-blur-md py-4 border-dark-300 shadow-xl" 
            : "bg-transparent py-6 border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl text-white tracking-widest uppercase flex items-center gap-2">
             <span className="w-8 h-8 bg-primary text-dark-100 flex items-center justify-center rounded-full font-bold text-lg">L</span>
             Luxury
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {links.slice(1, 6).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <a 
              href="/reservation" 
              className="bg-primary hover:bg-primary-dark text-dark-100 px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-transform hover:scale-105 active:scale-95"
            >
              Reservation
            </a>
          </div>

          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-dark-100 flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-dark-300">
               <span className="font-serif text-2xl text-white tracking-widest uppercase">Menu</span>
               <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white p-2">
                  <X className="w-6 h-6" />
               </button>
            </div>
            <div className="flex-1 overflow-y-auto py-8 px-6">
              <nav className="flex flex-col gap-6">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-serif text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="mt-12">
                 <a 
                   href="/reservation" 
                   onClick={() => setIsOpen(false)}
                   className="block text-center bg-primary text-dark-100 py-4 rounded-xl font-bold uppercase tracking-wider"
                 >
                   Book a Table
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
