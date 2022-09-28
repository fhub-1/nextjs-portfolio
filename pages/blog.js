import Head from "next/head";
import Vlog from "../components/Posts";

import client from "client";
import groq from "groq";
import Posts from "../components/Posts";

export async function getStaticProps() {
  const query = groq`
  {
   "posts": *[_type == 'post']{title, mainImage, publishedAt,slug,
  'categories': categories[]->title,
  'authorName': author->name,
  'authorSlug': author->slug,
  },
  }
  `;

  const data = await client.fetch(query);

  return {
    props: {
      posts: data.posts,
    },
  };
}

export default function blog({ posts }) {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Joseph kitheka | Blog</title>
      </Head>
      <div>
        <Posts posts={posts} />
      </div>
    </>
  );
}
