import Characters from "./_component/Character";
import styles from "./mypage.module.css";

const paragraph =
  "hello, my name is Amy! This is my portfolio website, created by NextJS and typescript.";

export default function Mypage() {
  return (
    <main className={styles.main}>
      <div></div>
      <Characters value={paragraph} />
      <div></div>
    </main>
  );
}
