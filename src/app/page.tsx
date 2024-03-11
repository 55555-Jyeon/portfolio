"use client";

import style from "./page.module.css";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <main className={style.main}>
        <div className={style.ImageContainer}>
          <motion.div
            onClick={() => router.push("/Amy")}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={profile}
              className={style.profile}
              alt="profile image"
            />
          </motion.div>
        </div>
        <motion.div exit={{ opacity: 0 }} className={style.textbox}>
          <p>JUYEON OH</p>
          <p>FE DEVELOPER</p>
        </motion.div>
        <p className={style.copyright}>
          copyright &copy; all rights reserved to juyeonOH
        </p>
      </main>
    </AnimatePresence>
  );
}
