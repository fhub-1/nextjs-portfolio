/* eslint-disable @next/next/no-img-element */

const Contact = ({ results }) => {
  return (
    <>
      <section className="flex-1 py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Latest Videos
              </h2>

              {results &&
                results.map((video) => {
                  const { id, snippet = {} } = video;
                  const {
                    title,
                    thumbnails = {},
                    resourceId,
                    description,
                  } = snippet;
                  const { medium = {} } = thumbnails;

                  return (
                    <>
                      <div className="">
                        <div
                          key={video}
                          className="grid flex-1 max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full"
                        >
                          <div className="overflow-hidden bg-white rounded shadow">
                            <div className="p-5">
                              <div className="relative">
                                <a
                                  href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                                  title=""
                                  className="block aspect-w-4 aspect-h-3"
                                >
                                  <img
                                    className="object-cover w-full h-full rounded-md"
                                    src={medium.url}
                                    alt=""
                                  />
                                </a>
                              </div>

                              <p className="mt-5 text-2xl font-semibold">
                                <a href="#" title="" className="text-black">
                                  {title}
                                </a>
                              </p>
                              <p className="mt-4 text-base prose text-gray-600 ">
                                {description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
