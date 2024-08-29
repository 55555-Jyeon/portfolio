"use client";

import { useRef } from "react";
import style from "./character.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { CharacterProps, CharactersProps, WordProps } from "./type";

export const Characters = ({ value }: CharactersProps) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });
  const words = value.split(" "); // split paragraph

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
};

const Word = ({ children, range, progress }: WordProps) => {
  const characters = children.split(""); // 알파벳별 animation
  const amount = range[1] - range[0]; // 알파벳별 길이 구하기
  const step = amount / children.length; // 단어별 길이 구하기
  return (
    <span className={style.word}>
      {characters.map((character, idx) => {
        const start = range[0] + step * idx;
        const end = range[0] + step * (idx + 1);
        // console.log(start, end);
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
