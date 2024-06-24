import style from "./body.module.css";
import Link from "next/link";
import { navLinks } from "@/app/_const/links";
import { getCharacter } from "@/app/_animation/ByCharacter";
import { motion } from "framer-motion";
import { blur } from "@/app/_const/anim";
import { Dispatch, SetStateAction } from "react";

export type BodyProps = {
  selectedLink: {
    isActive: boolean;
    index: number;
  };
  setSelectedLink: Dispatch<
    SetStateAction<{ isActive: boolean; index: number }>
  >;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

export default function Body({
  selectedLink,
  setSelectedLink,
  setIsActive,
}: BodyProps) {
  return (
    <div className={style.body}>
      {navLinks.map((link, index) => {
        const { title, href } = link;
        return (
          <Link
            key={`nav_${index}`}
            href={href}
            onClick={() => setIsActive(false)}
            onMouseOver={() => setSelectedLink({ isActive: true, index })}
            onMouseLeave={() => setSelectedLink({ isActive: false, index })}
          >
            <motion.p
              variants={blur}
              initial="initial"
              animate={
                selectedLink.isActive && selectedLink.index !== index
                  ? "open"
                  : "closed"
              }
            >
              {getCharacter(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
