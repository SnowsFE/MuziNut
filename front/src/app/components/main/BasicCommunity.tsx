"use client";
import styles from "../main/css/BasicCommunity.module.css";
import CommunityList from "./CommunityList";
import { useCommunityFetchData } from "../useHook";
import { useState } from "react";

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
  const [category, setCategory] = useState("free"); // 초기 카테고리 설정
  const {
    data: listItems,
    loading,
    error,
  } = useCommunityFetchData(`http://localhost:9999/${category}`);

  // if (loading) return <p>Loading...</p>; // 로딩 중일 때 UI
  // if (error) return <p>Error: {error.message}</p>; // 에러 발생 시 UI

  const handleCategoryClick = (newCategory: string) => {
    setCategory(newCategory); // 카테고리 변경
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2
          className={category === "free" ? styles.selected__category : ""}
          onClick={() => handleCategoryClick("free")}
        >
          자유
        </h2>
        <h2
          className={category === "music" ? styles.selected__category : ""}
          onClick={() => handleCategoryClick("music")}
        >
          음악
        </h2>
        <h2
          className={category === "recruit" ? styles.selected__category : ""}
          onClick={() => handleCategoryClick("recruit")}
        >
          모집
        </h2>
      </div>
      {loading && <p></p>} {/* 로딩 중일 때 표시될 UI */}
      {error && <p>Error: {error.message}</p>} {/* 에러 발생 시 표시될 UI */}
      {!loading && !error && (
        <>
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
        </>
      )}
    </div>
  );
}

