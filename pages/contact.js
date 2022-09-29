import Head from "next/head";
import Contact from "/components/Contact";

function contact({ data }) {
  return (
    <>
      <Head>
        <title>Joseph kitheka | Contact </title>
      </Head>
      <Contact />
    </>
  );
}

export default contact;
