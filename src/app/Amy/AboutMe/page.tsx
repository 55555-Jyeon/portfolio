import AboutMe from "./_component/AboutMe";
import SideBar from "./_component/SideBar";
import Skills from "./_component/Skills";
import Timeline from "./_component/Timeline";
import style from "./detail.module.css";

const DetailInfo = () => {
  return (
    <div className={style.main}>
      <SideBar />
      <div className={style.content}>
        <AboutMe />
        <Skills />
        <Timeline />
      </div>
    </div>
  );
};
export default DetailInfo;
