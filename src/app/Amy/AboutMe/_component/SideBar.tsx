import Image from "next/image";
import style from "./sideBar.module.css";
import Link from "next/link";
import { url } from "inspector";

export default function SideBar() {
  return (
    <div className={style.wrapper}>
      <div className={style.imageContainer}>
        <Image
          className={style.image}
          width={500}
          height={700}
          src="/images/IDcard.svg"
          alt="id card"
        />
        <div className={style.iconbox}>
          <Link href="https://velog.io/@55555-jyeon/posts">
            <div
              style={{ background: `url("/icons/velog.jpeg") center / cover` }}
              className={style.iconContainer}
            />
          </Link>
          <Link href="https://www.figma.com/file/IIvWP43UFboHBftgWkXxsA/final-portfolio-only?type=design&node-id=1%3A476&mode=design&t=6h3Y8bYkPLgqqB5b-1">
            <div
              style={{ background: `url("/icons/figma.jpeg") center / cover` }}
              className={style.iconContainer}
            />
          </Link>
          <Link href="https://github.com/55555-Jyeon">
            <div
              style={{ background: `url("/icons/github.png") center / cover` }}
              className={style.iconContainer}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
