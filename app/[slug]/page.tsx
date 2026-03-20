import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, List } from "lucide-react";

export default function ArticleDetail() {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* HERO BANNER BÀI VIẾT */}
      <section className="relative w-full py-16 md:py-24 bg-gray-900 flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://chuyennhatrongoi24h.net/wp-content/uploads/2024/11/chuyen-van-phong.jpg')",
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-snug drop-shadow-md">
            Bảng giá dịch vụ chuyển kho xưởng TPHCM trọn gói giá rẻ 2026
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumbs */}
        <nav
          className="flex items-center text-sm text-gray-500 mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#137b38] transition-colors">
            Trang chủ
          </Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <Link
            href="/bang-gia"
            className="hover:text-[#137b38] transition-colors"
          >
            Bảng giá
          </Link>
        </nav>

        {/* Article Body */}
        <article className="prose max-w-none prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#137b38] prose-a:no-underline hover:prose-a:underline prose-h2:text-[#137b38] prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-li:text-gray-700">
          <p className="mb-6">
            <span className="font-normal">
              Việc chuyển kho xưởng tại TP.HCM không chỉ đòi hỏi sự an toàn và
              đúng tiến độ mà còn phải đảm bảo chi phí hợp lý, phù hợp với ngân
              sách của doanh nghiệp. Hiểu được những lo lắng đó, Chuyển Nhà Trọn
              Gói 24h mang đến dịch vụ chuyển kho xưởng trọn gói với mức giá rẻ
              và nhiều ưu đãi, giúp bạn giải quyết mọi khó khăn một cách nhanh
              chóng và hiệu quả. Với bảng giá minh bạch, dịch vụ chuyên nghiệp,{" "}
              <Link href="/">Chuyển Nhà Trọn Gói 24h</Link> tự tin là lựa chọn
              tối ưu cho mọi nhu cầu chuyển kho xưởng tại TP.HCM.
            </span>
          </p>

          {/* Table of Contents (Mục lục) */}
          <div className="bg-gray-50 border border-gray-200 rounded-md p-5 mb-10 w-full md:w-fit">
            <p className="font-bold text-lg mb-3 flex items-center text-gray-800">
              <List className="w-5 h-5 mr-2 text-[#137b38]" /> Nội dung
            </p>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <a
                  href="#cac-yeu-to"
                  className="text-[#137b38] font-medium hover:underline text-[15px]"
                >
                  1. Các yếu tố ảnh hưởng đến giá dịch vụ chuyển kho xưởng
                </a>
              </li>
              <li>
                <a
                  href="#bang-gia"
                  className="text-[#137b38] font-medium hover:underline text-[15px]"
                >
                  2. Bảng giá dịch vụ di dời kho xưởng trọn gói
                </a>
              </li>
              <li>
                <a
                  href="#quy-trinh"
                  className="text-[#137b38] font-medium hover:underline text-[15px]"
                >
                  3. Quy trình chuyển kho xưởng trọn gói tại Chuyển Nhà Trọn Gói
                  24h
                </a>
              </li>
              <li>
                <a
                  href="#pham-vi"
                  className="text-[#137b38] font-medium hover:underline text-[15px]"
                >
                  4. Chuyển Nhà Trọn Gói 24h cung cấp dịch vụ chuyển kho xưởng
                  trọn gói trên phạm vi nào?
                </a>
              </li>
              <li>
                <a
                  href="#cam-ket"
                  className="text-[#137b38] font-medium hover:underline text-[15px]"
                >
                  5. Cam kết của dịch vụ chuyển kho xưởng trọn gói - Chuyển Nhà
                  Trọn Gói 24h
                </a>
              </li>
            </ul>
          </div>

          <h2 id="cac-yeu-to" className="flex items-center">
            Các yếu tố ảnh hưởng đến giá dịch vụ chuyển kho xưởng
          </h2>

          <figure className="my-6">
            <div className="relative w-full aspect-[4/3] md:aspect-video rounded-md overflow-hidden bg-gray-100">
              <Image
                src="https://chuyennhatrongoi24h.net/wp-content/uploads/2024/11/cac-yeu-to-anh-huong-den-gia-dich-vu-chuyen-kho-xuong.jpg"
                alt="Các yếu tố ảnh hưởng đến giá dịch vụ chuyển kho xưởng"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="text-center italic text-sm text-gray-500 mt-3">
              Các yếu tố ảnh hưởng đến giá dịch vụ chuyển kho xưởng
            </figcaption>
          </figure>

          <p className="mb-4">
            <b>Giá dịch vụ chuyển kho xưởng phụ thuộc vào những yếu tố nào?</b>{" "}
            Để giải đáp các thắc mắc cho doanh nghiệp, dưới đây là những yếu tố
            chính ảnh hưởng đến giá chuyển kho xưởng mà bạn cần biết:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>
              <b>Quy mô kho xưởng:</b> Diện tích và số lượng hàng hóa tại kho,
              loại hàng hóa, máy móc cần vận chuyển có nặng cồng kềnh hoặc yêu
              cầu xử lý đặc biệt không? Kho có chứa nhiều trang thiết bị máy móc
              lớn như máy công nghiệp, máy cắt, máy gia công CNC, máy hàn...
            </li>
            <li>
              <b>Khoảng cách vận chuyển:</b> Nếu khoảng cách từ kho xưởng cũ đến
              kho xưởng mới quá xa, sẽ dẫn đến thời gian vận chuyển lâu hơn, làm
              tăng chi phí nguyên liệu và phát sinh thêm các chi phí khác như:
              bến bãi, cầu đường,…
            </li>
            <li>
              <b>Địa hình vận chuyển:</b> Trường hợp kho xưởng của bạn nằm ở hẻm
              nhỏ, khó tiếp cận, xe tải không vào được, thì phải thuê thêm các
              phương tiện khác hỗ trợ như xe máy, xe ba gác, xe đẩy,… và thêm
              nhân công bốc xếp.
            </li>
            <li>
              <b>Số lượng nhân công bốc xếp:</b> Dự án càng lớn, đồ đạc máy móc
              càng nhiều thì phải thuê nhiều nhân công bốc xếp, đồng nghĩa giá
              dịch vụ sẽ tăng theo.
            </li>
            <li>
              <b>Số lượng xe tải và trang thiết bị hỗ trợ:</b> Số lượng phương
              tiện vận tải (xe tải, xe cẩu, xe nâng) hoặc vật liệu đóng gói
              (thùng carton, màng PE) sử dụng càng nhiều thì giá sẽ tăng.
            </li>
            <li>
              <b>Chi phí tháo lắp:</b> Đối với hàng hóa hoặc thiết bị yêu cầu
              tháo lắp hoặc vận hành kỹ thuật cao sẽ cần sự trợ giúp của kỹ sư,
              chi phí sẽ cao hơn.
            </li>
            <li>
              <b>Đơn vị cung cấp dịch vụ:</b> Khi thuê các đơn vị uy tín, chuyên
              nghiệp, giá dịch vụ sẽ hợp lý, giúp doanh nghiệp tránh tình trạng
              "chặt chém".
            </li>
          </ul>

          <h2 id="bang-gia">Bảng giá dịch vụ di dời kho xưởng trọn gói</h2>
          <p className="mb-4">
            Khi tìm kiếm dịch vụ chuyển kho xưởng trọn gói tại Chuyển Nhà Trọn
            Gói 24h, nhiều khách hàng thắc mắc về giá cả. Dưới đây là bảng giá
            tham khảo chi tiết để bạn dễ dàng tham khảo.
          </p>
          <p className="mb-6 font-bold text-[#137b38] bg-green-50 inline-block px-4 py-2 rounded">
            Giá dịch vụ = Chi phí thuê xe + Chi phí bốc xếp + Các chi phí khác
          </p>

          <h3 className="font-bold text-xl text-gray-800 mb-4">
            Giá cước thuê xe tải chuyển kho xưởng
          </h3>
          <div className="overflow-x-auto mb-8 shadow-sm rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left whitespace-nowrap">
              <thead className="text-xs text-white uppercase bg-[#137b38]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 border-r border-green-600 text-center"
                  >
                    Loại xe
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border-r border-green-600 text-center"
                  >
                    Kích thước lòng thùng
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border-r border-green-600 text-center"
                  >
                    Số khối
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border-r border-green-600 text-center"
                  >
                    10 km Đầu
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    11 – 50km
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 border-r">
                    Xe tải Van 940 kg
                  </td>
                  <td className="px-6 py-4 text-center border-r">
                    2m96 x 1m73 x 1m38
                  </td>
                  <td className="px-6 py-4 text-center border-r">7m³</td>
                  <td className="px-6 py-4 text-center font-bold text-red-600 border-r">
                    400,000 đ
                  </td>
                  <td className="px-6 py-4 text-center">20.000 đ</td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900 border-r">
                    Xe tải 1.2 tấn
                  </td>
                  <td className="px-6 py-4 text-center border-r">
                    3m x 1m6 x 1m6
                  </td>
                  <td className="px-6 py-4 text-center border-r">7,68m³</td>
                  <td className="px-6 py-4 text-center font-bold text-red-600 border-r">
                    450,000 đ
                  </td>
                  <td className="px-6 py-4 text-center">23,000 đ</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 border-r">
                    Xe tải 1,7 tấn
                  </td>
                  <td className="px-6 py-4 text-center border-r">
                    4m3 x 1m7 x 1m7
                  </td>
                  <td className="px-6 py-4 text-center border-r">12,47m³</td>
                  <td className="px-6 py-4 text-center font-bold text-red-600 border-r">
                    600,000 đ
                  </td>
                  <td className="px-6 py-4 text-center">28,000 đ</td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900 border-r">
                    Xe tải Thùng bạt 6m | 1,7 tấn
                  </td>
                  <td className="px-6 py-4 text-center border-r">
                    6m2 x 2m x 2m13
                  </td>
                  <td className="px-6 py-4 text-center border-r">26,4m³</td>
                  <td className="px-6 py-4 text-center font-bold text-red-600 border-r">
                    900,000 đ
                  </td>
                  <td className="px-6 py-4 text-center">38,000 đ</td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 border-r">
                    Xe tải 2.5 tấn thùng mui bạt
                  </td>
                  <td className="px-6 py-4 text-center border-r">
                    6m2 x 2m x 2m
                  </td>
                  <td className="px-6 py-4 text-center border-r">24,8m³</td>
                  <td className="px-6 py-4 text-center font-bold text-red-600 border-r">
                    1,000,000 đ
                  </td>
                  <td className="px-6 py-4 text-center">45,000 đ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-xl text-gray-800 mb-4">
            Bảng giá bốc xếp chuyển kho xưởng
          </h3>
          <div className="overflow-x-auto mb-8 shadow-sm rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left whitespace-nowrap">
              <thead className="text-xs text-white uppercase bg-[#137b38]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 border-r border-green-600 text-center"
                  >
                    Loại xe
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border-r border-green-600 text-center"
                  >
                    Thời gian chờ
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border-r border-green-600 text-center"
                  >
                    Phí bốc xếp 2 đầu
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 border-r">
                    Xe tải 1.2 tấn
                  </td>
                  <td className="px-6 py-4 text-center border-r">
                    100,000 đ/giờ
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-gray-800">
                    600.000 đ
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900 border-r">
                    Xe tải 1,7 tấn
                  </td>
                  <td className="px-6 py-4 text-center border-r">
                    150.000 đ/giờ
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-gray-800">
                    1.000.000 đ
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 border-r">
                    Xe tải Thùng bạt 6m | 3 tấn
                  </td>
                  <td className="px-6 py-4 text-center border-r">
                    200,000 đ/giờ
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-gray-800">
                    2.000.000 đ
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900 border-r">
                    Xe tải 10 tấn Thùng bạt
                  </td>
                  <td className="px-6 py-4 text-center border-r">
                    300,000 đ/giờ
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-blue-600">
                    Liên hệ báo giá
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-xl text-gray-800 mb-4">
            Chi phí khác (nếu có)
          </h3>
          <div className="overflow-x-auto mb-6 shadow-sm rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left">
              <tbody>
                <tr className="bg-white border-b">
                  <td className="px-6 py-3 font-medium border-r w-1/2">
                    Thùng carton (60x40x40 cm)
                  </td>
                  <td className="px-6 py-3 text-red-600 font-medium">
                    23.000 VNĐ/Thùng
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-6 py-3 font-medium border-r">
                    Màng PE bọc lót đồ đạc
                  </td>
                  <td className="px-6 py-3 font-medium text-[#137b38]">
                    Miễn phí
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-3 font-medium border-r">
                    Công tháo ráp máy lạnh
                  </td>
                  <td className="px-6 py-3 font-medium">
                    200k/ 1 bộ (bảo hành 1 tháng)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-3 font-medium border-r">
                    Tháo ráp đồ đạc nội thất / Bốc xếp cầu thang bộ
                  </td>
                  <td className="px-6 py-3 font-medium text-blue-600">
                    Liên hệ khảo sát
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-8 text-sm italic text-gray-600 bg-yellow-50 p-4 border-l-4 border-yellow-400">
            <b className="text-yellow-700">Lưu ý:</b> Tùy thuộc vào từng dự án
            mà mức giá dịch vụ chuyển kho xưởng sẽ khác nhau, để được báo giá
            nhanh chóng và chính xác nhất, bạn hãy liên hệ cho Chuyển Nhà Trọn
            Gói 24h qua hotline chính <b>1800.00.38</b>.
          </p>

          <h2 id="quy-trinh">
            Quy trình chuyển kho xưởng trọn gói tại Chuyển Nhà Trọn Gói 24h
          </h2>
          <p className="mb-4">
            Trải qua hơn 10 năm hoạt động, dịch vụ chuyển kho xưởng trọn gói của
            Chuyển Nhà Trọn Gói 24h đã được rất nhiều khách hàng tin cậy. Quy
            trình 5 bước đơn giản, chuyên nghiệp:
          </p>
          <ul className="list-decimal pl-6 space-y-2 mb-8 font-medium text-gray-800">
            <li>Tư vấn dịch vụ và khảo sát kho xưởng cũ.</li>
            <li>Tiến hành báo giá và ký kết hợp đồng chuyển kho xưởng.</li>
            <li>
              Tiến hành chuyển kho xưởng (tháo lắp, đóng gói, vận chuyển, lắp
              đặt).
            </li>
            <li>Nghiệm thu dự án chuyển kho xưởng.</li>
            <li>Chăm sóc khách hàng sau dịch vụ.</li>
          </ul>

          <h2 id="pham-vi">
            Chuyển Nhà Trọn Gói 24h cung cấp dịch vụ trên phạm vi nào?
          </h2>

          <figure className="my-6">
            <div className="relative w-full aspect-[4/3] md:aspect-video rounded-md overflow-hidden bg-gray-100">
              <Image
                src="https://chuyennhatrongoi24h.net/wp-content/uploads/2024/11/pham-vi-cung-cap-dich-vu-chuyen-kho-xuong-tai-chuyennha24h.jpg"
                alt="Phạm vi cung cấp dịch vụ chuyển kho xưởng"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="text-center italic text-sm text-gray-500 mt-3">
              Chuyển Nhà Trọn Gói 24h cung cấp dịch vụ chuyển kho xưởng trọn gói
              trên phạm vi nào?
            </figcaption>
          </figure>

          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>
              <b>Chuyển kho xưởng nội thành TPHCM:</b> Khắp các quận trung tâm
              của TPHCM như: Quận 1, 3, 4, 5, 10, 11, 7, 12, Bình Tân, Tân Phú,
              Gò Vấp, Phú Nhuận, Bình Thạnh, TP. Thủ Đức và các huyện ven trung
              tâm.
            </li>
            <li>
              <b>Chuyển kho xưởng từ TPHCM đi các tỉnh lân cận:</b> Bình Dương,
              Đồng Nai, Long An, Tây Ninh, Tiền Giang, Bến Tre...
            </li>
            <li>
              <b>Chuyển kho xưởng đi tỉnh:</b> Hỗ trợ chuyển kho xưởng từ TP.HCM
              đến các tỉnh thành trên toàn quốc, bao gồm cả khu vực miền Trung,
              miền Bắc và Tây Nguyên.
            </li>
          </ul>

          <h2 id="cam-ket">Cam kết của dịch vụ chuyển kho xưởng trọn gói</h2>

          <figure className="my-6">
            <div className="relative w-full aspect-[4/3] md:aspect-video rounded-md overflow-hidden bg-gray-100">
              <Image
                src="https://chuyennhatrongoi24h.net/wp-content/uploads/2024/11/cam-ket-cua-dich-vu-chuyen-kho-xuong-24h.jpg"
                alt="Cam kết của dịch vụ chuyển kho xưởng trọn gói"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="text-center italic text-sm text-gray-500 mt-3">
              Cam kết của dịch vụ chuyển kho xưởng trọn gói – Chuyển Nhà Trọn
              Gói 24h
            </figcaption>
          </figure>

          <p className="mb-4">
            Với sứ mệnh mang đến cho khách hàng dịch vụ chuyển kho xưởng trọn
            gói chất lượng cao, Chuyển Nhà Trọn Gói 24h cam kết mang đến sự hài
            lòng tuyệt đối:
          </p>
          <ul className="list-none space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-[#137b38] mr-2">✔️</span>
              Hoàn tiền 100% nếu như khách hàng không hài lòng với chất lượng
              dịch vụ.
            </li>
            <li className="flex items-start">
              <span className="text-[#137b38] mr-2">✔️</span>
              Không phát sinh các phụ phí khác ngoài hợp đồng ngay cả khi có
              thêm đồ đạc.
            </li>
            <li className="flex items-start">
              <span className="text-[#137b38] mr-2">✔️</span>
              Trong trường hợp xảy ra hư hại hoặc thất thoát đồ đạc, công ty cam
              kết đền bù 100% giá trị tài sản.
            </li>
            <li className="flex items-start">
              <span className="text-[#137b38] mr-2">✔️</span>
              Đội ngũ tài xế và phụ xe sẽ hỗ trợ bốc xếp hàng hóa lên xe mà
              không thu thêm phí.
            </li>
            <li className="flex items-start">
              <span className="text-[#137b38] mr-2">✔️</span>
              Hệ thống xe tải đa dạng tải trọng, kích thước từ 2m – 6m, được vệ
              sinh, bảo dưỡng định kỳ.
            </li>
          </ul>
        </article>
      </main>
    </div>
  );
}
