import classes from "../../styles/home-page/featured-posts.module.css";
import PostsGrid from "../posts/posts-grid";

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
