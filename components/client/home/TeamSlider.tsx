"use client";

import React from "react";
import Image from "next/image";
// Import css của Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import component và modules của Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { CollectionProps } from "@assets/props/Props";

export default function TeamSlider({ Data }: { Data: CollectionProps[] }) {
  const images = Data?.filter((item) => item.type === "hinh-anh");

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#137b38] uppercase tracking-wide">
            HÌNH ẢNH ĐỘI NGŨ NHÂN VIÊN
          </h2>
        </div>

        {/* Khung chứa Slider */}
        <div className="relative pb-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-[4/5] sm:aspect-[4/3] w-full rounded-sm overflow-hidden bg-gray-100">
                  <Image
                    src={src.image}
                    alt={`Hình ảnh đội ngũ ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
