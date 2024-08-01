"use client";

import style from "./navbar.module.css";
import { motion } from "framer-motion";
import { height } from "@/app/_const/anim";
import Body from "./_component/Body";
import Footer from "./_component/Footer";
import Thumbnail from "./_component/Thumbnail";
import { useState } from "react";
import { NavbarProps } from "./type";

export default function Navbar({ setIsActive }: NavbarProps) {
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
          <Body
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setIsActive={setIsActive}
          />
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
