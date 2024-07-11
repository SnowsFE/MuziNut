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
  const [category, setCategory] = useState('free'); // 초기 카테고리 설정

  useEffect(() => {
    fetch(`http://localhost:9999/${category}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("JSON Server로 온 데이터:", data);
        setListItems(data); // 데이터를 상태로 저장
      })
      .catch((error) => {
        console.error("fetching ERROR!!:", error);
      });
  }, [category]); // 카테고리가 변경될 때마다 실행

  const handleCategoryClick = (newCategory: string) => {
    setCategory(newCategory); // 카테고리 변경
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 onClick={() => handleCategoryClick("free")}>자유</h2>
        <h2 onClick={() => handleCategoryClick("music")}>음악</h2>
        <h2 onClick={() => handleCategoryClick("recruit")}>모집</h2>
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
