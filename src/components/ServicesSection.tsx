"use client";

import { FadeIn } from "./FadeIn";
import { Package, Globe } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="kits-hosting" className="py-24 bg-dark-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Menu Kits */}
          <FadeIn direction="right" className="bg-dark-100 p-10 rounded-3xl border border-dark-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <Package className="w-12 h-12 text-primary mb-6" />
            <h3 id="kits" className="font-serif text-3xl text-white mb-4">Bộ Dụng Cụ Thực Đơn</h3>
            <p className="text-gray-400 mb-8 line-clamp-3">
              Trải nghiệm ẩm thực 5 sao ngay tại nhà với các bộ "Meal Kits" được chuẩn bị sẵn bởi đội ngũ đầu bếp của chúng tôi. Bao gồm nguyên liệu thượng hạng và video hướng dẫn chi tiết.
            </p>
            <button className="text-white hover:text-primary transition-colors flex items-center gap-2 text-sm uppercase tracking-wider font-medium">
              Khám phá ngay &rarr;
            </button>
          </FadeIn>

          {/* Hosting Services */}
          <FadeIn direction="left" delay={0.2} className="bg-dark-100 p-10 rounded-3xl border border-dark-300 relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <Globe className="w-12 h-12 text-primary mb-6" />
            <h3 id="hosting" className="font-serif text-3xl text-white mb-4">Dịch Vụ Lưu Trữ Tiệc</h3>
            <p className="text-gray-400 mb-8 line-clamp-3">
              Dành riêng cho các khách hàng V.I.P: Dịch vụ bảo quản và lưu trữ rượu vang cá nhân, xì gà, cũng như lên kế hoạch tổ chức tiệc định kỳ theo yêu cầu riêng biệt.
            </p>
            <button className="text-white hover:text-primary transition-colors flex items-center gap-2 text-sm uppercase tracking-wider font-medium">
              Tìm hiểu thêm &rarr;
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
