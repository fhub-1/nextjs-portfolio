import sanity from "@sanity/client";

export default sanity({
  projectId: "vktj1rfb",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: false,
});
