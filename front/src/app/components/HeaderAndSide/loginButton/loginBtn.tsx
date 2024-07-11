import { useState } from "react";
import UserProfile from "./after";
import styles from "../css/loginBtn.module.css";
import Image from "next/image";
import profile from "@/../../public/svgs/profile.svg";

export type UserInfo = {
  avatar: string;
  username: string;
};

const LoginBtn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 가상의 사용자 정보
  const userInfo: UserInfo = {
    avatar: "/avatar.jpg",
    username: "권지원",
  };

  // 실제 백엔드와 연결할 때 로그인 처리!!
  const login = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {/* 로그인 전 */}
      {!isLoggedIn && (
        <div className={styles.login__btn__container}>
          <div onClick={login} className={styles.login__btn__wrap}>
            <div className={styles.user__img}>
              <Image src={profile} alt="addalbum" width={30} height={30} />
            </div>
            <div>로그인</div>
          </div>
        </div>
      )}

      {/* 로그인 후 */}
      {isLoggedIn && <UserProfile userInfo={userInfo} />}
    </div>
  );
};

export default LoginBtn;
