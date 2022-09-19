import styles from "@/styles/components/button/button.module.scss";

type ButtonProps = {
  type?: "button" | "submit";
  title?: string;
  hasShadow?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type || "button"}
      title={props.title}
      aria-label={props.title}
      data-size={props.size || "md"}
      className={`${styles.button} ${
        props.hasShadow ? styles.button__shadow : undefined
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
