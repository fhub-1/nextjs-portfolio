import Head from "next/head";
import Contact from "/components/Contact";
import { useState } from "react";
import { YoutubeVideoPlayer } from "/components/youtubeplayer";

export async function getStaticProps() {
  const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${MY_PLAYLIST}&key=${API_KEY}&maxResults=20`;

  const res = await fetch(REQUEST_URL);
  const results = await res.json();

  return {
    props: { results: results.items },
    revalidate: 30,
  };
}

function Video({ results }) {
  console.log(results);
  const [currentVideo, setCurrentVideo] = useState(results[0]);
  const [playing, setPlaying] = useState(false);
  return (
    <>
      <Head>
        <title>Joseph kitheka | Contact </title>
      </Head>
      <Contact results={results} />
    </>
  );
}

export default Video;
