import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  FileText,
  Facebook,
  Youtube,
  MessageCircle,
  Music,
  PhoneCall,
} from "lucide-react";
import { SiZalo } from "react-icons/si";
import { LocalFindById } from "@components/items/Handle";
import { ContactProps, SocialMediaProps } from "@assets/props/PropsConfig";
import Link from "next/link";

export default function Footer({ Config }: { Config: Array<any> }) {
  const ContactData: ContactProps = LocalFindById(Config, "contact");
  const SocialMeedia: SocialMediaProps = LocalFindById(Config, "SocialMedia");

  return (
    <footer className="bg-[#0f5b27] text-gray-200 py-12 lg:py-16 border-t-4 border-[#4caf50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* CỘT 1: Thông tin */}
          <div>
            <h3 className="text-[#a3e635] text-lg font-bold uppercase mb-3">
              Thông tin
            </h3>
            <div className="w-12 h-0.5 bg-[#a3e635] mb-6"></div>
            <h4 className="text-white font-bold text-base mb-4">
              Dọn Nhà Chuyên Nghiệp Thành Tài
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#a3e635] flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  {ContactData?.CompanyAddress}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#a3e635] flex-shrink-0" />
                <Link
                  href={`tel:${ContactData?.Hotline}`}
                  className=" font-bold text-yellow-400 text-lg"
                >
                  {ContactData?.Hotline}
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#a3e635] flex-shrink-0" />
                <span className="text-sm">{ContactData?.Email}</span>
              </li>
            </ul>
          </div>

          {/* CỘT 2: Dịch vụ chính */}
          <div>
            <h3 className="text-[#a3e635] text-lg font-bold uppercase mb-3">
              Dịch vụ chính
            </h3>
            <div className="w-12 h-0.5 bg-[#a3e635] mb-6"></div>
            <ul className="space-y-3">
              {[
                {
                  name: "Dịch vụ chuyển trọ",
                  link: "/blogs/dich-vu-chuyen-tro",
                },
                { name: "Chuyển nhà chung cư", link: "/chuyen-nha-chung-cu" },

                { name: "Vận chuyển két sắt", link: "/dich-vu-chuyen-ket-sat" },
                { name: "Cho thuê xe tải", link: "/dich-vu-cho-thue-xe-tai" },
                { name: "Dịch vụ khác", link: "/blogs/dich-vu-khac" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-sm hover:text-white hover:pl-1 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#a3e635] rounded-full mr-2 opacity-70"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 3: Hỗ trợ khách hàng */}
          <div>
            <h3 className="text-[#a3e635] text-lg font-bold uppercase mb-3">
              Hỗ trợ khách hàng
            </h3>
            <div className="w-12 h-0.5 bg-[#a3e635] mb-6"></div>
            <ul className="space-y-3">
              {[
                { name: "Giới thiệu", link: "/blogs/gioi-thieu" },

                {
                  name: "Phương thức thanh toán",
                  link: "/phuong-thuc-thanh-toan",
                },
                {
                  name: "Chính sách bồi thường",
                  link: "/chinh-sach-boi-thuong",
                },
                { name: "Chính sách bảo mật", link: "/chinh-sach-bao-mat" },
                {
                  name: "Các câu hỏi thường gặp",
                  link: "/cac-cau-hoi-thuong-gap",
                },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-sm hover:text-white hover:pl-1 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#a3e635] rounded-full mr-2 opacity-70"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 4: Liên hệ với chúng tôi */}
          <div>
            <h3 className="text-[#a3e635] text-lg font-bold uppercase mb-3">
              Liên hệ với chúng tôi
            </h3>
            <div className="w-12 h-0.5 bg-[#a3e635] mb-6"></div>
            <div className="flex flex-wrap gap-4">
              <a
                href={SocialMeedia?.fanpage}
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 shadow-lg"
              >
                <Facebook className="w-5 h-5 text-white" fill="currentColor" />
              </a>
              <a
                href={SocialMeedia?.zalo}
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 shadow-lg"
              >
                <SiZalo className="w-5 h-5 text-white" />
              </a>
              <a
                href={`tel:${ContactData?.Hotline}`}
                className="w-10 h-10 rounded-full bg-[#0068FF] flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 shadow-lg"
              >
                <PhoneCall className="w-5 h-5 text-white" />
              </a>
            </div>

            {/* DMCA hoặc Copyright text (Tuỳ chọn) */}
            <div className="mt-8 text-xs text-gray-400">
              © 2026 Dọn Nhà Chuyên Nghiệp Thành Tài .
              <br />
              Đã đăng ký bản quyền.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
