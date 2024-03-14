"use client";

import style from "./mypage.module.css";
import Image from "next/image";
import profile from "../../../public/profile.jpg";
import Characters from "./_component/Character";
import { delay, motion } from "framer-motion";

const paragraph =
  "hello, my name is Amy! This is my portfolio website, created by NextJS and typescript.";
const transition = { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] };

export default function Mypage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      className={style.main}
    >
      <motion.div initial={{ opacity: 0 }} className={style.textbox}>
        <span>JUYEON OH</span>
        <span>FE DEVELOPER</span>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} className={style.value}>
        <span>A</span>
        <span>g</span>
        <span>i</span>
        <span>l</span>
        <span>e</span>
        <span className={style.blank} />
        <span>a</span>
        <span>n</span>
        <span>d</span>
        <span className={style.blank} />
        <span>m</span>
        <span>o</span>
        <span>r</span>
        <span>e</span>
        <span className={style.blank} />
        <span>L</span>
        <span>e</span>
        <span>a</span>
        <span>n</span>
      </motion.p>
      <div className={style.ImageBg}>
        <motion.div
          initial={{ y: "-50%", width: 296, height: 356 }}
          animate={{
            y: 0,
            width: "100vw",
            height: window.innerWidth > 1440 ? 600 : 300,
            transition: { delay: 0.2, ...transition },
          }}
          className={style.ImageContainer}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              transition: { delay: 0.2, ...transition },
            }}
            style={{
              background: "url(/profile.jpg) center 14% / cover no-repeat",
            }}
            className={style.profile}
          />
        </motion.div>
      </div>
      <Characters value={paragraph} />
      <div></div>
    </motion.main>
  );
}
