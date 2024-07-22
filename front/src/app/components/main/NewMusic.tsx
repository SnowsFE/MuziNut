"use client";
import styles from "../main/css/NewMusic.module.css";
import Image from "next/image";
import search from "../../../../public/images/addMusic.png";
import { useArtistFetchData, useMusicFetchData } from "../useHook";
import Link from "next/navigation";
import { useState } from "react";

export default function NewMusic() {
  const {
    data: listItems,
    loading,
    error,
  } = useMusicFetchData({
    url: "http://localhost:8080/muzinut/newsong",
    key: "newSongs",
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log("listItems은", listItems);

  const nextSlide = () => {
    if (listItems) {
      setCurrentIndex((prevIndex) =>
        prevIndex === listItems.length - itemsPerPage ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (listItems) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? listItems.length - itemsPerPage : prevIndex - 1
      );
    }
  };

  return (
    <div className={styles.container}>
      {listItems && listItems.length > 0 ? (
        <div className={styles.slider}>
          <button className={styles.arrow} onClick={prevSlide}>
            &lt;
          </button>
          <div className={styles.sliderContainer}>
            {listItems
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((item) => (
                <div key={item.songId} className={styles.item}>
                  <div className={styles.thumbnail}>
                    <Image
                      src={
                        item.albumImg
                          ? `data:image/png;base64,${item.albumImg}`
                          : search
                      }
                      alt="album"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.info}>
                    {/* <h4>{item.title}</h4>
                  <p>{item.nickname}</p> */}
                    <p>{item.songId}</p>
                  </div>
                </div>
              ))}
          </div>
          <button className={styles.arrow} onClick={nextSlide}>
            &gt;
          </button>
        </div>
      ) : (
        <p>데이터를 불러올 수 없습니다.</p>
      )}
    </div>
  );
}
