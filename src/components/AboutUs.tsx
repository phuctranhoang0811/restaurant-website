"use client";

import { FadeIn } from "./FadeIn";

export function AboutUs() {
  return (
    <section className="py-24 bg-dark-100 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dark-200/50 skew-x-12 translate-x-32" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <FadeIn direction="right">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-dark-300 border border-dark-300/50 relative group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100/80 to-transparent" />
              </div>
            </FadeIn>
            <FadeIn delay={0.3} direction="up" className="absolute -bottom-10 -right-10 w-2/3 hidden md:block">
               <div className="aspect-square rounded-3xl overflow-hidden bg-dark-300 border-4 border-dark-100 shadow-2xl relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center" />
               </div>
            </FadeIn>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <FadeIn>
              <h4 className="text-primary tracking-[0.2em] text-sm uppercase font-semibold">Về Chúng Tôi</h4>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-4 leading-tight">
                A Legacy of <br/>Culinary Excellence
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-gray-400 text-lg leading-relaxed">
                Founded in 1998, our restaurant has been at the forefront of modern gastronomy, blending traditional techniques with avant-garde innovation. Every dish tells a story of passion, precision, and an unwavering commitment to quality.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-gray-400 leading-relaxed">
                Our Executive Chef works closely with local artisans and farmers to source the finest seasonal ingredients, ensuring that each plate is not just a meal, but an unforgettable experience that awakens the senses.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <button className="mt-4 pb-2 border-b-2 border-primary text-white font-medium hover:text-primary transition-colors tracking-wide uppercase text-sm">
                Discover Our Story
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
