"use client";

import { FadeIn } from "@/components/FadeIn";
import { Catering } from "@/components/Catering";

export default function CateringPage() {
  return (
    <main className="min-h-screen bg-dark-100 pt-32 pb-24 selection:bg-primary/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12 text-center">
        <FadeIn>
          <h4 className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">Off-Site Events</h4>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6">Catering Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Bringing our culinary excellence directly to your special occasions.
          </p>
        </FadeIn>
      </div>
      <Catering />
    </main>
  );
}
