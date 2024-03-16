"use client";

import style from "./projects.module.css";
import { projects } from "../_const/projectsData";
import Card from "./_component/Card";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className={style.main}>
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
    </main>
  );
}
