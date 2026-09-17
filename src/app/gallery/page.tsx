"use client";

import { FadeIn } from "@/components/FadeIn";
import { GallerySection } from "@/components/GallerySection";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-dark-100 pt-32 pb-24 selection:bg-primary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
        <FadeIn>
          <h4 className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">Visual Journey</h4>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Our Gallery</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A glimpse into the elegance and artistry of our restaurant.
          </p>
        </FadeIn>
      </div>
      <GallerySection />
    </main>
  );
}
