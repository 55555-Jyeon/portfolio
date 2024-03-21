import Image from "next/image";
import style from "./sideBar.module.css";

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
    </div>
  );
}
