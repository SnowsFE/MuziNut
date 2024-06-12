import type { Metadata } from "next";
import "./globals.css";
import styles from "./css/layout.module.css";
import HeaderAndSide from "./components/HeaderAndSide/HeaderAndSide";

export const metadata: Metadata = {
  title: "뮤지넛",
  description: "무료 음악 스트리밍 사이트",
  icons: {
    icon: "/images/뮤지넛.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className={styles.container}>
          <HeaderAndSide />

          <section className={styles.main__page}>
            {children} {/* MainPage가 여기에 렌더링 */}
          </section>
        </div>
      </body>
    </html>
  );
}
