"use client";

import { FadeIn } from "@/components/FadeIn";
import { ReservationForm } from "@/components/ReservationForm";

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-dark-100 pt-32 pb-24 selection:bg-primary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <FadeIn>
          <h4 className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">Secure Your Spot</h4>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Book a Table</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience an unforgettable culinary journey.
          </p>
        </FadeIn>
      </div>
      <div className="px-6 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
         <FadeIn delay={0.2} direction="up" className="relative z-10">
           <ReservationForm />
         </FadeIn>
      </div>
    </main>
  );
}
