import { Blog } from "@/types/blog";
import BlogCard from "./BlogCard";

interface BlogsFeedProps {
  blogs: Blog[];
}
export default function BlogsFeed({ blogs }: BlogsFeedProps) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {blogs.map((blog) => (
    <BlogCard key={blog.id} blog={blog} />
  ))}
</section>

    </main>
  );
}
