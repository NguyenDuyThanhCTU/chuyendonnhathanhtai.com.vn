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
} from "lucide-react";

export default function Footer() {
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
              CHUYỂN NHÀ TRỌN GÓI 24H
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#a3e635] flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  23 Đường số 10, Phường Bình Trị Đông, TPHCM (thuộc Phường Bình
                  Hưng Hòa A, Quận Bình Tân cũ).
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#a3e635] flex-shrink-0" />
                <span className="text-sm font-bold text-yellow-400 text-lg">
                  1800.00.38
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#a3e635] flex-shrink-0" />
                <span className="text-sm">Chuyennha24h.info@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#a3e635] flex-shrink-0" />
                <span className="text-sm">MST: 0317021496</span>
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
                { name: "Dịch vụ chuyển trọ TPHCM", link: "#" },
                { name: "Chuyển nhà chung cư", link: "#" },
                { name: "Dịch vụ chuyển đồ", link: "#" },
                { name: "Vận chuyển két sắt", link: "#" },
                { name: "Chuyển nhà trọn gói", link: "#" },
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
                { name: "Giới thiệu", link: "#" },
                { name: "Tuyển dụng", link: "#" },
                { name: "Phương thức thanh toán", link: "#" },
                { name: "Chính sách bồi thường", link: "#" },
                { name: "Chính sách bảo mật", link: "#" },
                { name: "Cẩm nang chuyển trọ", link: "#" },
                { name: "Các câu hỏi thường gặp", link: "#" },
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
                href="#"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 shadow-lg"
              >
                <Facebook className="w-5 h-5 text-white" fill="currentColor" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 shadow-lg"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0068FF] flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 shadow-lg"
              >
                <Music className="w-5 h-5 text-white" />
              </a>
            </div>

            {/* DMCA hoặc Copyright text (Tuỳ chọn) */}
            <div className="mt-8 text-xs text-gray-400">
              © 2026 Chuyển Nhà Trọn Gói 24H.
              <br />
              Đã đăng ký bản quyền.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
