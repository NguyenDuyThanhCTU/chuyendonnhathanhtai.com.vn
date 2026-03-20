"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hàm phụ trợ để render Dropdown Item (Tránh lặp code)
  const NavItem = ({ title, items }: { title: string; items?: string[] }) => {
    if (!items) {
      return (
        <a
          href="#"
          className="hover:text-green-200 transition py-4 block font-semibold text-[15px]"
        >
          {title}
        </a>
      );
    }

    return (
      <div className="relative group">
        <button className="flex items-center gap-1 hover:text-green-200 transition py-4 font-semibold text-[15px]">
          {title} <ChevronDown className="w-4 h-4" />
        </button>
        {/* Dropdown Menu - Hiện khi hover */}
        <div className="absolute top-full left-0 w-56 bg-white text-gray-800 shadow-lg border-t-2 border-[#137b38] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <ul className="flex flex-col py-2">
            {items.map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-green-50 hover:text-[#137b38] transition border-b border-gray-100 last:border-0 text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-[#137b38] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* Thay bằng thẻ <img /> logo thực tế của bạn */}
            <div className="w-[150px] h-[87px] flex items-center justify-center font-bold text-xl">
              <img
                src="https://chuyennhatrongoi24h.net/wp-content/uploads/2025/04/logo-chuyen-nha-24h-white-150x87.png"
                alt="Logo"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Navigation (Desktop) */}
          <nav className="hidden lg:flex space-x-6 items-center">
            <NavItem title="Giới thiệu" items={["Liên hệ"]} />
            <NavItem
              title="Dịch vụ chuyển trọ"
              items={[
                "Chuyển trọ tại TPHCM",
                "Chuyển trọ sinh viên",
                "Chuyển trọ công nhân",
                "Thuê xe tải chuyển trọ",
                "Chuyển trọ trọn gói",
                "Chuyển trọ liên tỉnh",
              ]}
            />
            <NavItem title="Chuyển nhà chung cư" />
            <NavItem
              title="Dịch vụ khác"
              items={[
                "Chuyển nhà",
                "Chuyển nhà liên tỉnh",
                "Dịch vụ chuyển đồ",
                "Vận chuyển két sắt",
                "Vận chuyển đàn piano",
                "Dịch vụ chuyển văn phòng",
                "Chuyển cửa hàng",
                "Chuyển kho xưởng",
              ]}
            />
            <NavItem
              title="Bảng giá"
              items={[
                "Giá dịch vụ chuyển trọ",
                "Giá taxi tải chuyển nhà",
                "Giá dịch vụ chuyển nhà",
                "Giá chuyển văn phòng",
                "Giá chuyển kho xưởng",
              ]}
            />
            <NavItem
              title="Blog"
              items={[
                "Cẩm nang chuyển trọ",
                "Kinh nghiệm chuyển nhà",
                "Xem ngày tốt & phong thủy",
                "Các câu hỏi thường gặp",
                "Kiến thức hữu ích và Mẹo dọn đồ",
              ]}
            />
          </nav>

          {/* Hotline (Desktop) */}
          <div className="hidden lg:flex flex-col text-right justify-center">
            <span className="text-[11pt] uppercase text-white font-medium">
              TỔNG ĐÀI MIỄN PHÍ:
            </span>
            {/* Dùng class font-mono hoặc một font số riêng nếu cần giống hệt font digital */}
            <span className="text-3xl font-bold text-yellow-400 tracking-wider">
              1800.00.38
            </span>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-green-200 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation (Mobile) - Slide down */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white text-gray-800 border-t border-gray-200 max-h-[70vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Đây là menu mobile dạng phẳng đơn giản. Nếu cần Accordion phức tạp hơn, ta sẽ dùng state riêng cho từng mục */}
            <a
              href="#"
              className="block px-3 py-3 font-medium hover:bg-green-50 hover:text-[#137b38] border-b"
            >
              Giới thiệu
            </a>
            <a
              href="#"
              className="block px-3 py-3 font-medium hover:bg-green-50 hover:text-[#137b38] border-b"
            >
              Dịch vụ chuyển trọ
            </a>
            <a
              href="#"
              className="block px-3 py-3 font-medium hover:bg-green-50 hover:text-[#137b38] border-b"
            >
              Chuyển nhà chung cư
            </a>
            <a
              href="#"
              className="block px-3 py-3 font-medium hover:bg-green-50 hover:text-[#137b38] border-b"
            >
              Dịch vụ khác
            </a>
            <a
              href="#"
              className="block px-3 py-3 font-medium hover:bg-green-50 hover:text-[#137b38] border-b"
            >
              Bảng giá
            </a>
            <a
              href="#"
              className="block px-3 py-3 font-medium hover:bg-green-50 hover:text-[#137b38]"
            >
              Blog
            </a>

            <div className="mt-4 p-4 bg-green-50 rounded-lg text-center">
              <span className="block text-sm text-gray-600 mb-1">
                Tổng đài miễn phí
              </span>
              <a
                href="tel:18000038"
                className="block text-2xl font-bold text-[#137b38]"
              >
                1800.00.38
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
