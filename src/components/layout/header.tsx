import Link from "next/link";
import styles from "@/styles/components/layout/header.module.scss";
import Button from "@/components/button";

const Header: React.FC<{}> = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>Eren Kulis</a>
      </Link>

      <nav role="navigation" className={styles.nav}>
        <a
          href="https://linkedin.com/in/erenkulis"
          target="_blank"
          rel="norefeerer noopenner"
        >
          <Button size="xs">let's talk</Button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
