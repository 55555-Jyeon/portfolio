"use client";

import { useRef } from "react";
import style from "./word.module.css";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

type Props = {
  value: string;
};

type WordProps = {
  children: string;
  range: number[];
  progress: MotionValue<number>;
};

export default function Words({ value }: Props) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  // split paragraph
  const words = value.split(" ");

  return (
    <p ref={element} className={style.words}>
      {words.map((word, idx) => {
        const start = idx / words.length;
        const end = start + 1 / words.length;
        // console.log(start, end);
        return (
          <Word key={idx} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, range, progress }: WordProps) => {
  // animation (스크롤 정도에 따라 단어별로 opacity에 변화)
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={style.word}>
      <span className={style.shadow}>{children}</span>
      <motion.span style={{ opacity: opacity }} className={style.word}>
        {children}
      </motion.span>
    </span>
  );
};
