"use client";

import style from "./card.module.css";
import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  src: string;
  github: string;
  figma: string;
  velog: string;
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
  github,
  figma,
  velog,
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
            <span className={style.iconBox}>
              <Link href={github}>
                <div
                  className={style.icon}
                  style={{
                    background: "url(/icons/github.png) center / contain",
                  }}
                />
              </Link>
              <Link href={figma}>
                <div
                  className={style.icon}
                  style={{
                    background: "url(/icons/figma.jpeg) center / cover",
                  }}
                />
              </Link>
              {velog && (
                <Link href={velog}>
                  <div
                    className={style.icon}
                    style={{
                      background: "url(/icons/velog.jpeg) center / contain",
                    }}
                  />
                </Link>
              )}
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
