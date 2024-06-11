"use client";
import { useState } from "react";
import styles from "../HeaderAndSide/css/Navbar.module.css";
import Image from "next/image";
import search from "@/../public/images/addMusic.png";
import downarrow from "@/../public/images/addMusic.png";
import addalbum from "@/../public/images/addMusic.png";
import chat from "@/../public/images/addMusic.png";
import alarm from "@/../public/images/addMusic.png";
import profile from "@/../public/images/addMusic.png";
import AddAlbumModal from "../../submit/album/page";

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
      <div className={styles.left__section}>
        <div className={styles.menu__bar} onClick={handleMenuClick}>
          메뉴 바
        </div>
        <div className={styles.logo}>로고</div>
      </div>

      <form action="/details/search" className={styles.search__bar}>
        <Image src={search} alt="search" width={24} height={24} />
        <input type="text" placeholder="찾으려는 음악을 검색하세요!"></input>
        <Image src={downarrow} alt="downarrow" width={24} height={24} />
      </form>

      <div className={styles.right__menu}>
        {/* 앨범 추가 부분 */}
        <a href="/submit/album">
          <Image src={addalbum} alt="addalbum" width={36} height={36} />
        </a>

        <Image src={chat} alt="chat" width={40} height={40} />
        <Image src={alarm} alt="alarm" width={40} height={40} />
        <Image src={profile} alt="profile" width={36} height={36} />
      </div>
    </div>
  );
}
