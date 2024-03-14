import style from "./landingAnimate.module.css";
import { motion } from "framer-motion";

export default function LandingAnimate() {
  const transition = { duration: 1, ease: "easeInOut" };

  const firstWord = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const secondWord = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: 1,
      },
    },
  };

  const letter = {
    initial: { y: 400, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
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
      <motion.div className={style.value}>
        <motion.span variants={firstWord}>
          <motion.span variants={letter}>A</motion.span>
          <motion.span variants={letter}>g</motion.span>
          <motion.span variants={letter}>i</motion.span>
          <motion.span variants={letter}>l</motion.span>
          <motion.span variants={letter}>e</motion.span>
          <motion.span className={style.blank} />
          <motion.span variants={letter}>a</motion.span>
          <motion.span variants={letter}>n</motion.span>
          <motion.span variants={letter}>d</motion.span>
          <motion.span className={style.blank} />
        </motion.span>
        <motion.span variants={secondWord} initial="initial" animate="animate">
          <motion.span variants={letter}>m</motion.span>
          <motion.span variants={letter}>o</motion.span>
          <motion.span variants={letter}>r</motion.span>
          <motion.span variants={letter}>e</motion.span>
          <motion.span className={style.blank} />
          <motion.span variants={letter}>L</motion.span>
          <motion.span variants={letter}>e</motion.span>
          <motion.span variants={letter}>a</motion.span>
          <motion.span variants={letter}>n</motion.span>
        </motion.span>
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
    </>
  );
}
