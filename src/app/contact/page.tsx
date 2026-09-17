"use client";

import { FadeIn } from "@/components/FadeIn";
import { ContactModule } from "@/components/ContactModule";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-dark-100 pt-32 pb-24 selection:bg-primary/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12 text-center">
        <FadeIn>
          <h4 className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">Get in Touch</h4>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6">Contact & Hours</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Find our location and visiting hours below.
          </p>
        </FadeIn>
      </div>
      <ContactModule />
    </main>
  );
}
