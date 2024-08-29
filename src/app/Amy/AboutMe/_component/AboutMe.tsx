import style from "./aboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={style.block}>
      <h1>About Me</h1>
      <div className={style.codebox}>
        <div>
          <p>
            <span className={style.blue}>const</span>
            <span className={style.bold}>&nbsp;Amy&nbsp;</span>
            <span className={style.brown}>=&nbsp;</span>
            <span className={style.gray}>&#123;</span>
          </p>
          <p className={style.tab}>
            <span className={style.red}>name</span>
            <span className={style.brown}>&nbsp;&#58;&nbsp;</span>
            <span className={style.green}>&#34;오주연&#34;</span>
            <span className={style.gray}>,</span>
          </p>
          <p className={style.tab}>
            <span className={style.red}>age</span>
            <span className={style.brown}>&nbsp;&#58;&nbsp;</span>
            <span className={style.red}>26</span>
            <span className={style.gray}>,</span>
          </p>
          <p className={style.tab}>
            <span className={style.red}>developer</span>
            <span className={style.brown}>&nbsp;&#58;&nbsp;</span>
            <span className={style.green}>&#34;FE&#34;</span>
            <span className={style.gray}>,</span>
          </p>
          <p className={style.tab}>
            <span className={style.red}>email</span>
            <span className={style.brown}>&nbsp;&#58;&nbsp;</span>
            <span className={style.green}>&#34;jyeon380516@gmail.com&#34;</span>
            <span className={style.gray}>,</span>
          </p>
          <p className={style.tab}>
            <span className={style.red}>phoneNum</span>
            <span className={style.brown}>&nbsp;&#58;&nbsp;</span>
            <span className={style.green}>&#34;010-6363-3087&#34;</span>
            <span className={style.gray}>,</span>
          </p>
          <p className={style.tab}>
            <span className={style.red}>hobby</span>
            <span className={style.brown}>&nbsp;&#58;&nbsp;</span>
            <span className={style.green}>
              &#123;&#34;✈️&#34;,&#34;🪴&#34;,&#34;🎧&#34;,&#34;🛏️&#34;&#125;
            </span>
            <span className={style.gray}>,</span>
          </p>
          <p>&#125;</p>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
