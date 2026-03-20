import { CategoryProps } from "@assets/props/Props";
import { PostProps } from "@assets/props/PropsPost";
import Sidebar from "@components/client/product/Sidebar";
import { PostMetadata } from "@components/items/HandleMetadata";
import { find } from "@config/lib/api";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params,
  searchParams,
}: BlogPageProps): Promise<Metadata> {
  const searchFilterParams: any = searchParams.filter;
  const searchCategory: any = searchParams.category;
  const Category: CategoryProps[] = await find("PostCategory");

  const PostTitle = await PostMetadata(
    searchCategory,
    searchFilterParams,
    Category,
    params.slug,
  );

  return {
    title: PostTitle.CollectionName
      ? `${PostTitle.CollectionName} - Mái xếp Nguyên Phát`
      : "Blogs",
  };
}

export default async function NewsPage({
  params,
  searchParams,
}: BlogPageProps) {
  const Posts = await find("Posts");
  const Category: CategoryProps[] = await find("PostCategory");
  const searchFilterParams: any = searchParams.filter;
  const searchCategory: any = searchParams.category;
  const ProductCategory: CategoryProps[] = await find("ProductCategory");

  let Datashow: PostProps[] = [];

  if (params.slug) {
    const LV0Data = Posts?.filter((Slug) => Slug.level0 === params.slug);
    Datashow = LV0Data;

    if (searchCategory) {
      const LV1Data = LV0Data?.filter((item) => item.level1 === searchCategory);
      Datashow = LV1Data;
      if (searchFilterParams) {
        const LV2Data = LV1Data?.filter((item) =>
          item.level2?.includes(searchFilterParams),
        );

        Datashow = LV2Data;
      }
    }
  }
  const PostTitle = await PostMetadata(
    searchCategory,
    searchFilterParams,
    Category,
    params.slug,
  );
  const posts = [
    {
      title:
        "Review 6+ công ty chuyển nhà & chuyển trọ uy tín TPHCM cập nhật 2026",
      author: "YP Làng",
      date: "Tháng 1 17, 2026",
      excerpt:
        "Tìm xe tải thì dễ, nhưng tìm được công ty chuyển nhà uy tín, làm việc cẩn thận và báo giá minh bạch mới là thử thách thực sự. Bài",
      image:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2026/01/cong-ty-chuyen-nha-chuyen-tro-768x576.jpg",
      link: "#",
    },
    {
      title:
        "Bật mí kinh nghiệm tự chuyển nhà tiết kiệm, nhanh chóng, hiệu quả",
      author: "YP Làng",
      date: "Tháng 1 15, 2026",
      excerpt:
        "Tự chuyển nhà là phương án giúp bạn tiết kiệm chi phí nhưng đòi hỏi sức khỏe và khả năng sắp xếp công việc tốt. Nếu không có kế hoạch",
      image:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2026/01/kinh-nghiem-tu-chuyen-nha-768x576.jpg",
      link: "#",
    },
    {
      title: "Những điều cần tránh khi thuê xe tải chuyển nhà",
      author: "YP Làng",
      date: "Tháng 1 13, 2026",
      excerpt:
        "Thuê xe tải chuyển nhà đang trở thành xu thế phổ biến của nhiều gia đình nhờ tính chủ động, linh hoạt và tiết kiệm chi phí. Tuy nhiên, chỉ",
      image:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2026/01/Nhung-dieu-can-tranh-khi-thue-xe-tai-chuyen-nha-768x576.jpg",
      link: "#",
    },
    {
      title: "Cách cúng phòng trọ mới thuê cho sinh viên & người đi làm",
      author: "YP Làng",
      date: "Tháng 1 8, 2026",
      excerpt:
        "Chuyển đến một nơi ở mới luôn mang lại cảm giác vừa háo hức, vừa lo lắng. Đặc biệt với các bạn sinh viên hay người đi làm xa nhà,",
      image:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2026/01/cach-cung-phong-tro-moi-thue-768x576.jpg",
      link: "#",
    },
    {
      title: "Cách thuê nhà trọ sinh viên TP HCM chi tiết từ A-Z",
      author: "YP Làng",
      date: "Tháng mười một 14, 2025",
      excerpt:
        "Mỗi năm hàng chục nghìn sinh viên từ khắp nơi đổ về TP HCM để học tập kéo theo nhu cầu thuê nhà trọ tăng mạnh. Tuy nhiên, việc tìm",
      image:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2025/11/Cach-thue-nha-tro-sinh-vien-768x576.jpg",
      link: "#",
    },
    {
      title: "Hướng dẫn chuyển nhà trọ cho người cao tuổi an toàn, hiệu quả",
      author: "YP Làng",
      date: "Tháng mười một 11, 2025",
      excerpt:
        "Việc chuyển nhà trọ cho người cao tuổi đòi hỏi sự chu đáo, an toàn và tinh tế trong từng bước chuẩn bị. Từ sắp xếp đồ đạc, chăm sóc",
      image:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2025/11/Chuyen-nha-tro-cho-nguoi-cao-tuoi-768x576.jpg",
      link: "#",
    },
    {
      title:
        "Kinh nghiệm chuyển nhà trọ cho gia đình có trẻ nhỏ an toàn và nhẹ nhàng",
      author: "YP Làng",
      date: "Tháng mười một 11, 2025",
      excerpt:
        "Với các gia đình có trẻ nhỏ, việc chuyển nhà trọ luôn là một hành trình đầy thử thách. Không chỉ cần sắp xếp hàng loạt đồ đạc cồng kềnh,",
      image:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2025/11/Chuyen-nha-tro-cho-gia-dinh-co-tre-nho-768x576.jpg",
      link: "#",
    },
    {
      title: "Checklist chuyển trọ 2026 đầy đủ, chi tiết từ A-Z",
      author: "YP Làng",
      date: "Tháng 10 12, 2025",
      excerpt:
        "Chuyển trọ tưởng đơn giản nhưng lại tiềm ẩn vô số rắc rối nếu bạn không có kế hoạch cụ thể ngay từ đầu. Chỉ cần quên một món đồ,",
      image:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2025/10/Checklist-chuyen-tro-768x576.jpg",
      link: "#",
    },
    {
      title: "7 Sai lầm thường gặp khi chuyển trọ và cách tránh hiệu quả",
      author: "YP Làng",
      date: "Tháng 10 4, 2025",
      excerpt:
        "Chuyển trọ vốn là trải nghiệm rất đỗi quen thuộc đối với nhiều người, đặc biệt là công nhân, người lao động và sinh viên. Dù đây chỉ là công",
      image:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2025/10/7-sai-lam-thuong-gap-khi-chuyen-tro-768x576.jpg",
      link: "#",
    },
    {
      title: "Nên tự chuyển nhà hay thuê dịch vụ? So sánh chi tiết từ A-Z",
      author: "YP Làng",
      date: "Tháng 9 26, 2025",
      excerpt:
        "Nên tự chuyển nhà hay thuê dịch vụ là câu hỏi khiến nhiều gia đình phân vân mỗi khi có kế hoạch dọn sang chỗ ở mới. Tự chuyển nhà",
      image:
        "https://chuyennhatrongoi24h.net/wp-content/uploads/2025/09/Nen-tu-chuyen-nha-hay-thue-dich-vu-768x576.jpg",
      link: "#",
    },
  ];
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* HEADER BANNER */}
      <section className="relative w-full py-16 bg-gradient-to-r from-[#0d5924] to-[#137b38] flex items-center justify-center">
        {/* Lớp nền mờ giả lập thành phố từ Header */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://chuyennhatrongoi24h.net/wp-content/uploads/2024/11/chuyen-van-phong.jpg')",
          }}
        ></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md">
            Cẩm nang chuyển trọ
          </h1>
        </div>
      </section>

      {/* DANH SÁCH BÀI VIẾT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group flex flex-col bg-white rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Ảnh Thumbnail */}
              <Link
                href={post.link}
                className="relative block aspect-[4/3] w-full bg-gray-100 overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Link>

              {/* Nội dung */}
              <div className="pt-5 pb-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-gray-800 hover:text-[#137b38] transition-colors mb-2 leading-snug line-clamp-2">
                  <Link href={post.link}>{post.title}</Link>
                </h2>

                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                  <span className="font-medium text-gray-600">
                    {post.author}
                  </span>
                  <span>|</span>
                  <span>{post.date}</span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Nút Xem Thêm (Load More) */}
        <div className="mt-16 flex justify-center">
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2.5 px-8 rounded-sm transition-colors duration-300 text-sm">
            Xem thêm
          </button>
        </div>
      </main>
    </div>
  );
}
