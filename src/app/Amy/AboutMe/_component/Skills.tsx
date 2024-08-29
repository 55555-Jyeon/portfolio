import style from "./skills.module.css";

const Skills = () => {
  return (
    <div className={style.block}>
      <h1>Skills</h1>
      <div className={style.innerbox}>
        <div>
          <h2>Language</h2>
          <p>JavaScript</p>
          <p>TypeScript</p>
        </div>
        <div>
          <h2>FE Framework</h2>
          <p>React</p>
          <p>NextJS</p>
        </div>
        <div>
          <h2>Library</h2>
          <p>Recoil</p>
          <p>Zustand</p>
          <p>ReactQuery</p>
          <p>Storybook</p>
        </div>
        <div>
          <h2>StyleSheet</h2>
          <p>emotion / styled-component</p>
          <p>tailwind / css</p>
          <p>scss</p>
        </div>
        <div>
          <h2>UI Kit</h2>
          <p>Meterial UI (MUI)</p>
          <p>Chakara UI</p>
        </div>
        <div>
          <h2>Deploy</h2>
          <p>Vercel</p>
          <p>Netlify</p>
        </div>
        <div>
          <h2>BE</h2>
          <p>nextjs-app-router</p>
        </div>
        <div>
          <h2>Collaboration Tool</h2>
          <p>Jira / Linear</p>
          <p>Notion / Slack</p>
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
};
export default Skills;
