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
        <Button
          size="xs"
          onClick={() => window.location.replace("mailto:hello@eren.jp")}
        >
          let's talk
        </Button>
      </nav>
    </header>
  );
};

export default Header;
