import Link from "next/link";
import styles from "./Signup.module.css";
import Image from "next/image";
import AuthForm from "@/app/components/loginFormAuth/AuthForm";
import kakao from "@/../../public/social/kakao.png";
import instagram from "@/../../public/social/instagram.png";
import naver from "@/../../public/social/naver.png";
import google from "@/../../public/social/google.png";

const SignUpPage = () => {
  return (
    <div className={styles.login__container}>
      <AuthForm title="회원가입" actionText="로그인" actionLink="/member/login">
        <div className={styles.form__container}>
          <ul>
            <li>
              <label htmlFor="username"> 닉네임을 입력하세요</label>
              <div className={styles.input__wrapper}>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="닉네임을 입력하세요 -중복체크"
                  required
                />
                <button>중복확인</button>
              </div>
            </li>
            <li>
              <label htmlFor="userId"> 이메일 인증</label>
              <div className={styles.input__wrapper}>
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  placeholder="아이디를 입력하세요(이메일 주소)- 중복체크 --발송/재발송"
                  required
                />
                <button>발송</button>
              </div>
            </li>

            <li>
              {/* <label htmlFor="certificationNum">인증번호</label> */}
              <div className={styles.input__wrapper}>
                <input
                  type="text"
                  id="certification"
                  name="certification"
                  placeholder="인증번호를 입력하세요 - 발송 눌러야 active 유효시간 5분"
                  required
                />
                <button>인증하기</button>
              </div>
            </li>

            <li>
              <label htmlFor="password">비밀번호 입력</label>
              <div className={styles.input__wrapper}>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="비밀번호를 입력하세요"
                  required
                />
              </div>
            </li>

            <li>
              {/* <label htmlFor="passwordRe">비밀번호 다시</label> */}
              <div className={styles.input__wrapper}>
                <input
                  type="password"
                  id="passwordRe"
                  name="passwordRe"
                  placeholder="비밀번호 확인"
                  required
                />
              </div>
            </li>
          </ul>

          <div className={styles.error__msg}>에러 메시지 출력!!</div>

          <div className={styles.signup__btn}>
            <button type="button">회원 가입</button>
          </div>

          <div className={styles.social__signup}>
            <div>SNS 계정으로 회원가입</div>
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
export default SignUpPage;
