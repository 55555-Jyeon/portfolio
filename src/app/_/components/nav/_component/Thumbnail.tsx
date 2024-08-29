import Image from "next/image";
import style from "./thumbnail.module.css";
import { motion } from "framer-motion";
import { ThumbnailProps } from "./type";
import { opacity } from "@/app/_/const/animation-effects";
import { navLinks } from "@/app/_/const/links";

const Thumbnail = ({ selectedLink, isActive }: ThumbnailProps) => {
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
};
export default Thumbnail;
