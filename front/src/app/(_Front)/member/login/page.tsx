import Link from "next/link";
import styles from "./Login.module.css";
import Image from "next/image";
import kakao from "@/../../public/social/kakao.png";
import instagram from "@/../../public/social/instagram.png";
import naver from "@/../../public/social/naver.png";
import google from "@/../../public/social/google.png";
import AuthForm from "@/app/components/loginFormAuth/AuthForm";

const LoginPage = () => {
  return (
    <div className={styles.login__container}>
      <AuthForm
        title="로그인"
        actionText="회원가입"
        actionLink="/member/signup"
      >
        <div className={styles.form__container}>
          <ul>
            <li>
              <label htmlFor="userId">아이디를 입력하세요(이메일 주소)</label>
              <input
                type="text"
                id="userId"
                name="userId"
                placeholder="아이디를 입력하세요(이메일 주소)"
                required
              />
            </li>
            <li>
              <label htmlFor="password">비밀번호를 입력하세요</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호를 입력하세요"
                required
              />
            </li>
          </ul>

          <div className={styles.error__forgot}>
            <div className={styles.error__msg}>에러 메시지 출력!!</div>
            <div className={styles.forgot__link}>
              <Link href="/member/reset-password">비밀번호를 잊으셨나요?</Link>
            </div>
          </div>

          <div className={styles.login__btn}>
            <button type="button">로그인</button>
          </div>

          <div className={styles.social__login}>
            <div>SNS 계정으로 로그인</div>
            <div className={styles.social__btn}>
              <ul>
                <li>
                  <Link href="#">
                    <Image src={kakao} alt="카카오" width={60} height={60} />
                  </Link>
                  <span>카카오</span>
                </li>
                <li>
                  <Link href="#">
                    <Image
                      src={instagram}
                      alt="인스타그램"
                      width={60}
                      height={60}
                    />
                  </Link>
                  <span>인스타그램</span>
                </li>
                <li>
                  <Link href="#">
                    <Image src={naver} alt="네이버" width={60} height={60} />
                  </Link>
                  <span>네이버</span>
                </li>
                <li>
                  <Link href="#">
                    <Image src={google} alt="구글" width={65} height={65} />
                  </Link>
                  <span>구글</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AuthForm>
    </div>
  );
};
export default LoginPage;
