"use client";

import { useRouter } from "next/navigation";
import style from "./header.module.css";

export default function Header() {
  const router = useRouter();
  return (
    <nav className={style.container}>
      <p className={style.logo} onClick={() => router.push("/")}>
        JUYEON OH
      </p>
      <p className={style.menu}>menu</p>
    </nav>
  );
}
