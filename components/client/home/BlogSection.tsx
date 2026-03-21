import React from "react";
import Image from "next/image";
import { PostProps } from "@assets/props/PropsPost";

export default function BlogSection({ Data }: { Data: PostProps[] }) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề Section */}
        <div className="text-center mb-10">
          <span className="text-[#a3e635] font-bold text-sm tracking-widest uppercase block mb-1">
            BLOG
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#137b38] uppercase">
            BÀI VIẾT MỚI NHẤT
          </h2>
        </div>

        {/* Bố cục Grid 2 cột */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CỘT TRÁI: Bài viết nổi bật */}
          <div className="group cursor-pointer">
            <a
              href={Data[0]?.url}
              className="block overflow-hidden rounded-md mb-4 relative"
            >
              <div className="aspect-[4/3] w-full relative bg-gray-100">
                <Image
                  src={Data[0]?.image}
                  alt={Data[0]?.title}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </a>
            <div>
              <a href={Data[0]?.url}>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 hover:text-[#137b38] transition-colors duration-300 mb-2 leading-snug">
                  {Data[0]?.title}
                </h3>
              </a>
              <span className="text-sm text-gray-500">{Data[0]?.date}</span>
            </div>
          </div>

          {/* CỘT PHẢI: Danh sách bài viết nhỏ */}
          <div className="flex flex-col gap-6">
            {Data.slice(1, Data.length - 1).map((post, index) => (
              <a
                key={index}
                href={post.url}
                className="group flex flex-row items-center gap-4 bg-white hover:bg-gray-50 transition-colors duration-300 p-2 -mx-2 rounded-md"
              >
                {/* Thumbnail nhỏ */}
                <div className="w-1/3 sm:w-40 flex-shrink-0 relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 33vw, 160px"
                  />
                </div>

                {/* Thông tin bài viết */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 group-hover:text-[#137b38] transition-colors duration-300 leading-snug line-clamp-3 mb-1">
                    {post.title}
                  </h3>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
