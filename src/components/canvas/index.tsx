import { useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/canvas/canvas.module.scss";

// config
import { Images } from "@/utils/config/images";
import { Stripes } from "@/utils/config/icons";

// hooks
import { useInterval } from "@/utils/hooks";

type CanvasProps = {
  title?: string;
  rainbow: boolean;
  noise: boolean;
  shuffle: boolean;
  stripes: boolean;
  children: React.ReactNode;
};

const Canvas = (props: CanvasProps) => {
  const CanvasRef = useRef<HTMLDivElement>(null);
  const [imageIndex, setImageIndex] = useState<number>(0);

  useInterval(
    () => {
      if (CanvasRef.current) {
        if (imageIndex === 0) {
          CanvasRef.current.style.setProperty(
            "--background",
            "var(--colors-pink)"
          );
          CanvasRef.current.style.setProperty("--color", "var(--colors-pink)");
        } else if (imageIndex === 1) {
          CanvasRef.current.style.setProperty(
            "--background",
            "var(--colors-teal)"
          );
          CanvasRef.current.style.setProperty("--color", "var(--colors-teal)");
        } else if (imageIndex === 2) {
          CanvasRef.current.style.setProperty(
            "--background",
            "var(--colors-blue)"
          );
          CanvasRef.current.style.setProperty("--color", "var(--colors-blue)");
        } else {
          CanvasRef.current.style.setProperty(
            "--background",
            "var(--colors-purple)"
          );
          CanvasRef.current.style.setProperty(
            "--color",
            "var(--colors-purple)"
          );
        }
      }

      if (imageIndex === 3) {
        setImageIndex(0);
        return;
      }

      setImageIndex(prev => prev + 1);
    },
    props.shuffle ? 700 : null
  );

  return (
    <div ref={CanvasRef} className={styles.canvas}>
      {props.noise && <span className={styles.noise} />}
      {props.stripes && (
        <span className={styles.stripes}>
          <Stripes />
        </span>
      )}
      {props.shuffle && (
        <Image
          src={Images.shuffle[imageIndex]}
          alt="Who is this guy?"
          layout="fill"
          objectFit="cover"
          priority={true}
          quality={100}
          style={{ opacity: 0.8 }}
        />
      )}
      {props.children}
    </div>
  );
};

export default Canvas;
