import { useRef, useState } from "react";
import styles from "@/styles/components/marquee/marquee.module.scss";

type MarqueeProps = {
  text: string;
};

const Marquee = (props: MarqueeProps) => {
  const MarqueeRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={MarqueeRef} className={styles.marquee_wrapper}>
      <span className={styles.noise} />
      <div className={styles.marquee}>
        <div className={styles.marquee_inner}>{props.text}</div>
        <div className={styles.marquee_inner}>{props.text}</div>
        <div className={styles.marquee_inner}>{props.text}</div>
        <div className={styles.marquee_inner}>{props.text}</div>
        <div className={styles.marquee_inner}>{props.text}</div>
      </div>
      <div className={styles.marquee}>
        <div className={styles.marquee_inner}>{props.text}</div>
        <div className={styles.marquee_inner}>{props.text}</div>
        <div className={styles.marquee_inner}>{props.text}</div>
        <div className={styles.marquee_inner}>{props.text}</div>
        <div className={styles.marquee_inner}>{props.text}</div>
      </div>
    </div>
  );
};

export default Marquee;
