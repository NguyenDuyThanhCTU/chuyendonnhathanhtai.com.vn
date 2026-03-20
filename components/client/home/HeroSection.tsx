import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[550px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image với hiệu ứng Parallax nhẹ (nếu muốn) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://chuyennhatrongoi24h.net/wp-content/uploads/2024/12/chuyen-nha-tron-goi.jpg')", // Hãy thay bằng URL ảnh nền chuẩn nhất của bạn
        }}
      ></div>

      {/* Gradient/Overlay đè lên ảnh để làm nổi chữ */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>

      {/* Nội dung chính */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center max-w-4xl mx-auto">
        {/* Subtitle */}
        <span className="text-[#a3e635] font-bold text-sm md:text-base tracking-widest mb-3 drop-shadow-md">
          SIÊU NHANH - SIÊU RẺ
        </span>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg uppercase">
          Chuyển Nhà Trọn Gói 24H
        </h1>

        {/* Description */}
        <p className="text-gray-100 font-medium max-w-3xl mx-auto mb-8 text-base md:text-lg leading-relaxed drop-shadow-md">
          Các dịch vụ <strong>Chuyển Nhà Trọn Gói 24h</strong> cung cấp luôn đảm
          bảo tiêu chí{" "}
          <strong className="text-white">
            NHANH NHẤT, GIÁ RẺ, CHUYÊN NGHIỆP NHẤT
          </strong>{" "}
          xứng đáng với niềm tin mà quý khách hàng đã trao cho chúng tôi.
        </p>

        {/* CTA Button */}
        <a
          href="tel:18000038"
          className="group relative inline-flex items-center justify-center bg-[#4caf50] hover:bg-[#43a047] text-white font-bold text-base py-3.5 px-8 rounded-md transition-all duration-300 shadow-[0_4px_14px_0_rgba(76,175,80,0.39)] hover:shadow-[0_6px_20px_rgba(76,175,80,0.23)] hover:-translate-y-1"
        >
          LIÊN HỆ NGAY
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
