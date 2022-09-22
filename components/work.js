import Head from "next/head";

/* eslint-disable @next/next/no-img-element */
export default function Work() {
  return (
    <>
      <Head>
        <title>Joseph kitheka | Work</title>
      </Head>
      <article className="flex items-center py-6 border-b-2">
        <img
          src="https://via.placeholder.com/240"
          alt="logo alt"
          className="w-1/3 mr-6 rounded-lg"
        />
        <div>
          <h3 className="mb-2 text-2xl">Designing Dashboards</h3>
          <span className="block mb-4 text-gray-600">
            <date className="bg-blue-800 text-white px-5 py-1.5 mr-4 rounded-xl">
              2022
            </date>{" "}
            Dashboard
          </span>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </article>
    </>
  );
}
