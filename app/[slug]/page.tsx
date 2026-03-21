import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, List } from "lucide-react";
import { Metadata } from "next";
import { find } from "@config/lib/api";
import { PostProps } from "@assets/props/PropsPost";
import { CategoryProps } from "@assets/props/Props";

interface PostsDetailProps {
  params: { slug: string };
}
export async function generateMetadata({
  params,
}: PostsDetailProps): Promise<Metadata> {
  const posts = await find("Posts");

  const Data: PostProps = posts?.find(
    (item: PostProps) => item.url == params.slug,
  );
  return {
    title: Data?.title ? Data?.title : "Bài viết",
    description: Data?.description,
  };
}

export default async function ArticleDetail({ params }: PostsDetailProps) {
  const Posts = await find("Posts");
  const post: PostProps = Posts?.find(
    (item: PostProps) => item.url == params.slug,
  );
  // Dữ liệu Sidebar (Có thể tách ra component riêng nếu muốn)
  const sidebarLatestPosts = Posts?.slice(0, 6);
  const sidebarRelatedPosts = Posts?.filter(
    (item) => item.level0 === post?.level0,
  );

  return (
    <div className="min-h-screen font-sans bg-white">
      {/* VÙNG NỘI DUNG CHÍNH (LAYOUT 2 CỘT) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-10">
        {/* ================================================== */}
        {/* CỘT TRÁI: BÀI VIẾT (Width ~ 66%) */}
        {/* ================================================== */}
        <main className="w-full lg:w-2/3">
          {/* Breadcrumbs */}
          <nav
            className="flex items-center text-sm text-gray-500 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#137b38] transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <div className="hover:text-[#137b38] transition-colors">
              {post?.title}
            </div>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-[32px] font-bold text-gray-900 mb-6 leading-tight">
            {post?.title}
          </h1>

          {/* Article Content */}
          <article
            dangerouslySetInnerHTML={{
              __html: post?.content
                ? post?.content
                : "Bài viết đang được cập nhật!",
            }}
            className="ck-content prose max-w-none prose-p:text-gray-800 prose-p:leading-relaxed prose-p:text-[16px] prose-a:text-[#137b38] prose-a:no-underline hover:prose-a:underline prose-h2:text-[#137b38] prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4"
          ></article>
        </main>

        {/* ================================================== */}
        {/* CỘT PHẢI: SIDEBAR (Width ~ 33%, Sticky) */}
        {/* ================================================== */}
        <aside className="w-full lg:w-1/3">
          <div className="sticky top-24 space-y-10">
            {/* KHỐI 1: BÀI VIẾT MỚI NHẤT */}
            <div>
              <div className="bg-[#137b38] text-white py-3 px-4 rounded-t-md">
                <h3 className="font-bold text-lg uppercase">
                  Bài viết mới nhất
                </h3>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-md p-4 bg-gray-50 flex flex-col gap-5">
                {sidebarLatestPosts.map((post, idx) => (
                  <Link
                    href={`/${post?.url}`}
                    key={idx}
                    className="group flex items-center gap-3"
                  >
                    <div className="w-[100px] h-[75px] relative flex-shrink-0 rounded-sm overflow-hidden bg-gray-200">
                      <Image
                        src={post?.image}
                        alt={post?.title}
                        fill
                        className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-[14px] font-bold text-gray-800 leading-snug group-hover:text-[#137b38] transition-colors line-clamp-3">
                        {post?.title}
                      </h4>
                      <span className="text-xs text-gray-500 mt-1">
                        {post?.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* KHỐI 2: BÀI VIẾT LIÊN QUAN */}
            <div>
              <div className="bg-[#137b38] text-white py-3 px-4 rounded-t-md">
                <h3 className="font-bold text-lg uppercase">
                  Bài viết liên quan
                </h3>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-md p-4 bg-gray-50 flex flex-col gap-5">
                {sidebarRelatedPosts.map((post, idx) => (
                  <Link
                    href={`/${post?.url}`}
                    key={idx}
                    className="group flex items-center gap-3"
                  >
                    <div className="w-[100px] h-[75px] relative flex-shrink-0 rounded-sm overflow-hidden bg-gray-200">
                      <Image
                        src={post?.image}
                        alt={post?.title}
                        fill
                        className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-[14px] font-bold text-gray-800 leading-snug group-hover:text-[#137b38] transition-colors line-clamp-3">
                        {post?.title}
                      </h4>
                      <span className="text-xs text-gray-500 mt-1">
                        {post?.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
