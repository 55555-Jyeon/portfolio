"use client";

import style from "./mypage.module.css";
import profile from "../../../public/profile.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Characters from "./_component/Character";

const paragraph =
  "hello, my name is Amy! This is my portfolio website, created by NextJS and typescript.";

export default function Mypage() {
  return (
    <motion.main className={style.main}>
      <div className={style.textbox}>
        <span>JUYEON OH</span>
        <span>FE DEVELOPER</span>
      </div>
      <p className={style.value}>Agile and more Lean</p>
      <div className={style.ImageBg}>
        <div className={style.ImageContainer}>
          <Image src={profile} alt="profile image" />
        </div>
      </div>
      <Characters value={paragraph} />
      <div></div>
    </motion.main>
  );
}
