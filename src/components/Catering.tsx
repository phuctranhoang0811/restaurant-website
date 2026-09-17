"use client";

import { FadeIn } from "./FadeIn";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Customized Menus",
  "Professional Staff",
  "Venue Coordination",
  "Premium Tableware",
  "Sommelier Services",
  "Floral Arrangements",
];

export function Catering() {
  return (
    <section className="py-24 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h4 className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-4">Catering Services</h4>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Impeccable Catering for Your Special Events
            </h2>
            <p className="text-gray-400 text-lg">
              Elevate your gatherings with our bespoke catering services. Whether it's an intimate dinner party, a corporate gala, or a grand wedding, we bring our culinary artistry directly to you.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <FadeIn key={item} delay={index * 0.2} direction="up" className="group">
              <div className="bg-dark-100 rounded-3xl overflow-hidden border border-dark-300/50 hover:border-primary/50 transition-colors h-full flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden bg-dark-300">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl text-white mb-4">
                    {item === 1 ? "Private Dinners" : item === 2 ? "Corporate Events" : "Weddings & Galas"}
                  </h3>
                  <p className="text-gray-400 mb-6 flex-1">
                    {item === 1 && "Intimate and personalized culinary experiences crafted for you and your closest guests in the comfort of your home."}
                    {item === 2 && "Impress your clients and colleagues with sophisticated menus that reflect your company's standard of excellence."}
                    {item === 3 && "Make your special day truly unforgettable with exquisite cuisine and flawless service tailored to your vision."}
                  </p>
                  <button className="text-primary font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform w-fit">
                    Learn more <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-24 bg-dark-100 rounded-3xl p-8 md:p-12 border border-dark-300 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <FadeIn direction="right">
              <h3 className="font-serif text-3xl text-white">Why Choose Our Catering?</h3>
              <p className="text-gray-400">
                We manage every detail of the dining experience so you can focus on being a guest at your own event.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <div className="lg:w-1/2 w-full">
             <FadeIn direction="left" delay={0.2}>
               <div className="bg-dark-200 p-8 rounded-2xl border border-dark-300/50">
                  <h4 className="text-xl text-white mb-4 font-serif">Request a Proposal</h4>
                  <p className="text-gray-400 mb-6 text-sm">Tell us about your event and our team will craft a custom menu for you.</p>
                  <button className="w-full py-4 bg-primary text-dark-100 rounded-xl font-medium hover:bg-primary-dark transition-colors">
                     Contact Events Team
                  </button>
               </div>
             </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
