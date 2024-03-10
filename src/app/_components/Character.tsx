"use client";

import { useRef } from "react";
import style from "./character.module.css";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

type Props = {
  value: string;
};

type WordProps = {
  children: string;
  range: number[];
  progress: MotionValue<number>;
};
type CharacterProps = {
  children: string;
  range: number[];
  progress: MotionValue<number>;
};

export default function Characters({ value }: Props) {
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
  // 알파벳별 animation
  const characters = children.split("");
  // 알파벳별 길이 구하기
  const amount = range[1] - range[0];
  // 단어별 길이 구하기
  const step = amount / children.length;
  return (
    <span className={style.word}>
      {characters.map((character, idx) => {
        const start = range[0] + step * idx;
        const end = range[0] + step * (idx + 1);
        console.log(start, end);
        return (
          <Character key={idx} range={[start, end]} progress={progress}>
            {character}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({ children, range, progress }: CharacterProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className={style.shadow}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
