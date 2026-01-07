import { BlogsSelectType } from "@/db/schema";
import { BlogImages } from "../admin/blogs/blog-images";
import Link from "next/link";

interface BlogCardProps {
  blog: BlogsSelectType;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="flex flex-col gap-4 pb-10 border-b border-gray-200">
      {blog.images && (
        <div className="relative w-full h-[260px] overflow-hidden">
          <BlogImages title={blog.title} images={blog.images} />
        </div>
      )}

      <h2 className="text-2xl font-semibold text-gray-900">{blog.title}</h2>

      <p className="text-gray-600 leading-relaxed line-clamp-2 text-sm">
        {blog.description}
      </p>
      {/*<p className="text-gray-600 leading-relaxed">{shortDesc}</p> */}

      <Link
        href={`/blogs/${blog.id}`}
        className="text-sm underline text-gray-700 w-fit hover:text-black"
      >
        See more
      </Link>
    </article>
  );
}
