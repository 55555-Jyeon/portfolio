import styles from "./page.module.css";
import Characters from "./_components/Character";

const paragraph =
  "hello, my name is Amy! This is my portfolio website, created by NextJS and typescript.";

export default function Home() {
  return (
    <main className={styles.main}>
      <div></div>
      <Characters value={paragraph} />
      <div></div>
    </main>
  );
}
