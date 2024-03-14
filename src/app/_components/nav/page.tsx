import { useState } from "react";
import style from "./navbar.module.css";
import { motion } from "framer-motion";
import { height } from "./_const/anim";
import Body from "./_component/Body";

export default function Navbar() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });
  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={style.nav}
    >
      <div className={style.wrapper}>
        <div className={style.contents}>
          <Body />
          {/* <Footer /> */}
        </div>
        {/* <Image /> */}
      </div>
    </motion.div>
  );
}