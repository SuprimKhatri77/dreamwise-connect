"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { blogs } from "../page";

export default function BlogPageClient() {
  const params = useParams();
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) return <p className="text-center py-10">Blog not found</p>;

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>
      <div className="relative w-full h-[350px] mb-6 overflow-hidden">
        <Image src={blog.imageUrl} alt={blog.title} fill className="object-cover" />
      </div>
      <p className="text-gray-700 leading-relaxed text-lg">{blog.description}</p>
    </main>
  );
}
