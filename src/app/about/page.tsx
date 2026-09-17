"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark-100 pt-32 pb-24 selection:bg-primary/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <h4 className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">Our Story</h4>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6">A Legacy of Culinary Excellence</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover the passion, history, and people behind our award-winning dining experience.
            </p>
          </FadeIn>
        </div>

        {/* History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <FadeIn direction="right">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </FadeIn>
          <div className="space-y-6">
            <FadeIn>
              <h2 className="font-serif text-4xl text-white">Founded in 1998</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-400 text-lg leading-relaxed">
                What started as a small, intimate dining room has blossomed into a culinary institution. Our founders envisioned a space where traditional cooking methods could meet modern innovation without losing their soul. 
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-400 text-lg leading-relaxed">
                Over the decades, we have continuously evolved, pushing the boundaries of taste and presentation, yet remaining firmly rooted in our commitment to utilizing the freshest, locally sourced ingredients available.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* The Chef Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1 space-y-6">
            <FadeIn>
              <h2 className="font-serif text-4xl text-white">Meet the Executive Chef</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-400 text-lg leading-relaxed">
                Chef Alexander Wright brings over 20 years of experience from Michelin-starred kitchens around the world. His philosophy revolves around respecting the ingredient and allowing natural flavors to shine through minimalist yet precise preparation.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-400 text-lg leading-relaxed">
                "Cooking is not just about feeding the body, but nourishing the soul. Every plate that leaves our kitchen is a testament to our dedication to the craft of gastronomy."
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="font-serif text-2xl text-primary mt-4 italic">Alexander Wright</p>
            </FadeIn>
          </div>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1384&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </FadeIn>
        </div>

        {/* Philosophy */}
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn>
             <h2 className="font-serif text-4xl text-white mb-8">Our Philosophy</h2>
             <p className="text-gray-400 text-xl leading-relaxed italic">
               "To provide an unforgettable journey of the senses, where impeccable service, luxurious ambiance, and extraordinary flavors converge in perfect harmony."
             </p>
          </FadeIn>
        </div>

      </div>
    </main>
  );
}
