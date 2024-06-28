"use client";
import { useEffect, useState } from "react";
import styles from "../main/css/BasicCommunity.module.css";
import CommunityList from "./CommunityList";

/*
const listItems = [
  { id: 1, titleName: "게시판 이름", authorName: "작성자", views: 100 },
  { id: 2, titleName: "게시판 이름", authorName: "작성자", views: 100 },
  { id: 3, titleName: "게시판 이름", authorName: "작성자", views: 100 },
  { id: 4, titleName: "게시판 이름", authorName: "작성자", views: 100 },
  { id: 5, titleName: "게시판 이름", authorName: "작성자", views: 100 }
];
*/

export default function BasicCommunity() {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/newCommunity")
      .then((response) => response.json())
      .then((data) => {
        console.log("JSON Server로 온 데이터:", data);
        setListItems(data); // 데이터를 상태로 저장
      })
      .catch((error) => {
        console.error("fetching ERROR!!:", error);
      });
  }, []); // 빈 배열을 전달 -> 컴포넌트가 마운트될 때 1회만 실행

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>자유</h2>
        <h2>인기</h2>
        <h2>홍보</h2>
      </div>

      <div className={styles.communityList__container}>
        <CommunityList listItems={listItems} />
      </div>
      <div className={styles.divided__line}></div>
      <ul className={styles.list__contents__wrap__bottom}>
        <div className={styles.btn__wrap}>
          <button>게시판 더 보러가기</button>
          <button>글 작성하러 가기</button>
        </div>
      </ul>
    </div>
  );
}
