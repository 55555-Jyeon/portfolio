import style from "./body.module.css";
import Link from "next/link";
import { navLinks } from "@/app/_const/links";
import { getCharacter } from "@/app/_animation/ByCharacter";
import { motion } from "framer-motion";
import { blur } from "@/app/_const/anim";

interface LinkState {
  isActive: boolean;
  index: number;
}

export default function Body({
  selectedLink,
  setSelectedLink,
}: {
  selectedLink: LinkState;
  setSelectedLink: React.Dispatch<React.SetStateAction<LinkState>>;
}) {
  return (
    <div className={style.body}>
      {navLinks.map((link, index) => {
        const { title, href } = link;
        return (
          <Link
            href={href}
            onMouseOver={() => {
              setSelectedLink({ isActive: true, index });
            }}
            onMouseLeave={() => {
              setSelectedLink({ isActive: false, index });
            }}
            key={`nav_${index}`}
          >
            <motion.p
              variants={blur}
              initial="initial"
              animate={
                selectedLink.isActive && selectedLink.index != index
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
