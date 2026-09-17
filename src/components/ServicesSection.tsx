"use client";

import { FadeIn } from "./FadeIn";
import { Package, Globe } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="kits-hosting" className="py-24 bg-dark-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Menu Kits */}
          <FadeIn direction="right" className="bg-dark-100 p-10 rounded-3xl border border-dark-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <Package className="w-12 h-12 text-primary mb-6" />
            <h3 id="kits" className="font-serif text-3xl text-white mb-4">Menu Kits</h3>
            <p className="text-gray-400 mb-8 line-clamp-3">
              Experience 5-star dining right at home with our "Meal Kits" curated by our executive chefs. Includes premium ingredients and detailed video instructions.
            </p>
            <button className="text-white hover:text-primary transition-colors flex items-center gap-2 text-sm uppercase tracking-wider font-medium">
              Discover now &rarr;
            </button>
          </FadeIn>

          {/* Hosting Services */}
          <FadeIn direction="left" delay={0.2} className="bg-dark-100 p-10 rounded-3xl border border-dark-300 relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <Globe className="w-12 h-12 text-primary mb-6" />
            <h3 id="hosting" className="font-serif text-3xl text-white mb-4">Hosting Services</h3>
            <p className="text-gray-400 mb-8 line-clamp-3">
              Exclusive for our V.I.P guests: Personalized wine and cigar storage services, as well as recurring bespoke event planning tailored to your unique preferences.
            </p>
            <button className="text-white hover:text-primary transition-colors flex items-center gap-2 text-sm uppercase tracking-wider font-medium">
              Learn more &rarr;
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
