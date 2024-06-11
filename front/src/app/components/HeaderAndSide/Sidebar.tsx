
import styles from "../HeaderAndSide/css/Sidebar.module.css";
import Image from "next/image";
interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isSidebarOpen }: SidebarProps) {
  

  return (
    <div>
      <div
        className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}
      >
    

        <ul className={styles.open__contents__container}>
          {/* 홈 부분  */}
          <li>
            <div className={styles.open__contents}>
              <a href="/">
                <Image
                  src="/images/addMusic.png"
                  alt="Services"
                  width={30}
                  height={30}
                />
                <span className={styles.close__text}>홈</span>
              </a>
              {isSidebarOpen && (
                <ul>
                  <li>
                    <a href="/">
                      <span>홈</span>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>

          {/* 차트 부분 */}
          <li>
            <div className={styles.open__contents}>
              <a href="/chart/music">
                <Image
                  src="/images/addMusic.png"
                  alt="Services"
                  width={30}
                  height={30}
                />
                <span className={styles.close__text} >차트</span>
              </a>
              {isSidebarOpen && (
                <ul>
                  <li>
                    <a href="/chart/music">
                      <span>차트</span>
                    </a>
                  </li>
                  <li>
                    <a href="/chart/music">
                      <span>음원</span>
                    </a>
                  </li>
                  <li>
                    <a href="/chart/artist">
                      <span>아티스트</span>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>

          {/* 커뮤니티 부분 */}
          <li>
            <div className={styles.open__contents}>
              <a href="#">
                <Image
                  src="/images/addMusic.png"
                  alt="Services"
                  width={30}
                  height={30}
                />
                <span className={styles.close__text}>커뮤니티</span>
              </a>
              {isSidebarOpen && (
                <ul>
                  <li>
                    <a href="#">
                      <span>커뮤니티</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>음악 게시판</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>자유 게시판</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>게시판 요청</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>모집</span>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>

          {/* 마이픽 부분 */}
          <li>
            <div className={styles.open__contents}>
              <a href="#">
                <Image
                  src="/images/addMusic.png"
                  alt="Services"
                  width={30}
                  height={30}
                />
                <span className={styles.close__text}>마이픽</span>
              </a>
              {isSidebarOpen && (
                <ul>
                  <li>
                    <a href="#">
                      <span>마이픽</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>응원하기</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>후원하기</span>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>

          {/* 앨범 꾸미기 부분 */}
          <li>
            <div className={styles.open__contents}>
              <a href="#">
                <Image
                  src="/images/addMusic.png"
                  alt="Services"
                  width={30}
                  height={30}
                />
                <span className={styles.close__text}>
                  앨범
                  <br />
                  꾸미기
                </span>
              </a>
              {isSidebarOpen && (
                <ul>
                  <li>
                    <a href="#">
                      <span>앨범 꾸미기</span>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>

          {/* 고객 센터 부분 */}
          <li>
            <div className={styles.open__contents}>
              <a href="#">
                <Image
                  src="/images/addMusic.png"
                  alt="Services"
                  width={30}
                  height={30}
                />
                <span className={styles.close__text}>고객센터</span>
              </a>
              {isSidebarOpen && (
                <ul>
                  <li>
                    <a href="#">
                      <span>고객센터</span>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>

          {/* 이벤트 */}
          <li>
            <div className={styles.open__contents}>
              <a href="#">
                <Image
                  src="/images/addMusic.png"
                  alt="Services"
                  width={30}
                  height={30}
                />
                <span className={styles.close__text}>이벤트</span>
              </a>
              {isSidebarOpen && (
                <ul>
                  <li>
                    <a href="#">
                      <span>이벤트</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>공지사항</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>이벤트</span>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
