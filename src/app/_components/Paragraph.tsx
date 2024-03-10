"use client";

import { useRef } from "react";
import style from "./paragraph.module.css";
import { useScroll, motion } from "framer-motion";

type Props = {
  value: string;
};

export default function Paragraph({ value }: Props) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  // useEffect(() => {scrollYProgress.on("change", (e) => console.log(e))});

  return (
    <motion.p
      ref={element}
      style={{ opacity: scrollYProgress }}
      className={style.paragraph}
    >
      {value}
    </motion.p>
  );
}
