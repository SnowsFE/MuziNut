
"use client";
import styles from "../main/css/BestCommunity.module.css";
import CommunityList from "./CommunityList";
import { useCommunityFetchData } from "../useHook";

/*
const listItems = [
  { id: 1, titleName: "게시판 이름", authorName: "작성자", views: 100 },
  { id: 2, titleName: "게시판 이름", authorName: "작성자", views: 100 },
  { id: 3, titleName: "게시판 이름", authorName: "작성자", views: 100 },
  { id: 4, titleName: "게시판 이름", authorName: "작성자", views: 100 },
  { id: 5, titleName: "게시판 이름", authorName: "작성자", views: 100 }
];
*/


export default function BestCommunity() {
  const {
    data: listItems,
    loading,
    error,
  } = useCommunityFetchData(`http://localhost:9999/bestCommunity`);

  // if (loading) return <p>Loading...</p>; // 로딩 중일 때 UI
  // if (error) return <p>Error: {error.message}</p>; // 에러 발생 시 UI
  
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>인기 게시판</h2>
        <h4>모든 게시판 중 조회수가 높은 순서로 노출됩니다.</h4>
      </div>

      {loading && <p>Loading...</p>} {/* 로딩 중일 때 표시될 UI */}
      {error && <p>Error: {error.message}</p>} {/* 에러 발생 시 표시될 UI */}

      {!loading && !error && (
        <>

      <div className={styles.communityList__container}>
        <CommunityList listItems={listItems} />
      </div>
        </>
      )}
    </div>
  );
}

