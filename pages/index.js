import Head from "next/head";
import Image from "next/image";
import Article from "../components/article";
import TitleLinkSection from "../components/titleLinkSection";
import Work from "../components/work";

export default function Home() {
  return (
    <>
      <div className="flex py-12 items-center container mx-auto">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">
            Hi, I'm Joseph kitheka!
            <br />
            Front-end React Developer
          </h1>
          <p className="mb-4 ">
            I am a Front - end React Developer with over 3 years of experience
            in the industry. I am passionate about building products that people
            love using the latest technologies. I am also an open source lover
            and I enjoy contributing to projects that are helping to make the
            world a better place.I love to create videos about my experiences
            with different tools and technologies.
          </p>
          <a
            href="#"
            className="inline-block bg-primary text-lg rounded-lg px-6 py-3 text-white"
          >
            Check my Work
          </a>
        </div>
        <div className="m-5 inline-block before:block before:-left-2 before:-bottom-2 before:absolute before:inset-0 before:bg-primary relative z-0 before:rounded-full">
          <img
            src="https://via.placeholder.com/240"
            width="240"
            height="240"
            alt="Image of John"
            className="z-10 relative rounded-full"
          />
        </div>
      </div>
      <div className="bg-blue-100">
        <div className="container mx-auto py-12">
          <TitleLinkSection title={"Recent Posts"} />
          <div className="grid grid-cols-2 gap-6">
            <Article className="rounded-lg" />
            <Article className="rounded-lg" />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12">
        <TitleLinkSection title={"Featured Work"} />
        <Work />
        <Work />
      </div>
    </>
  );
}
