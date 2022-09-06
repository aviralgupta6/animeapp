import type { NextPage } from "next";
import type { AnimeCardType } from "../../interfaces";

import useSwr from "swr";
import { Fragment } from "react";
import AnimeCard from "../component/AnimeCard";
// import fetcher from "../api/fetcher";
import { baseUrl } from "../../constants/constant";
import useFetcher from "../api/fetcher";
import Head from "next/head";

const urls = `${baseUrl}/recent-release`;

const recentRelease = (url: string) => fetch(urls).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useFetcher(recentRelease);

  return (
    <Fragment>
      <Head>
        <title>Recent Release</title>
      </Head>
      <div>
        {data ? (
          data.map((animeData) => (
            <AnimeCard {...animeData} key={animeData.animeId} />
          ))
        ) : (
          <></>
        )}
      </div>
    </Fragment>
  );
};

export default Home;
