import style from "./movingText.module.css";

export default function MovingText() {
  return (
    <main className={style.main}>
      <div className={style.sliderContainer}>
        <div className={style.slider}>
          <p>Frontend Developer : </p>
          <p>더 Agile하게, 더 Lean하게!</p>
        </div>
      </div>
    </main>
  );
}
