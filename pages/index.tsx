import type { NextPage } from "next";
import { Fragment } from "react";

const Home: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  return (
    <Fragment>
      <div className="text-3xl font-bold text-white">Welcome</div>
    </Fragment>
  );
};

export default Home;
