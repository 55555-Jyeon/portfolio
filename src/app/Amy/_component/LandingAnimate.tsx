"use client";

import { ValueTitle } from "@/app/_const/DeveloperValue";
import style from "./landingAnimate.module.css";
import { motion } from "framer-motion";
import { transition } from "@/app/_const/anim";
import { getCharacter } from "@/app/_animation/ByCharacter";

const LandingAnimate = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.2, ...transition },
        }}
        className={style.textbox}
      >
        <span>JUYEON OH</span>
        <span>FE DEVELOPER</span>
      </motion.div>
      <motion.div
        className={style.value}
        animate={{
          transition: { delay: 0.8 },
        }}
      >
        {getCharacter(ValueTitle)}
      </motion.div>
      <div className={style.ImageBg}>
        <motion.div
          initial={{ y: "-50%", width: 296, height: 356 }}
          animate={{
            y: 0,
            width: "100dvw",
            height: 1000,
            transition: { delay: 0.2, ...transition },
          }}
          className={style.ImageContainer}
        >
          <motion.div
            initial={{ scale: 1 }}
            style={{
              background: "url(/profile.jpg) center 14% / cover no-repeat",
            }}
            className={style.profile}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LandingAnimate;
