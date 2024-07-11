import Link from "next/link";
import styles from "./ResetPwd.module.css";
import AuthForm from "@/app/components/loginFormAuth/AuthForm";

const ResetPwdPage = () => {
  return (
    <div className={styles.reset__container}>
      <AuthForm
        title="비밀번호 변경하기"
        actionText="로그인"
        actionLink="/member/login"
      >
        <div className={styles.form__container}>
          <ul>
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

          <div className={styles.pwd__modify__btn}>
            <button type="button">비밀번호 변경하기</button>
          </div>
        </div>
      </AuthForm>
    </div>
  );
};

export default ResetPwdPage;
