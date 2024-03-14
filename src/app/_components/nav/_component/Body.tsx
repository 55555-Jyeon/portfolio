import style from "./body.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { blur, translate } from "../_const/anim";
import { navLinks } from "../_const/links";

export default function Body() {
  return (
    <div className={style.body}>
      {navLinks.map((link, index) => {
        const { title, href } = link;
        return (
          <Link href={href} key={`nav_${index}`}>
            <p>{title}</p>
          </Link>
        );
      })}
    </div>
  );
}
