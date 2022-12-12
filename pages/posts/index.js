import AllPost from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/posts-utils";

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

function AllPosts(props) {
  return <AllPost posts={props.posts} />;
}

export default AllPosts;

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
