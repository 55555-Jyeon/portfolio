import Image from "next/image";
import style from "./thumbnail.module.css";
import { motion } from "framer-motion";
import { opacity } from "@/app/_const/anim";
import { navLinks } from "@/app/_const/links";

interface LinkState {
  isActive: boolean;
  index: number;
}

export default function Thumbnail({
  selectedLink,
  isActive,
}: {
  selectedLink: LinkState;
  isActive: boolean;
}) {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className={style.container}
    >
      <Image
        src={navLinks[selectedLink.index].src}
        fill={true}
        alt="menu image"
      />
    </motion.div>
  );
}
