import BlogCard from "./BlogCard";
import { BlogsSelectType } from "@/db/schema";

interface BlogsFeedProps {
  blogs: BlogsSelectType[];
}

export default function BlogsFeed({ blogs }: BlogsFeedProps) {
  return (
    <main className="w-full min-h-screen bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {blogs && blogs.length > 0 ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </section>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[70vh] py-20">
            <div className="text-center space-y-4">
              <svg
                className="mx-auto h-24 w-24 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <h2 className="text-3xl font-bold tracking-tight text-black">
                No Blogs Found
              </h2>
              <p className="text-gray-500 max-w-sm mx-auto">
                There are no blog posts to display at the moment. Check back
                later for new content.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
