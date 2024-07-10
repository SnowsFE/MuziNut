"use client";
import "./globals.css";
import { useState } from "react";
import styles from "./css/layout.module.css";
import HeaderAndSide from "./components/HeaderAndSide/HeaderAndSide";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Sidebar의 상태를 변경하는 함수
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="ko">
      <body>
        <div className={styles.container}>
          <div
            className={isSidebarOpen ? styles.side__open : styles.side__close}
          >
            <div className={styles.header__side}>
              <HeaderAndSide
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
              />
            </div>

            <section className={styles.main__page}>{children}</section>
          </div>
        </div>
      </body>
    </html>
  );
}

// 추가
