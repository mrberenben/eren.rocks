import styles from "@/styles/components/marquee/marquee.module.scss";

type MarqueeProps = {
  text: string;
};

const Marquee = (props: MarqueeProps) => {
  return (
    <div
      className={styles.marquee_wrapper}
      onClick={() => window.location.replace("mailto:hello@eren.jp")}
    >
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
