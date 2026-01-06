"use client";

import Image from "next/image";
import { Blog } from "@/types/blog";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const router = useRouter();

  // const shortDesc = blog.description.length > 150
  //   ? blog.description.slice(0, 150) + "..."
  //   : blog.description;

  return (
    <article className="flex flex-col gap-4 pb-10 border-b border-gray-200">
      <div className="relative w-full h-[260px] overflow-hidden">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
        />
      </div>

      <h2 className="text-2xl font-semibold text-gray-900">{blog.title}</h2>

      <p className="text-gray-600 leading-relaxed line-clamp-2 text-sm">{blog.description}</p>
      {/*<p className="text-gray-600 leading-relaxed">{shortDesc}</p> */}

      <button
        onClick={() => router.push(`/blogs/${blog.id}`)}
        className="text-sm underline text-gray-700 w-fit hover:text-black"
      >
        See more
      </button>
    </article>
  );
}
