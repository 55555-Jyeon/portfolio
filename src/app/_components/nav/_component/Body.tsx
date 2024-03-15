import style from "./body.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { blur, translate } from "../_const/anim";
import { navLinks } from "../_const/links";

export default function Body() {
  // animation(by character)
  const getCharacter = (title: string) => {
    const characters: JSX.Element[] = [];

    for (let i = 0; i < title.length; i++) {
      const character = title[i];

      // _(underscore) → replace to blank
      if (character === "_") {
        characters.push(
          <motion.span
            custom={[i * 0.02, (title.length - i) * 0.01]}
            variants={translate}
            initial="initial"
            animate="enter"
            exit="exit"
            key={`char_${i}`}
          >
            &nbsp;
          </motion.span>
        );
      } else {
        characters.push(
          <motion.span
            custom={[i * 0.02, (title.length - i) * 0.01]}
            variants={translate}
            initial="initial"
            animate="enter"
            exit="exit"
            key={`char_${i}`}
          >
            {character}
          </motion.span>
        );
      }
    }

    return characters;
  };

  return (
    <div className={style.body}>
      {navLinks.map((link, index) => {
        const { title, href } = link;
        return (
          <Link href={href} key={`nav_${index}`}>
            <p>{getCharacter(title)}</p>
          </Link>
        );
      })}
    </div>
  );
}
