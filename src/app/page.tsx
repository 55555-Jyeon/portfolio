import style from "./page.module.css";
import profile from "../../public/profile.jpg";
import Image from "next/image";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      <main className={style.main}>
        <div className={style.ImageContainer}>
          <Image src={profile} className={style.profile} alt="profile image" />
        </div>
        <div className={style.textbox}>
          <p>JUYEON OH</p>
          <p>FE DEVELOPER</p>
        </div>
      </main>
      <p className={style.copyright}>
        copyright &copy; all rights reserved to juyeonOH
      </p>
    </div>
  );
}
