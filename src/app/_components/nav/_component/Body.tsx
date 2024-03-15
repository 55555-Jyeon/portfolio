import style from "./body.module.css";
import Link from "next/link";
import { navLinks } from "@/app/_const/links";
import { getCharacter } from "@/app/_animation/ByCharacter";

export default function Body() {
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
