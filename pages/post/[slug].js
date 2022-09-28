import client from "../../client";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const query = groq`
    *[_type == 'post' && slug.current == '${slug}'][0]{
      ...,
      'author': author->name,
    }
  `;
  const data = await client.fetch(query);
  return {
    revalidate: 60 * 60 * 24,
    props: {
      post: data,
    },
  };
}

export default function SinglePost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading ...</h1>;
  }
  if (!post) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  return (
    <>
      <div>
        <div className="flex ">
          <div className="min-h-screen mx-auto bg-white max-w-screen-2xl">
            <div className="max-w-2xl px-4 max-auto">
              <h1 className="py-4 text-4xl font-semibold text-dark">
                {post.title}
              </h1>
              <div className="flex space-x-5 text-sm text-gray-200">
                <span className="block pb-4 font-bold text-primary text-1xl">
                  {post.author}
                </span>
                <span className="text-sm font-bold text-gray-500">
                  {new Date(post.publishedAt).toDateString()}
                </span>
              </div>
              <Image
                alt="blog-images"
                width={800}
                height={500}
                src={urlFor(post.mainImage).url()}
              />
              <div className="max-w-2xl prose">
                <BlockContent blocks={post.body} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
