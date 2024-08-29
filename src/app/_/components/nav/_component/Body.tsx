import style from "./body.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { BodyProps } from "./type";
import { navLinks } from "@/app/_/const/links";
import { getCharacter } from "@/app/_/animation/ByCharacter";

const Body = ({ selectedLink, setSelectedLink, setIsActive }: BodyProps) => {
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
};
export default Body;
