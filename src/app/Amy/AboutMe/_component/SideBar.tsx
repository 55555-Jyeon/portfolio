import Image from "next/image";
import style from "./sideBar.module.css";
import Link from "next/link";
import { url } from "inspector";

export default function SideBar() {
  return (
    <div>
      <Image
        className={style.strap}
        width={200}
        height={300}
        src="/images/strap.png"
        alt="strap"
      />
      <div className={style.glassEffect} />
      <div className={style.container}>
        <h1>WEB | FE DEVELOPER</h1>
        <div className={style.imageContainer}>
          <Image
            width={200}
            height={300}
            src="/images/menu05.jpg"
            alt="profile image"
          />
        </div>
        <div className={style.textbox}>
          <h1>JUYEON OH</h1>
          <h1>오&nbsp;주&nbsp;연</h1>
          <h1></h1>
        </div>
      </div>
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
  );
}
