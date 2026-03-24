"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import slugify from "slugify";
import { CategoryProps } from "@assets/props/Props";
import { PostProps } from "@assets/props/PropsPost";
import { ContactProps } from "@assets/props/PropsConfig";
import { LocalFindById } from "@components/items/Handle";

interface HeaderProps {
  Posts: PostProps[];
  Config: Array<any>;
}

export default function Header({ Posts, Config }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const ContactData: ContactProps = LocalFindById(Config, "contact");

  // Hàm phụ trợ để render Dropdown Item (Tránh lặp code)
  const NavItem = ({
    title,
    items,
  }: {
    title: string;
    items?: PostProps[];
  }) => {
    if (!items) {
      return (
        <a
          href={title === "Blog" ? "/blogs/blog" : "/chuyen-nha-chung-cu"}
          className="hover:text-green-200 transition py-4 block font-semibold text-[15px]"
        >
          {title}
        </a>
      );
    }

    return (
      <div className="relative group">
        <Link
          href={`/blogs/${slugify(title, { locale: "vi", lower: true })}`}
          className="flex items-center gap-1 hover:text-green-200 transition py-4 font-semibold text-[15px]"
        >
          {title}

          <ChevronDown className="w-4 h-4" />
        </Link>
        {/* Dropdown Menu - Hiện khi hover */}
        {items.length > 0 && (
          <div className="absolute top-full left-0 w-56 bg-white text-gray-800 shadow-lg border-t-2 border-[#137b38] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <ul className="flex flex-col py-2">
              {items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`/${item.url}`}
                    className="block px-4 py-2 hover:bg-green-50 hover:text-[#137b38] transition border-b border-gray-100 last:border-0 text-sm"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
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
              <Link href={`/`}>
                <img
                  src={ContactData?.LogoWebsite}
                  alt="Logo"
                  className="w-full h-auto"
                />
              </Link>
            </div>
          </div>

          {/* Navigation (Desktop) */}
          <nav className="hidden lg:flex space-x-6 items-center">
            <NavItem
              title="Giới thiệu"
              items={Posts?.filter((item) => item.level0 === "gioi-thieu")}
            />
            <NavItem
              title="Dịch vụ chuyển trọ"
              items={Posts?.filter(
                (item) => item.level0 === "dich-vu-chuyen-tro",
              )}
            />
            <NavItem title="Chuyển nhà chung cư" />
            <NavItem
              title="Dịch vụ khác"
              items={Posts?.filter((item) => item.level0 === "dich-vu-khac")}
            />
            <NavItem
              title="Bảng giá"
              items={Posts?.filter((item) => item.level0 === "bang-gia")}
            />
            <NavItem title="Blog" />
          </nav>

          {/* Hotline (Desktop) */}
          <div className="hidden lg:flex flex-col text-right justify-center">
            <span className="text-[11pt] uppercase text-white font-medium">
              TỔNG ĐÀI MIỄN PHÍ:
            </span>
            {/* Dùng class font-mono hoặc một font số riêng nếu cần giống hệt font digital */}
            <Link
              href={`tel:${ContactData?.Hotline}`}
              className="text-3xl font-bold text-yellow-400 tracking-wider"
            >
              {ContactData?.Hotline}
            </Link>
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
                href={`tel:${ContactData?.Hotline}`}
                className="block text-2xl font-bold text-[#137b38]"
              >
                {ContactData?.Hotline}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
