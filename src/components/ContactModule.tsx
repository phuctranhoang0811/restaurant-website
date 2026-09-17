"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "17:00 - 22:00" },
  { day: "Wednesday", time: "17:00 - 22:00" },
  { day: "Thursday", time: "17:00 - 22:00" },
  { day: "Friday", time: "17:00 - 23:00" },
  { day: "Saturday", time: "12:00 - 23:00" },
  { day: "Sunday", time: "12:00 - 21:00" },
];

export function ContactModule() {
  // 0 is Sunday, 1 is Monday, etc. in JS Date
  const currentDayIndex = new Date().getDay();
  // Map JS Date index to our hours array index (Monday = 0, Sunday = 6)
  const mappedDayIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;

  return (
    <section className="py-24 bg-dark-100 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4"
          >
            Visit Us
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info & Hours */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="font-serif text-2xl text-white mb-6 flex items-center gap-3">
                <Clock className="text-primary w-6 h-6" /> Visiting Hours
              </h3>
              <ul className="space-y-4">
                {hours.map((h, i) => {
                  const isToday = i === mappedDayIndex;
                  return (
                    <li 
                      key={h.day}
                      className={cn(
                        "flex justify-between items-center py-2 border-b border-dark-300/50",
                        isToday ? "text-primary font-medium" : "text-gray-400"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {h.day} {isToday && <span className="text-[10px] bg-primary/20 px-2 py-0.5 rounded-full text-primary uppercase tracking-wider">Today</span>}
                      </span>
                      <span>{h.time}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-white mb-6">Get in Touch</h3>
              <div className="space-y-4 text-gray-400">
                <p className="flex items-start gap-4 hover:text-primary transition-colors cursor-pointer">
                  <MapPin className="w-5 h-5 shrink-0 mt-1" />
                  <span>123 Culinary Avenue, <br />Gourmet District, NY 10001</span>
                </p>
                <p className="flex items-center gap-4 hover:text-primary transition-colors cursor-pointer">
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>+1 (212) 555-0199</span>
                </p>
                <p className="flex items-center gap-4 hover:text-primary transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>reservations@luxuryrestaurant.com</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-dark-200 p-8 rounded-3xl border border-dark-300 shadow-2xl h-fit"
          >
            <h3 className="font-serif text-2xl text-white mb-6">Send an Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">First Name</label>
                  <input type="text" className="w-full bg-dark-300/50 border border-dark-300 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-dark-300/50 border border-dark-300 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-dark-300/50 border border-dark-300 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-dark-300/50 border border-dark-300 rounded-xl px-4 py-3 text-white resize-none focus:outline-none focus:border-primary transition-colors"></textarea>
              </div>
              <button type="button" className="w-full bg-primary hover:bg-primary-dark text-dark-100 font-medium py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="h-full min-h-[400px] rounded-3xl overflow-hidden relative border border-dark-300 group"
          >
            {/* Styled Map Placeholder */}
            <div className="absolute inset-0 bg-dark-300/20 backdrop-blur-sm z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <span className="text-white font-medium bg-dark-100/80 px-6 py-2 rounded-full backdrop-blur-md">Open in Google Maps</span>
            </div>
            {/* We simulate a dark-themed map using a pattern and gradient */}
            <div className="absolute inset-0 bg-[#1a1a1a] opacity-80" 
                 style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
               <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(212,175,55,0.8)] animate-pulse"></div>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 bg-dark-100/90 backdrop-blur-md p-4 rounded-2xl border border-dark-300 z-0 text-center">
              <p className="text-white font-serif text-lg">Culinary Avenue</p>
              <p className="text-sm text-gray-400">Gourmet District, NY</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
