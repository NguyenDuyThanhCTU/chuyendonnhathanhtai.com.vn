import React from "react";
import Image from "next/image";
import { PostProps } from "@assets/props/PropsPost";

export default function ServiceGrid({ Data }: { Data: PostProps[] }) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề Section */}
        <div className="text-center mb-10">
          <h2 className="text-[22px] md:text-2xl font-bold text-[#137b38] uppercase tracking-wide">
            Các dịch vụ chính của Dọn Nhà Chuyên Nghiệp Thành Tài
          </h2>
        </div>

        {/* Grid Hình ảnh (3 cột trên Desktop, 2 cột Tablet, 1 cột Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Data.map((service, index) => (
            <a
              key={index}
              href={service.url}
              className="group block relative overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Khung chứa ảnh - Dùng aspect-ratio để ảnh không bị méo */}
              <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
