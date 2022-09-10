import type { NextPage } from "next";
import { AppInitialProps, AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import Header from "./Header";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <Fragment>
      <Head>
        <title>Anime App</title>
      </Head>
      <div className="bg-white m-[1rem] rounded-lg">
        <Header />
        <main className="m-2">{children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
