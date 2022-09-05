import type { NextPage } from "next";
import type { AnimeCardType } from "../../interfaces";

import useSwr from "swr";
import { baseUrl } from "../../constants/constant";
import { Fragment } from "react";
import AnimeCard from "../component/AnimeCard";
// import fetcher from "../api/fetcher";
import useFetcher from "../api/fetcher";
const urls = `${baseUrl}/popular`;

const popular = (url: string) => fetch(urls).then((res) => res.json());

const Popular: NextPage = () => {
  const { data, error } = useFetcher(popular);

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

export default Popular;
