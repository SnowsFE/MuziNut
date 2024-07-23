"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import MusicList from "@/app/components/main/MusicList";
import { useParams } from "next/navigation";

type SongData = {
  nickname: string;
  songId: number;
  title: string;
}
type AlbumData = {
  name: string;
  albumImg: string;
  nickname: string;
  intro: string;
  songs: Array<SongData>;
};
type Params = {
  id: string;
};

export default function Album() {
  const params = useParams() as Params;
  const { id } = params;
  console.log("params는", params);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const [albumData, setAlbumData] = useState<AlbumData | null>(null);
  console.log(albumData?.songs);



  useEffect(() => {
    if (id) {
      const fetchSongData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/album/${id}`);
          const data: AlbumData = await response.json();
          setAlbumData(data);
        } catch (error) {
          console.error("앨범데이터 정보를 가져오는 데 실패했습니다.", error);
        }
      };

      fetchSongData();
    }
  }, [id]);

  if (!albumData) return <div>Loading...</div>;

  console.log("음악 정보들",albumData.songs);


  return (
    <div className={styles.container}>
      <section className={styles.music__info__section}>
        <h2>앨범 정보</h2>

        <div className={styles.music__info__wrap}>
          <div className={styles.album__info__container}>
            <div className={styles.album__img}>
              <Image
                src="/svgs/album_thumb.png"
                alt="Album Thumbnail"
                width={130}
                height={130}
              />
            </div>
            <div className={styles.song__info}>
              <div className={styles.title__artist}>
                <h1 onClick={handleOpenModal} style={{ cursor: "pointer" }}>
                  {albumData.name}
                </h1>
                <h2>
                  <Link href="./">{albumData.nickname}</Link>
                </h2>
                <div>{albumData.songs.length} 곡</div>
              </div>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.btn__container}>
            <div className={styles.btn__share}>
              <span>공유</span>
              <span>
                <a href="#">
                  <Image
                    src="/social/kakao.png"
                    alt="Kakao"
                    width={40}
                    height={40}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/social/instagram.png"
                    alt="Instagram"
                    width={40}
                    height={40}
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>


      <section>
        <h2>수록곡</h2>

        <div className={styles.container}>
      <div className={styles.play__option__container}>
        <a href="#">
          <button>전체 재생</button>
        </a>
        <a href="#">
          <button>선택 재생</button>
        </a>
      </div>

      <div className={styles.music__chart__container}>
        <table className={styles.table__container}>
          <thead>
            <tr className={styles.blind}>
              <th>체크박스</th>
              <th>썸네일</th>
              <th>랭킹</th>
              <th>음악이름</th>
              <th>가수 이름</th>
              <th>재생</th>
              <th>옵션</th>
            </tr>
          </thead>
          <tbody className={styles.table__row}>
            {albumData.songs ? (
              albumData.songs.map((songs, index) => (
                <MusicList
                  key={songs.songId}
                  musicChartData={{
                    songId: songs.songId,
                    albumImg: albumData.albumImg,
                    title: songs.title,
                    nickname: songs.nickname  
                  }}
                  index={index}
                  showCheckbox={true}
                />
              ))
            ) : (
              <tr>
                <td colSpan={7}>데이터를 불러올 수 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    
      </section>
    

      <div className={`${styles.modal} ${isModalOpen ? styles.open : ""}`}>
        <div className={styles.modal__content}>
          <button className={styles.close__btn} onClick={handleCloseModal}>
            X
          </button>
          {/* <MusicContentInfo title={albumData.name} text={albumData.intro} /> */}
        </div>
      </div>
    </div>
  );
}
