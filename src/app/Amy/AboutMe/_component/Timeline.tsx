import style from "./timeline.module.css";

export default function Timeline() {
  return (
    <div className={style.block}>
      <h1>TimeLine</h1>
      <div className={style.innerbox}>
        <div className={style.doubleInner}>
          <h2>🖥️ CODE</h2>
          <div>
            <h3>Study</h3>
            <p>
              InsideCoding Study<span>2024.03 - 2024.04</span>
            </p>
            <p>
              MobiAlgo Study<span>2024.01 - 2024.02</span>
            </p>
            <p>
              MobiBook Study<span>2024.01 - 2024.02</span>
            </p>
            <p className={style.strong}>
              Mobi Community <span>2023.10 - 2024.02</span>
            </p>
            <p>
              koreaIT 학원 <span>2023.04 - 2023.10</span>
            </p>
          </div>
        </div>
        <div className={style.doubleInner}>
          <h2>🎨 DESIGN</h2>
          <div>
            <h3>Certificate</h3>
            <p>
              웹디자인기능사 <span>2021.10</span>
            </p>
          </div>
          <div>
            <h3>Career</h3>
            <p>
              바비컴퍼니 <span>웹디자이너 2022.04 - 2022.06</span>
            </p>
            <p>
              Berg&Ridge <span>웹퍼블리셔 2021.11 - 2022.03</span>
            </p>
          </div>
          <div>
            <h3>Study</h3>
            <p>
              그린컴퓨터 아카데미
              <span>2021.06 - 2021.12</span>
            </p>
            <p>
              상명대학교 산업디자인학과 졸업 <span>2021.02</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
