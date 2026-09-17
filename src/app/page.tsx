"use client";

import { motion } from "framer-motion";
import { ReservationForm } from "@/components/ReservationForm";
import { ContactModule } from "@/components/ContactModule";
import { AboutUs } from "@/components/AboutUs";
import { Catering } from "@/components/Catering";
import { FadeIn } from "@/components/FadeIn";
import { MenuSection } from "@/components/MenuSection";
import { BanquetSection } from "@/components/BanquetSection";
import { GallerySection } from "@/components/GallerySection";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-100 selection:bg-primary/30">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h4 className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-6">Experience Perfection</h4>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl lg:text-8xl text-white mb-8 leading-tight">
              A Symphony of <br className="hidden md:block"/> Flavors
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Indulge in an extraordinary culinary journey where every detail is crafted to perfection, designed for the most discerning palates.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-dark-100 px-10 py-4 rounded-full font-medium transition-all hover:scale-105 uppercase tracking-wider text-sm">
              Discover Menu
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-gray-400 text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-16 bg-dark-300 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-primary"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* 2. Về chúng tôi (About Us) */}
      <div id="about">
         <AboutUs />
      </div>

      {/* 3. Thực đơn (Menu) */}
      <MenuSection />

      {/* 4. Cơ sở tổ chức tiệc (Banquet Facilities) */}
      <BanquetSection />

      {/* 5. Phòng trưng bày (Gallery) */}
      <GallerySection />

      {/* 6. Dịch vụ ăn uống (Catering Services) */}
      <div id="catering">
         <Catering />
      </div>

      {/* 10. Menu Kits & 11. Hosting Services */}
      <ServicesSection />

      {/* 9. Đặt chỗ trực tuyến (Online Reservation) */}
      <section id="reservation" className="py-32 relative bg-dark-100 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h4 className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-4">Online Reservation</h4>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">Book Your Table</h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} direction="up">
            <ReservationForm />
          </FadeIn>
        </div>
      </section>

      {/* 7. Contact & 8. Visiting Hours Module */}
      <div id="contact">
         <ContactModule />
      </div>
      
      {/* Footer */}
      <footer className="bg-dark-300/20 py-12 border-t border-dark-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Luxury Dining. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
