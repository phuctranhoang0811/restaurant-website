"use client";

import { FadeIn } from "./FadeIn";

const menuItems = [
  { name: "Truffle Risotto", price: "$45", desc: "Arborio rice, black truffle shavings, 24-month parmigiano" },
  { name: "Wagyu A5 Striploin", price: "$120", desc: "Japanese Wagyu, charred asparagus, bone marrow jus" },
  { name: "Lobster Thermidor", price: "$85", desc: "Fresh Maine lobster, cognac cream, gruyere crust" },
  { name: "Duck Confit", price: "$55", desc: "Crispy duck leg, pomme purée, cherry gastrique" },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-dark-100 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h4 className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-4">Discover the Flavors</h4>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Our Menu</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {menuItems.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="flex justify-between items-end border-b border-dark-300/50 pb-4 mb-4">
                <div>
                  <h3 className="text-xl text-white font-serif">{item.name}</h3>
                  <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
                </div>
                <span className="text-primary text-xl font-serif">{item.price}</span>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.4} className="text-center mt-12">
           <button className="border border-primary text-primary hover:bg-primary hover:text-dark-100 px-8 py-3 rounded-full transition-colors font-medium">
             View Full Menu
           </button>
        </FadeIn>
      </div>
    </section>
  );
}
