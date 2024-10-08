"use client";

import style from "./page.module.css";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <main className={style.main}>
        <div className={style.ImageContainer}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Image
              onClick={() => router.push("/Amy")}
              src={profile}
              className={style.profile}
              loading="eager"
              alt="profile image"
              width={400}
              height={482}
            />
          </motion.div>
        </div>
        <motion.div exit={{ opacity: 0 }} className={style.textbox}>
          <p>JUYEON OH</p>
          <p>FE DEVELOPER</p>
        </motion.div>
      </main>
    </AnimatePresence>
  );
};
export default Home;
