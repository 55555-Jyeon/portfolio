"use client";

import style from "./projects.module.css";
import { projects } from "../_const/projectsData";
import Card from "./_component/Card";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main ref={container} className={style.container}>
      <h1 className={style.title}>PROJECTS</h1>
      <div className={style.main}>
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          return (
            <Card
              key={`project_${index}`}
              i={index}
              {...project}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </main>
  );
}
