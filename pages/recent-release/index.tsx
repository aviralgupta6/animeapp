import type { NextPage } from "next";
import type { AnimeCardType } from "../../interfaces";

import useSwr from "swr";
import { Fragment } from "react";
import AnimeCard from "../component/AnimeCard";
import fetcher from "../api/fetcher";
import { baseUrl } from "../../constants/constant";

const urls = `${baseUrl}/recent-release`;

const recentRelease = (url: string) => fetch(urls).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = fetcher(recentRelease);

  return (
    <Fragment>
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
