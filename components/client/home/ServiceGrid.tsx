import React from "react";
import Image from "next/image";

export default function ServiceGrid() {
  // Danh sách các dịch vụ lấy từ HTML mẫu
  const services = [
    {
      link: "#",
      imgSrc:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2024/12/chuyen-nha-tron-goi.jpg",
      alt: "Chuyển nhà trọn gói",
    },
    {
      link: "#",
      imgSrc:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2024/12/chuyen-tro-sinh-vien.jpg",
      alt: "Chuyển trọ sinh viên",
    },
    {
      link: "#",
      imgSrc:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2024/12/chuyen-nha-lien-tinh.jpg",
      alt: "Chuyển nhà liên tỉnh",
    },
    {
      link: "#",
      imgSrc:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2024/11/chuyen-van-phong.jpg",
      alt: "Chuyển văn phòng",
    },
    {
      link: "#",
      imgSrc:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2024/12/chuyen-do.jpg",
      alt: "Chuyển đồ",
    },
    {
      link: "#",
      imgSrc:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2024/12/chuyen-cua-hang.jpg",
      alt: "Chuyển cửa hàng",
    },
    {
      link: "#",
      imgSrc:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2024/11/kho-xuong.jpg",
      alt: "Chuyển kho xưởng",
    },
    {
      link: "#",
      imgSrc:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2024/11/ket-sat.jpg",
      alt: "Vận chuyển két sắt",
    },
    {
      link: "#",
      imgSrc:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2024/11/Chuyen-dan-piano.jpg",
      alt: "Vận chuyển đàn piano",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề Section */}
        <div className="text-center mb-10">
          <h2 className="text-[22px] md:text-2xl font-bold text-[#137b38] uppercase tracking-wide">
            Các dịch vụ chính của Chuyển Nhà Trọn Gói 24h
          </h2>
        </div>

        {/* Grid Hình ảnh (3 cột trên Desktop, 2 cột Tablet, 1 cột Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group block relative overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Khung chứa ảnh - Dùng aspect-ratio để ảnh không bị méo */}
              <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                <Image
                  src={service.imgSrc}
                  alt={service.alt}
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
