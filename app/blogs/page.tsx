import { db } from "@/db";
import BlogsFeed from "@/modules/Blogs/BlogFeed";

// export const blogs: Blog[] = [
//   {
//     id: "1",
//     title: "Understanding Zero Trust Security",
//     imageUrl: "/img/africa.jpg",
//     description:
//       "Zero Trust security eliminates implicit trust and continuously validates every request inside the network.",
//   },
//   {
//     id: "2",
//     title: "Why TypeScript Is Taking Over JavaScript",
//     imageUrl: "/img/africa.jpg",
//     description:
//       "TypeScript adds static typing to JavaScript, making large applications more reliable and maintainable.",
//   },
//   {
//     id: "3",
//     title: "Why TypeScript Is Taking Over JavaScript",
//     imageUrl: "/img/africa.jpg",
//     description:
//       "TypeScript adds static typing to JavaScript, making large applications more reliable and maintainable.",
//   },
//   {
//     id: "4",
//     title: "Why TypeScript Is Taking Over JavaScript",
//     imageUrl: "/img/asia.jpg",
//     description:
//       "TypeScript adds static typing to JavaScript, making large applications more reliable and maintainable.",
//   },
// ];

export default async function HomePage() {
  const blogLists = await db.query.blogs.findMany();
  return <BlogsFeed blogs={blogLists} />;
}
