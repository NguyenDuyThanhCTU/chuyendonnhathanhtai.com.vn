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

export default function TeamSlider() {
  const images = [
    "https://chuyennhatrongoi24h.net/wp-content/uploads/2024/11/z6039223648805_7a3e91a43c8cdbb520191d072c5b2e00-1.jpg",
    "https://chuyennhatrongoi24h.net/wp-content/uploads/2024/11/z5958042107701_eb91770de1dd3186e4adb0a8cdb1c3ec-1.jpg",
    "https://chuyennhatrongoi24h.net/wp-content/uploads/2024/11/z6054071222399_713f54429a29e1055ea83c5dc97b0a39.jpg",
    "https://chuyennhatrongoi24h.net/wp-content/uploads/2024/11/z5942014002100_be8963e72a5b5fa2dfc07bd4093839ae-1.jpg",
    "https://chuyennhatrongoi24h.net/wp-content/uploads/2024/11/z6032437089624_49ddf2ce4f30d7753749c84d70d293df.jpg",
    "https://chuyennhatrongoi24h.net/wp-content/uploads/2024/11/z6039223628190_36d532266fa717fc64a2d8666644dcd0.jpg",
    "https://chuyennhatrongoi24h.net/wp-content/uploads/2024/11/z6054070340944_6f61a2036c87d190a4b900e0852d86b0.jpg",
  ];

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
                    src={src}
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
