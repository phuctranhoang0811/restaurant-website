"use client";

import { FadeIn } from "./FadeIn";

export function BanquetSection() {
  return (
    <section id="banquet" className="py-24 bg-dark-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1498&auto=format&fit=crop')] bg-cover bg-center hover:scale-105 transition-transform duration-700" />
            </div>
          </FadeIn>
          
          <div className="space-y-6">
            <FadeIn>
              <h4 className="text-primary tracking-[0.2em] text-sm uppercase font-semibold mb-2">Cơ Sở Vật Chất</h4>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                Không Gian Tổ Chức Tiệc Đẳng Cấp
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-400 text-lg">
                Sở hữu hệ thống sảnh tiệc lộng lẫy cùng trang thiết bị âm thanh, ánh sáng hiện đại, chúng tôi sẵn sàng đáp ứng mọi quy mô sự kiện từ 50 đến 500 khách.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Sảnh Grand Ballroom tráng lệ
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Phòng VIP Private Dining kín đáo
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Không gian Garden Terrace ngoài trời
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
