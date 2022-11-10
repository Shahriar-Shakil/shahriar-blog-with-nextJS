import FeaturedPosts from "../components/homepage/featured-posts";
import Hero from "../components/homepage/hero";
import { getFeaturedPosts } from "../lib/posts-utils";
const DUMMY_POSTS = [
  {
    title: "getting started with next js",
    image: "getting-started-nextjs.png",
    excerpt: "some content",
    date: "2022-11-9",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "getting started with next js",
    image: "getting-started-nextjs.png",
    excerpt: "some content",
    date: "2022-11-9",
    slug: "getting-started-with-nextjs",
  },
];
function HomePage(props) {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </div>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 600,
  };
}
export default HomePage;
