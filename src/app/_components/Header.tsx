import style from "./header.module.css";

export default function Header() {
  return (
    <nav className={style.container}>
      <p className={style.logo}>JUYEON OH</p>
      <p className={style.menu}>menu</p>
    </nav>
  );
}
