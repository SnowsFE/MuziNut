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
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.open : styles.closed
        }`}
      >
        <div className={styles.container__section}>
          <ul className={styles.service__container}>
            {/* 홈 부분  */}
            <li>
              <div className={styles.service__btn}>
                <a href="/" className={styles.wrap__icon}>
                  <Image
                    src="/svgs/home.svg"
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
              <div className={styles.service__btn}>
                <a href="/chart/music" className={styles.wrap__icon}>
                  <Image
                    src="/svgs/chart.svg"
                    alt="Services"
                    width={30}
                    height={30}
                  />
                  <span className={styles.close__text}>차트</span>
                </a>
                {isSidebarOpen && (
                  <ul>
                    <li>
                      <span>차트</span>
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
              <div className={styles.service__btn}>
                <a href="/community" className={styles.wrap__icon}>
                  <Image
                    src="/svgs/community.svg"
                    alt="Services"
                    width={30}
                    height={30}
                  />
                  <span className={styles.close__text}>커뮤니티</span>
                </a>
                {isSidebarOpen && (
                  <ul>
                    <li>
                      <span>커뮤니티</span>
                    </li>
                    <li>
                      <a href="/community/free-boards">
                        <span>자유 게시판</span>
                      </a>
                    </li>
                    <li>
                      <a href="/community/request-boards">
                        <span>게시판 요청</span>
                      </a>
                    </li>
                    <li>
                      <a href="/community/recruit-boards">
                        <span>모집</span>
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </li>

            {/* 마이픽 부분 */}
            <li>
              <div className={styles.service__btn}>
                <a href="/mypick/bestpick" className={styles.wrap__icon}>
                  <Image
                    src="/svgs/mypick.svg"
                    alt="Services"
                    width={30}
                    height={30}
                  />
                  <span className={styles.close__text}>마이픽</span>
                </a>
                {isSidebarOpen && (
                  <ul>
                    <li>
                      <span>마이픽</span>
                    </li>
                    <li>
                      <a href="/mypick/bestpick">
                        <span>응원하기</span>
                      </a>
                    </li>
                    <li>
                      <a href="/mypick/vote">
                        <span>투표하기</span>
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </li>

            {/* 앨범 꾸미기 부분 */}
            <li>
              <div className={styles.service__btn}>
                <a href="#" className={styles.wrap__icon}>
                  <Image
                    src="/svgs/album_styling.svg"
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

            {/* 구역 나누기 */}

            <div className={styles.divided__line}></div>

            {/* 고객 센터 부분 */}
            <li>
              <div className={styles.service__btn}>
                <a href="#" className={styles.wrap__icon}>
                  <Image
                    src="/svgs/customer_service.svg"
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
              <div className={styles.service__btn}>
                <a href="/event" className={styles.wrap__icon}>
                  <Image
                    src="/svgs/event.svg"
                    alt="Services"
                    width={30}
                    height={30}
                  />
                  <span className={styles.close__text}>이벤트</span>
                </a>
                {isSidebarOpen && (
                  <ul>
                    <li>
                      <span>이벤트</span>
                    </li>
                    <li>
                      <a href="/event-notice">
                        <span>공지사항</span>
                      </a>
                    </li>
                    <li>
                      <a href="/event">
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
    </div>
  );
}
