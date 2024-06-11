import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const album = () => {
  return (
    <div className={styles.container}>
      음악 사진 눌렀을 때 나오는 상세 페이지 입니다.
      <div className={styles.music__info__wrapper}>
        <h2>음악 정보</h2>
        <div className={styles.wrapper__inner}>
          <div className={styles.info__inner__left}>
            <Image
              src="/images/addMusic.png"
              alt="Services"
              width={130}
              height={130}
            />
          </div>
          <div className={styles.info__inner__middle}>
            <div>음악 이름</div>
            <div>가수 이름</div>
            <div>
              <span>발매일</span>
              <span>2024.02.20</span>
            </div>
            <div>
              <span>장르</span>
              <span>발라드</span>
            </div>
          </div>
          <div className={styles.info__inner__right}>
            <div>
              <Image
                src="/images/addMusic.png"
                alt="Services"
                width={30}
                height={30}
              />
              <span>123</span>
            </div>
            <div>
              <Image
                src="/images/addMusic.png"
                alt="Services"
                width={30}
                height={30}
              />
              <a href="#">
                {" "}
                <Image
                  src="/images/addMusic.png"
                  alt="Services"
                  width={30}
                  height={30}
                />{" "}
                <Image
                  src="/images/addMusic.png"
                  alt="Services"
                  width={30}
                  height={30}
                />{" "}
                <Image
                  src="/images/addMusic.png"
                  alt="Services"
                  width={30}
                  height={30}
                />{" "}
                <Image
                  src="/images/addMusic.png"
                  alt="Services"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.music__introduce__wrapper}>
        <h2>음악 소개</h2>
        <div className={styles.wrapper__inner}>
          aespa, 첫 정규 앨범 ‘Armageddon’ 발매! 힙한 무드 ‘Supernova’→힙합
          댄스곡 ‘Armageddon’으로 강렬한 질주! 세계관 시즌 2 서사 담은 역대급
          스케일 음악+비주얼! ‘글로벌 히트메이커’ aespa가 첫 정규 앨범
          ‘Armageddon’을 발매했다.
        </div>
        <button>
          <span>펼치기</span>
        </button>
      </div>
      <div className={styles.lyrics__wrapper}>
        <h2>가사</h2>
        <div className={styles.wrapper__inner}>
          like some kind of Supernova Watch out Look at me go 재미 좀 볼 빛의
          Core So hot hot 문이 열려 서로의 존재를 느껴 마치 Discord 날 닮은 너
          너 누구야
        </div>
        <button>
          <span>펼치기</span>
        </button>
      </div>
    </div>
  );
};

export default album;
