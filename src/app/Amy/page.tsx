"use client";

import style from "./mypage.module.css";
import { motion } from "framer-motion";
import Characters from "./_component/Character";
import LandingAnimate from "./_component/LandingAnimate";
import { Desc, One, Three, Two } from "./_consts/DeveloperValue";
import Link from "next/link";

export default function Mypage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      className={style.main}
    >
      <LandingAnimate />
      <p className={style.title}>
        안녕하세요, <span>효율적인 개발</span>을 위해 <span>협업</span>을
        중시하는 개발자 오주연입니다.
      </p>
      <Characters value={Desc} />
      <div className={style.textWrapper}>
        <p className={style.subTitle}>Agile & Lean</p>
        <Characters value={One} />
        <p className={style.subTitle}>UX friendly</p>
        <Characters value={Two} />
        <p className={style.subTitle}>Share & Learn</p>
        <Characters value={Three} />
      </div>
      <div className={style.iconWrapper}>
        <p>For More Information</p>
        <div>
          <Link href="https://github.com/55555-Jyeon">
            <div
              className={style.icon}
              style={{ background: "url(/github.png) center / contain" }}
            />
          </Link>
          <Link href="https://www.figma.com/file/IIvWP43UFboHBftgWkXxsA/final-protfolio-only?type=design&node-id=1%3A2&mode=design&t=l9RyRRTqXcSIk4GX-1">
            <div
              className={style.icon}
              style={{ background: "url(/figma.jpeg) center / cover" }}
            />
          </Link>
          <Link href="https://velog.io/@55555-jyeon/posts">
            <div
              className={style.icon}
              style={{ background: "url(/velog.jpeg) center / contain" }}
            />
          </Link>
          <div
            className={style.icon}
            style={{ background: "url(/phone.png) center / contain" }}
          />
          <div
            className={style.icon}
            style={{ background: "url(/mail.svg) center / contain" }}
          />
        </div>
      </div>
    </motion.main>
  );
}
