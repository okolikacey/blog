import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-utils";

// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt: "etting-started-with-nextjs",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs2",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt: "etting-started-with-nextjs",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs3",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt: "etting-started-with-nextjs",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs4",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt: "etting-started-with-nextjs",
//     date: "2022-02-10",
//   },
// ];

export default function Home(props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
