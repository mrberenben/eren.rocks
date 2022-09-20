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

// config
import { Tech } from "@/utils/config/tech";
import Marquee from "@/components/marquee";

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
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
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
              <span>Hey there! My name is Eren. I am a</span>
              <span>21-year-old frontend developer who started</span>
              <span>
                learning 7 years ago. Founder of
                <a
                  href="https://kervan.design/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  kervan.design
                </a>
              </span>
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
            <div className={styles.canvas_container}>
              <h4>Technologies i use</h4>
              <h6>I'll never stop learning.</h6>

              <div className={styles.tech_grid}>
                {Tech.map(t => (
                  <div key={t.id} className={styles.tech_grid_card}>
                    <span className={styles.tech_grid_card__badge}>
                      {t.experience}
                    </span>
                    <div className={styles.tech_grid_card__image}>
                      <Image src={t.image} alt={t.title} />
                    </div>
                    <div className={styles.tech_grid_card__title}>
                      {t.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Canvas>
        </section>

        <section className={styles.section_contact}>
          <Marquee text="LET'S TALK" />
        </section>
      </main>

      <Cursor />
    </div>
  );
};

export default Home;
