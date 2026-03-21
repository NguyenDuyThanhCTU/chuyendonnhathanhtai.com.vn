import React from "react";
import Image from "next/image";

export default function FeatureSection() {
  const features = [
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/xedulichhoanggia.firebasestorage.app/o/icon-1.webp?alt=media&token=c2a337bf-fbe2-4747-a27d-69457534ba6f",
      text: "Thiết bị, đồ đạc<br/>đóng gói cẩn thận",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/xedulichhoanggia.firebasestorage.app/o/icon-2.webp?alt=media&token=1ab5dc59-1d50-4ae1-bd51-8a567d476065",
      text: "Giá tốt, tiết kiệm<br/>cho khách hàng",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/xedulichhoanggia.firebasestorage.app/o/icon-3.webp?alt=media&token=c3daf2fa-7733-40b8-82e1-c599a465274a",
      text: "Bồi thường khi<br/>đồ đạc bị hư hỏng",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/xedulichhoanggia.firebasestorage.app/o/icon-4.webp?alt=media&token=40f41eaf-038e-4d68-9589-a504c7f27c79",
      text: "Nhân viên làm việc <br/>chuyên nghiệp và nhiệt tình",
    },
  ];

  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-16 md:-mt-24 lg:-mt-32">
      <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Nửa bên trái: Background xanh lá */}
        <div className="lg:w-[45%] bg-[#137b38] text-white p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-6 uppercase tracking-tight">
            Về Dọn Nhà Chuyên Nghiệp Thành Tài
          </h2>
          <div className="text-sm lg:text-base leading-relaxed opacity-95 space-y-4">
            <p>
              <strong>Dọn Nhà Chuyên Nghiệp Thành Tài </strong> là một trong
              những đơn vị dẫn đầu đã hoạt động và phát triển hơn 10 năm trong
              lĩnh vực vận chuyển nhà – chuyển văn phòng trọn gói cao cấp và
              chuyển kho xưởng.
            </p>
            <p>
              Cùng với sự nỗ lực không ngừng của Ban lãnh đạo và đội ngũ nhân
              viên công ty. Chúng tôi mang đến quý khách hàng các dịch với chất
              lượng tốt nhất.
            </p>
          </div>
        </div>

        {/* Nửa bên phải: Lưới 4 icon */}
        {/* Sử dụng bg-gray-200 và gap-[1px] là 1 trick CSS cực hay để tạo viền (border) chìm mỏng giữa các thẻ */}
        <div className="lg:w-[55%] bg-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-[1px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 flex flex-col items-center justify-center text-center group hover:bg-green-50/50 transition-colors duration-300"
            >
              {/* Box chứa icon */}
              <div className="w-16 h-16 relative mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={feature.icon}
                  alt="Feature icon"
                  fill
                  className="object-contain"
                  sizes="(max-width: 64px) 100vw, 64px"
                />
              </div>
              {/* Text - Dùng dangerouslySetInnerHTML để render thẻ <br/> có trong data */}
              <p
                className="text-[15px] font-bold text-gray-800 leading-snug"
                dangerouslySetInnerHTML={{ __html: feature.text }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
