"use client";

import { FadeIn } from "@/components/FadeIn";
import { ServicesSection } from "@/components/ServicesSection";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-dark-100 pt-32 pb-24 selection:bg-primary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
        <FadeIn>
          <h4 className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">Exclusive Offerings</h4>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Premium Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our curated meal kits and exclusive hosting services for VIP guests.
          </p>
        </FadeIn>
      </div>
      <ServicesSection />
    </main>
  );
}
