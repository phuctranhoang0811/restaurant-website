"use client";

import { FadeIn } from "@/components/FadeIn";

const menuCategories = [
  {
    title: "Appetizers",
    items: [
      { name: "Oysters Rockefeller", price: "$28", desc: "Fresh oysters, spinach, butter, breadcrumbs, pernod" },
      { name: "Wagyu Beef Tartare", price: "$32", desc: "Quail egg, capers, shallots, house-made brioche toast" },
      { name: "Seared Scallops", price: "$29", desc: "Hokkaido scallops, cauliflower purée, crispy pancetta" },
      { name: "Truffle Burrata", price: "$25", desc: "Heirloom tomatoes, balsamic glaze, fresh basil, truffle oil" }
    ]
  },
  {
    title: "Main Courses",
    items: [
      { name: "Truffle Risotto", price: "$45", desc: "Arborio rice, black truffle shavings, 24-month parmigiano" },
      { name: "Wagyu A5 Striploin", price: "$120", desc: "Japanese Wagyu, charred asparagus, bone marrow jus" },
      { name: "Lobster Thermidor", price: "$85", desc: "Fresh Maine lobster, cognac cream, gruyere crust" },
      { name: "Duck Confit", price: "$55", desc: "Crispy duck leg, pomme purée, cherry gastrique" },
      { name: "Chilean Sea Bass", price: "$65", desc: "Pan-seared, saffron beurre blanc, wild mushroom fricassee" }
    ]
  },
  {
    title: "Desserts",
    items: [
      { name: "Valrhona Chocolate Soufflé", price: "$22", desc: "Grand Marnier crème anglaise, vanilla bean ice cream" },
      { name: "Classic Crème Brûlée", price: "$18", desc: "Madagascar vanilla, caramelized sugar crust, fresh berries" },
      { name: "Lemon Tart", price: "$16", desc: "Toasted meringue, buttery crust, raspberry coulis" }
    ]
  }
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-dark-100 pt-32 pb-24 selection:bg-primary/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <h4 className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">Discover the Flavors</h4>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Our Menu</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A curated selection of the finest ingredients, transformed into culinary masterpieces.
            </p>
          </FadeIn>
        </div>

        {/* Menu Categories */}
        <div className="space-y-24">
          {menuCategories.map((category, catIdx) => (
            <div key={category.title}>
              <FadeIn>
                <div className="flex items-center gap-6 mb-12">
                  <div className="flex-1 h-px bg-dark-300" />
                  <h2 className="font-serif text-3xl text-white tracking-widest uppercase">{category.title}</h2>
                  <div className="flex-1 h-px bg-dark-300" />
                </div>
              </FadeIn>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {category.items.map((item, idx) => (
                  <FadeIn key={item.name} delay={idx * 0.1}>
                    <div className="flex justify-between items-start border-b border-dark-300/50 pb-6 h-full">
                      <div className="pr-8">
                        <h3 className="text-xl text-white font-serif tracking-wide">{item.name}</h3>
                        <p className="text-gray-400 text-sm mt-3 leading-relaxed">{item.desc}</p>
                      </div>
                      <span className="text-primary text-xl font-serif">{item.price}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
