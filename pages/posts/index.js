import Head from "next/head";
import { Fragment } from "react";

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-utils";
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
function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPostsPage;
