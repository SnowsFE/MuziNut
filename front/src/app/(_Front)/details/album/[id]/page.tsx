import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import MusicContentInfo from "@/app/components/music-content/MusicContentInfo";
import Link from "next/link";
import { HeartButton } from "@/app/components/button/commonButton";

const album = () => {
  const introduction = {
    title: "소개글",
    text: `aespa, 첫 정규 앨범 ‘Armageddon’ 발매! 힙한 무드 ‘Supernova’→힙합
    댄스곡 ‘Armageddon’으로 강렬한 질주! 세계관 시즌 2 서사 담은 역대급
    스케일 음악+비주얼! ‘글로벌 히트메이커’ aespa가 첫 정규 앨범
    ‘Armageddon’을 발매했다.`,
  };

  const lyrics = {
    title: "가사",
    text: `  like some kind of Supernova Watch out Look at me go 재미 좀 볼 빛의
          Core So hot hot 문이 열려 서로의 존재를 느껴 마치 Discord 날 닮은 너
          너 누구야 like some kind of Supernova Watch out Look at me go 재미 좀 볼 빛의
          Core So hot hot 문이 열려 서로의 존재를 느껴 마치 Discord 날 닮은 너
          너 누구야 like some kind of Supernova Watch out Look at me go 재미 좀 볼 빛의
          Core So hot hot 문이 열려 서로의 존재를 느껴 마치 Discord 날 닮은 너
          너 누구야 like some kind of Supernova Watch out Look at me go 재미 좀 볼 빛의
          Core So hot hot 문이 열려 서로의 존재를 느껴 마치 Discord 날 닮은 너
          너 누구야 like some kind of Supernova Watch out Look at me go 재미 좀 볼 빛의
          Core So hot hot 문이 열려 서로의 존재를 느껴 마치 Discord 날 닮은 너
          너 누구야 like some kind of Supernova Watch out Look at me go 재미 좀 볼 빛의
          Core So hot hot 문이 열려 서로의 존재를 느껴 마치 Discord 날 닮은 너
          너 누구야 like some kind of Supernova Watch out Look at me go 재미 좀 볼 빛의
          Core So hot hot 문이 열려 서로의 존재를 느껴 마치 Discord 날 닮은 너
          너 누구야 like some kind of Supernova Watch out Look at me go 재미 좀 볼 빛의
          Core So hot hot 문이 열려 서로의 존재를 느껴 마치 Discord 날 닮은 너
          너 누구야 like some kind of Supernova Watch out Look at me go 재미 좀 볼 빛의
          Core So hot hot 문이 열려 서로의 존재를 느껴 마치 Discord 날 닮은 너
          너 누구야 like some kind of Supernova Watch out Look at me go 재미 좀 볼 빛의
          Core So hot hot 문이 열려 서로의 존재를 느껴 마치 Discord 날 닮은 너
          너 누구야 like some kind of Supernova Watch out Look at me go 재미 좀 볼 빛의
          Core So hot hot 문이 열려 서로의 존재를 느껴 마치 Discord 날 닮은 너
          너 누구야 like some kind of Supernova Watch out Look at me go 재미 좀 볼 빛의
          Core So hot hot 문이 열려 서로의 존재를 느껴 마치 Discord 날 닮은 너
          너 누구야 like some kind of Supernova Watch out Look at me go 재미 좀 볼 빛의
          Core So hot hot 문이 열려 서로의 존재를 느껴 마치 Discord 날 닮은 너
          너 누구야 like some kind of Supernova Watch out Look at me go 재미 좀 볼 빛의
          Core So hot hot 문이 열려 서로의 존재를 느껴 마치 Discord 날 닮은 너
          너 누구야`,
  };

  const albumInfo = {
    title: "앨범 제목",
    artist: "아이유",
    genre: "발라드, 케이팝",
  };

  const likeNum = 30;

  return (
    <div className={styles.container}>
      음악 사진 눌렀을 때 나오는 상세 페이지 입니다.
      <section className={styles.music__info__section}>
        <h2>앨범 정보</h2>

        <div className={styles.music__info__wrap}>
          <div className={styles.album__info__container}>
            <div className={styles.album__img}>
              <Image
                src="/svgs/album_thumb.png"
                alt="Services"
                width={130}
                height={130}
              />
            </div>
            <div className={styles.song__info}>
              <div className={styles.title__artist}>
                <h1>{albumInfo.title}</h1>
                <h2>
                  <Link href="./">{albumInfo.artist}</Link>
                </h2>
                <div>11곡</div>
              </div>

    
            </div>

            <button className={styles.play__btn}>
              <Image
                src="/svgs/play_btn.svg"
                alt="Services"
                width={60}
                height={60}
              />
            </button>
          </div>

          <div className={styles.divider}> </div>

          <div className={styles.btn__container}>
        

            <div className={styles.btn__share}>
              <span>공유</span>
              <span>
                <a href="#">
                  <Image
                    src="/social/kakao.png"
                    alt="Services"
                    width={40}
                    height={40}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/social/instagram.png"
                    alt="Services"
                    width={40}
                    height={40}
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.lyrics__section}>
        {/* <MusicContentInfo title={introduction.title} text={introduction.text} /> */}
        <MusicContentInfo title={lyrics.title} text={lyrics.text} />
      </section>
    </div>
  );
};

export default album;
