import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eren kuliş | frontend developer</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="eren.rocks | Personal website of Eren Kuliş. A 21 years old frontend developer from Istanbul/Turkey."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#fff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
    </div>
  );
};

export default Home;
