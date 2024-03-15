import { translate } from "../_const/anim";
import style from "./footer.module.css";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className={style.footer}>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Made by:</span>Juyeon OH
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>GitHub:</span> @55555-Jyeon
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Velog:</span> @55555-jyeon
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Email:</span> jyeon380516@gmail.com
        </motion.li>
      </ul>
    </div>
  );
}
