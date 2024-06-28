"use client";
import { useState } from "react";
import styles from "../HeaderAndSide/css/Navbar.module.css";
import Image from "next/image";
import search from "@/../public/svgs/search.svg";
import downarrow from "@/../public/svgs/downarrow.svg";
import addalbum from "@/../public/svgs/addalbum.svg";
import chat from "@/../public/svgs/chat.svg";
import alarm from "@/../public/svgs/alarm.svg";
import menuBar from "@/../public/svgs/menu.svg";
import profile from "@/../public/svgs/profile.svg";
import DarkMode from "../darkmode/globalstyle";
import Link from "next/link";

interface NavbarProps {
  toggleSidebar: () => void;
}

// toggleSidebar 함수를 prop으로 받아와서 클릭 이벤트( handleMenuClick ) 에 연결
export default function Navbar({ toggleSidebar }: NavbarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 1) 클릭되는 순간(이벤트가 발생하는 순간 toggleSidebar 함수 호출)
  function handleMenuClick() {
    setIsSidebarOpen(!isSidebarOpen); // 2) Sidebar의 열림/닫힘 상태를 반전
    toggleSidebar();
  }

  return (
    <div className={styles.header__container}>
      {/* 왼쪽(메뉴 바, 로고) */}
      <div className={styles.left__section}>
        <div className={styles.menu__bar} onClick={handleMenuClick}>
          <Image src={menuBar} alt="addalbum" width={36} height={36} />
        </div>
        <div className={styles.logo}>
          <a href="/">MuziNut</a>
        </div>
      </div>

      {/* 가운데(검색 창) */}
      <div className={styles.search__section}>
        <form action="/details/search" className={styles.search__bar}>
          <div>
            <input
              type="text"
              placeholder="찾으려는 음악을 검색하세요!"
            ></input>
          </div>
          <button className={styles.search__btn}>
            <Image src={search} alt="search" width={24} height={24} />
          </button>
        </form>
      </div>

      {/* 오른쪽 nav 메뉴 */}
      <div className={styles.right__section}>
        <div className={styles.album__upload}>
        <Link href="/add-album/[step]" as="/add-album/1">
            <Image src={addalbum} alt="addalbum" width={40} height={40} />
          </Link>
          <span>업로드</span>
        </div>

        <DarkMode />
        {/* <Image src={light_mode} alt="chat" width={30} height={30} /> */}

        <div className={styles.divided__line}></div>

        <a href="#">
          <Image src={chat} alt="chat" width={40} height={40} />
        </a>

        <a href="#">
          <Image src={alarm} alt="alarm" width={40} height={40} />
        </a>

        <a href="#">
          <Image src={profile} alt="profile" width={40} height={40} />
          <Image src={downarrow} alt="downarrow" width={24} height={40} />
        </a>
      </div>
    </div>
  );
}
