import { useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/index.module.scss";

// components
import Cursor from "@/components/layout/cursor";
import Header from "@/components/layout/header";
import Button from "@/components/button";
import Canvas from "@/components/canvas";

const Home: NextPage = () => {
  return (
    <div className={styles.app}>
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

      <Header />

      <main className={styles.main}>
        <section className={styles.section_banner}>
          <div className={styles.section_banner_left}>
            <h1>Frontend Developer</h1>
            <h2>(FOR REAL)</h2>
            <p>
              Hey there, my name is Eren. I'm a 21 years old frontend developer
              who loves to code and live in Istanbul/Turkey.
            </p>

            <Button hasShadow>Hire me</Button>
          </div>
          <div className={styles.section_banner_right}>
            <Canvas shuffle={true} rainbow={true} noise={true} stripes={false}>
              <h3>Who is this guy?</h3>
            </Canvas>
          </div>
        </section>

        <section className={styles.section_technologies}>
          <Canvas shuffle={false} rainbow={false} noise={true} stripes={true}>
            <h4>Technologies i use</h4>
          </Canvas>
        </section>
      </main>

      <Cursor />
    </div>
  );
};

export default Home;
