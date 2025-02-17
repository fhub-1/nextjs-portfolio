/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import Link from "next/link";
import Article from "../components/article";
import TitleLinkSection from "../components/titleLinkSection";
import Work from "../components/work";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joseph kitheka | Home</title>
      </Head>
      <div className="container flex items-center py-12 mx-auto">
        <div className="flex-1">
          <h1 className="mb-4 font-mono text-2xl font-bold">
            Hi 👋 I &rsquo;m Joseph kitheka!
            <br />
            Developer.Content Creator.Speaker
          </h1>
          <p className="col-start-1 mt-4 text-sm leading-6 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400 break-before-all">
            I am a Front - end React Developer with over 3 years of experience
            in the industry. I am passionate about building products that people
            love using the latest technologies. I am also an{" "}
            <span className="relative inline-block">
              <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
              <span className="relative"> open source lover </span>
            </span>
            and I enjoy contributing to projects that are helping to make the
            world a better place.I love to create videos about my experiences
            with different tools and technologies.
          </p>
          <Link
            href={{
              pathname: "/work",
              query: { name: "check out my project" },
            }}
          >
            <a className="inline-block px-6 py-3 text-lg font-semibold text-white rounded-lg bg-primary">
              <span className="hover:animate-bounce">Check my Work</span>
            </a>
          </Link>
        </div>
        <div className="relative z-0 inline-block m-5 before:block before:-left-2 before:-bottom-2 before:absolute before:inset-0 before:bg-shadowcolor before:rounded-full">
          <img
            src="/images/me.JPG"
            alt="Image of Joseph"
            className="relative z-10 object-cover w-48 h-48 rounded-full "
          />
        </div>
      </div>
      <div className="bg-blue-100">
        <div className="container py-12 mx-auto">
          <TitleLinkSection title={"Recent Posts"} />
          <div className="grid grid-cols-2 gap-6">
            <Article className="rounded-lg" />
            <Article className="rounded-lg" />
          </div>
        </div>
      </div>
      <div className="container py-12 mx-auto">
        <TitleLinkSection title={"Featured Work"} />
        <Work />
        <Work />
      </div>
    </>
  );
}
