import { useState } from "react";
import styles from "../css/after.module.css";
import { UserInfo } from "./loginBtn";
import Image from "next/image";
import profileBtn from "@/../../public/svgs/profile.svg";
import Link from "next/link";

type UserProfileProps = {
  userInfo: UserInfo;
};

const UserProfile = ({ userInfo }: UserProfileProps) => {
  //사용자 정보가 들어오면 디테일 박스 열리게
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // 사용자 정보 상자 열기/닫기 토글로
  const toggleUserDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  // Link 클릭 시 isDetailsOpen을 닫음
  const handleLinkClick = () => {
    setIsDetailsOpen(false);
  };

  return (
    <div>
      <div className={styles.login__btn__container}>
        <div onClick={toggleUserDetails} className={styles.login__btn__wrap}>
          <div className={styles.user__img}>
            <Image src={profileBtn} alt="addalbum" width={30} height={30} />
          </div>
          <div className={styles.user__name}> {userInfo.username}</div>
        </div>
      </div>

      {isDetailsOpen && (
        <div className={styles.user__detail__box}>
          <div className={styles.my__and__book}>
            <Link
              href="/test"
              className={styles.my__page}
              onClick={handleLinkClick}
            >
              <Image src={profileBtn} alt="addalbum" width={30} height={30} />
              <span>마이페이지</span>
            </Link>
            <div className={styles.divider__right}></div> {/* 구분 선 */}
            <Link
              href="/details/album"
              className={styles.book__mark}
              onClick={handleLinkClick}
            >
              <Image src={profileBtn} alt="addalbum" width={30} height={30} />
              <span>북마크</span>
            </Link>
          </div>
          <div className={styles.chat__and__nuts}>
            <Link
              href="/friends-list/chat"
              className={styles.chat}
              onClick={handleLinkClick}
            >
              <Image src={profileBtn} alt="addalbum" width={30} height={30} />
              <span>채팅</span>
            </Link>
            <div className={styles.divider}></div> {/* 구분 선 */}
            <Link
              href="/friends-list"
              className={styles.friend__list}
              onClick={handleLinkClick}
            >
              <Image src={profileBtn} alt="addalbum" width={30} height={30} />
              <span>친구 목록</span>
            </Link>
            <div className={styles.divider}></div> {/* 구분 선 */}
            <Link href="/" className={styles.nuts} onClick={handleLinkClick}>
              <Image src={profileBtn} alt="addalbum" width={30} height={30} />
              <span>너츠</span>
            </Link>
          </div>
          <div className={styles.divider}></div> {/* 구분 선 */}
          <div className={styles.logout__btn}>
            <Image src={profileBtn} alt="addalbum" width={30} height={30} />
            <span>로그아웃</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
