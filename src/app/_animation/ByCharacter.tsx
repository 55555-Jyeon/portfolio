import { motion } from "framer-motion";
import { translate } from "@/app/_const/anim";

// animation(by character)
export const getCharacter = (title: string) => {
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
