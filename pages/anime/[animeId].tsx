import type { NextPage } from "next";
import { Fragment } from "react";
import { useRouter } from "next/router";

const AnimeTemplate: NextPage = () => {
  const router = useRouter();
  const { animeId } = router.query;

  return <p>Post: {animeId}</p>;
};

export default AnimeTemplate;
