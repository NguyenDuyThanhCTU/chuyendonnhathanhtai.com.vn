import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function ProfessionalTeam() {
  const listItems = [
    "Tư vấn, tiếp nhận yêu cầu tận tình, chu đáo, thân thiện",
    "Nhân viên đóng gói cẩn trọng, bao lót tỉ mỉ gọn gàng",
    "Nhân viên vận chuyển có sức khoẻ tốt, hoạt bát, nhanh nhẹn",
    "Bác tài thông thạo đường xá, cẩn trọng trên từng nẻo đường",
    "Chăm sóc khách hàng niềm nở, vui vẻ, lịch sự.",
  ];

  return (
    <section className="flex flex-col lg:flex-row w-full">
      {/* CỘT TRÁI: Background tối màu có ảnh */}
      <div className="w-full lg:w-1/2 relative bg-gray-900 flex justify-end p-8 sm:p-12 lg:p-20 overflow-hidden">
        {/* Đổi đường dẫn ảnh này thành ảnh toà nhà/thành phố nền tối của bạn */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://chuyennhatrongoi24h.net/wp-content/uploads/2024/12/chuyen-nha-tron-goi.jpg')",
          }}
        ></div>

        {/* Nội dung cột trái */}
        <div className="relative z-10 w-full max-w-lg lg:pr-8 flex flex-col justify-center">
          <span className="text-[#a3e635] font-bold text-lg md:text-xl uppercase mb-2 block">
            CHUYỂN NHÀ TRỌN GÓI 24H
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase leading-snug mb-6">
            Dịch vụ vận chuyển <br /> Uy tín - Chất lượng
          </h2>
          <p className="text-gray-200 leading-relaxed text-[15px]">
            Với quy trình vận chuyển chuyên nghiệp,{" "}
            <strong>Chuyển Nhà Trọn Gói 24h</strong> đã được khách hàng bình
            chọn là đơn vị cung cấp dịch vụ uy tín – chuyên nghiệp – chất lượng
            tại thành phố Hồ Chí Minh và các khu vực lân cận.
          </p>
        </div>
      </div>

      {/* CỘT PHẢI: Background xanh lá */}
      <div className="w-full lg:w-1/2 bg-[#137b38] flex justify-start p-8 sm:p-12 lg:p-20">
        {/* Nội dung cột phải */}
        <div className="w-full max-w-lg lg:pl-8 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-6">
            Đội Ngũ Chuyên Nghiệp
          </h2>
          <p className="text-white leading-relaxed text-[15px] mb-8">
            Nhận thức ngay từ những ngày đầu được thành lập, chúng tôi đã không
            ngừng tìm kiếm và đào tạo để có thể xây dựng nên một đội ngũ nhân
            viên tận tâm nhất, khoẻ mạnh nhất, thân thiện nhất… để có thể mang
            đến Bạn những dịch vụ vận chuyển chuyên nghiệp nhất.
          </p>

          <ul className="space-y-4">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start text-white">
                <CheckCircle2 className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-[15px] font-medium leading-tight">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
