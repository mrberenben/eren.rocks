import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/layout/cursor.module.scss";

// hooks
import { useEventListener } from "@/utils/hooks";

const POINTER_DEFAULT = require("@/assets/images/default.svg");
const POINTER_DEFAULT_ACTIVE = require("@/assets/images/default-active.svg");
const POINTER_LINK = require("@/assets/images/pointer.png");
const POINTER_LINK_ACTIVE = require("@/assets/images/pointer-active.svg");
type PointerTypes = "default" | "default-active" | "link" | "link-active";

const Cursor: React.FC<{}> = () => {
  const CursorRef = useRef<HTMLDivElement>(null);
  const Document = useRef<Document>(null);
  const [pointerStatus, setPointerStatus] = useState<PointerTypes>("default");

  // on mouse visible on document
  const handleMouseEnter = () => {
    if (CursorRef.current) {
      CursorRef.current.style.display = "flex";
    }
  };

  // on mouse invisible on document
  const handleMouseLeave = () => {
    if (CursorRef.current) {
      CursorRef.current.style.display = "none";
    }
  };

  // on mouse move
  const handleMouseMove = (e: MouseEvent) => {
    if (CursorRef.current) {
      CursorRef.current.style.left = `${e.clientX - 4}px`;
      CursorRef.current.style.top = `${e.clientY - 6}px`;
    }
  };

  // on mouse click starts
  const handleMouseDown = () => {
    setPointerStatus("default-active");
  };

  // on mouse click ends
  const handleMouseUp = () => {
    setPointerStatus("default");
  };

  // setup listeners
  useEventListener("mousemove", handleMouseMove, Document);
  useEventListener("mousedown", handleMouseDown, Document);
  useEventListener("mouseup", handleMouseUp, Document);
  useEventListener(
    "contextmenu",
    (e: MouseEvent) =>
      process.env.NODE_ENV !== "development" && e.preventDefault(),
    Document
  );

  // handle mouse enter/leave
  useEffect(() => {
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={CursorRef} className={styles.cursor}>
      <Image
        src={
          pointerStatus === "default"
            ? POINTER_DEFAULT
            : pointerStatus === "default-active"
            ? POINTER_DEFAULT_ACTIVE
            : pointerStatus === "link"
            ? POINTER_LINK
            : pointerStatus === "link-active"
            ? POINTER_LINK_ACTIVE
            : null
        }
        alt="pointer"
        quality={100}
        priority={false}
      />
    </div>
  );
};

export default Cursor;
