"use client";

import style from "./card.module.css";
import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";

type CardProps = {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
};

export default function Card({
  title,
  description,
  src,
  link,
  color,
  i,
  progress,
  range,
  targetScale,
}: CardProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const ImageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const CardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={style.cardContainer}>
      <motion.div
        style={{
          scale: CardScale,
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={style.card}
      >
        <h2>{title}</h2>
        {/* content */}
        <div className={style.content}>
          <div className={style.desc}>
            <p>{description}</p>
            <span>
              <a href={""} target="_blank">
                See more
              </a>
            </span>
          </div>
          {/* image */}
          <div className={style.imageContainer}>
            <motion.div style={{ scale: ImageScale }} className={style.inner}>
              <Image fill src={`/images/${src}`} alt="project thumbnail" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
