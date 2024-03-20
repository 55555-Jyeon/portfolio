"use client";

import style from "./skill.module.css";
import Matter from "./_component/Matter";

export default function Skills() {
  return (
    <main className={style.main}>
      <h1 className={style.title}>MY SKILLS & TOOLS</h1>
      <div className={style.hide}>
        <Matter />
      </div>
    </main>
  );
}
