import Link from "next/link";

/* eslint-disable react/jsx-key */
export default function Posts({ posts }) {
  // console.log(posts);
  return (
    <>
      <div className="px-6 md:flex md:pt-20">
        <div className="md:w-96 md:text-center">
          <h2 className="my-10 text-3xl font-bold text-gray-800">Blog</h2>
        </div>

        <div className="flex flex-col md:pl-14">
          {posts &&
            posts.map((post) => (
              <div
                key={post.slug.current}
                className="pt-4 pb-4 border-b-2 border-gray-200"
              >
                <span className="block pb-4 text-sm font-bold text-gray-400">
                  {post.categories}
                </span>
                <Link href={`post/${post.slug.current}`}>
                  <a className="text-gray-600 transition-colors duration-500 hover:text-gray-900">
                    {" "}
                    <h2 className="pb-4 text-2xl font-bold tracking-tighter text-gray-700 md:text-4xl">
                      {post.title}
                    </h2>
                  </a>
                </Link>
                <span>
                  By{" "}
                  <span className="text-sm text-primary">
                    {post.authorName}{" "}
                  </span>
                  on {new Date(post.publishedAt).toDateString()}
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
