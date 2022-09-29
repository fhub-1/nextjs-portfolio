const YOUTUBE_PLAYLIST = "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST}?part=snippet&playlistId=PLokZwvKSs2uCc3u6uqkMB-qVM0lO8kD0a&maxResults=50&key=${process.env.MY_YOUTBE_API}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

const Contact = ({ data }) => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Latest Videos
            </h2>
          </div>
        </div>
        {/* video section part  */}
        {/* {data.items.map((item) => {
          console.log("item", item);
          return ( */}
        <>
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-5">
                <div className="relative">
                  <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img
                      className="object-cover w-full h-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg"
                      alt=""
                    />
                  </a>

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold text-gray-900 uppercase bg-white rounded-full trackingWidest">
                      {" "}
                      Lifestyle{" "}
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    How to build coffee inside your home in 5 minutes.{" "}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </>
        {/* ); */}
        {/* })} */}
      </div>
    </section>
  );
};

export default Contact;
