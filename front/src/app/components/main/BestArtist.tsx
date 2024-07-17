// 렌더링 하는 부분

"use client";
import styles from "../main/css/BestArtist.module.css";
import Image from "next/image";
import search from "../../../../public/images/favicon.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useArtistFetchData } from "../useHook";

export default function BestArtist() {
  const {
    data: listItems,
    loading,
    error,
  } = useArtistFetchData("http://localhost:9999/artistData");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.list__contents__wrap}>
        <ul>
          {listItems.map((item, index) => (
            <li key={item.artistName}>
              <Link href={`/community/detail/${item.artistName}`}>
                <div className={styles.list__conatiner}>
                  <div>
                    <h1>{index + 1}</h1>
                    <h4>{item.artistName}</h4>
                  </div>
                  <Image src={search} alt="search" width={120} height={120} />
                  <div>
                    <div className={styles.list__container__row}>
                      <h6>팔로잉</h6>
                      <Image src={search} alt="search" width={30} height={30} />
                    </div>
                    <div className={styles.list__container__row}>
                      <h6>아티스트 바로가기</h6>
                      <Image src={search} alt="search" width={30} height={30} />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
