"use client";

import { useState } from "react";
import style from "./navbar.module.css";
import { motion } from "framer-motion";
import { height } from "@/app/_const/anim";
import Body from "./_component/Body";
import Footer from "./_component/Footer";
import Thumbnail from "./_component/Thumbnail";

interface LinkState {
  isActive: boolean;
  index: number;
}

export default function Navbar() {
  const [selectedLink, setSelectedLink] = useState<LinkState>({
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
          <Body selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
          <Footer />
        </div>
        <Thumbnail
          selectedLink={selectedLink}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
}
