import type { NextPage } from "next";
import type { AnimeCardType } from "../interfaces";
import styles from "../styles/Home.module.css";
import useSwr from "swr";
import { Fragment } from "react";
import AnimeCard from "./component/AnimeCard";
const urls = "http://localhost:3000/recent-release";

const fetcher = (url: string) => fetch(urls).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSwr<AnimeCardType[]>("/api/animeCard", fetcher);
  console.log(data, error);
  return (
    <Fragment>
      <div>
        {data ? data.map((animeData) => <AnimeCard {...animeData} />) : <></>}
      </div>
    </Fragment>
  );
};

export default Home;
