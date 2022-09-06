import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Anime App</title>
      </Head>
      <div className="text-3xl font-bold text-white">Welcome</div>
    </Fragment>
  );
};

export default Home;
