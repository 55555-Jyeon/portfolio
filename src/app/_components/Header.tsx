"use client";

import { useRouter } from "next/navigation";
import style from "./header.module.css";
import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "./nav/page";
import { opacity } from "../_const/anim";
import { Tooltip } from "@chakra-ui/react";

export default function Header() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className={style.container}>
        <p className={style.logo} onClick={() => router.push("/")}>
          @55555-YEON
        </p>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={style.el}
        >
          <div
            className={`${style.burger} ${isActive ? style.burgerActive : ""}`}
          ></div>
          <div className={style.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={opacity}
          animate={isActive ? "closed" : "open"}
          className={style.contact}
        >
          <Tooltip
            label="010-6363-3087"
            fontSize="sm"
            bg="#005134"
            color={"#fff"}
            hasArrow
            openDelay={200}
            closeDelay={500}
            mt={5}
          >
            <Phone color="#005134" size={16} strokeWidth={1.2} />
          </Tooltip>
          <Tooltip
            label="kakao: verita98"
            fontSize="sm"
            bg="#005134"
            color={"#fff"}
            hasArrow
            openDelay={200}
            closeDelay={500}
            mt={5}
          >
            <MessageCircle color="#005134" size={16} strokeWidth={1.2} />
          </Tooltip>
        </motion.div>
      </nav>
      <AnimatePresence mode="wait">
        {isActive && <Navbar setIsActive={setIsActive} />}
      </AnimatePresence>
    </>
  );
}
