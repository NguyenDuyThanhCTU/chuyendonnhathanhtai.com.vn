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
      ? `${PostTitle.CollectionName} - Dọn Nhà Chuyên Nghiệp Thành Tài `
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
            {PostTitle?.CollectionName}
          </h1>
        </div>
      </section>

      {/* DANH SÁCH BÀI VIẾT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Datashow.map((post, index) => (
            <article
              key={index}
              className="group flex flex-col bg-white rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Ảnh Thumbnail */}
              <Link
                href={`/${post.url}`}
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
                  <Link href={`/${post.url}`}>{post.title}</Link>
                </h2>

                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                  <span className="font-medium text-gray-600">
                    {post.author
                      ? post.author
                      : "Dọn Nhà Chuyên Nghiệp Thành Tài "}
                  </span>
                  <span>|</span>
                  <span>{post.date}</span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {post.description}
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
