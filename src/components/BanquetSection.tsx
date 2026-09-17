"use client";

import { FadeIn } from "./FadeIn";

export function BanquetSection() {
  return (
    <section id="banquet" className="py-24 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1498&auto=format&fit=crop')] bg-cover bg-center hover:scale-105 transition-transform duration-700" />
            </div>
          </FadeIn>
          
          <div className="space-y-6">
            <FadeIn>
              <h4 className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-2">Banquet Facilities</h4>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                Exquisite Event Spaces
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-400 text-lg">
                Featuring stunning banquet halls and state-of-the-art audiovisual equipment, we are ready to accommodate events of any scale, from 50 to 500 guests.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Magnificent Grand Ballroom
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Exclusive Private Dining VIP Rooms
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Beautiful Outdoor Garden Terrace
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
