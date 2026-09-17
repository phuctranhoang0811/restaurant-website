"use client";

import { FadeIn } from "./FadeIn";

const images = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1374&auto=format&fit=crop",
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h4 className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-4">Beautiful Moments</h4>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">Gallery</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} direction="up" className="group">
              <div className="aspect-square overflow-hidden rounded-2xl relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url(${img})` }} 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white border border-white px-4 py-2 rounded-full backdrop-blur-sm">View Image</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
