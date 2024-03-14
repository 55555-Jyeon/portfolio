"use client";

import style from "./mypage.module.css";
import { motion } from "framer-motion";
import Characters from "./_component/Character";
import LandingAnimate from "./_component/LandingAnimate";

const paragraph =
  "hello, my name is Amy! This is my portfolio website, created by NextJS and typescript.";

export default function Mypage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      className={style.main}
    >
      <LandingAnimate />
      <Characters value={paragraph} />
      <div></div>
    </motion.main>
  );
}
