"use client";
import { useEffect, useState } from "react";
import styles from "../main/css/BestCommunity.module.css";
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

export default function BestCommunity() {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/bestCommunity")
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
        <h2>인기 게시판</h2>
        <h4>모든 게시판 중 조회수가 높은 순서로 노출됩니다.</h4>
      </div>
      <div className={styles.communityList__container}>
        <CommunityList listItems={listItems} />
      </div>

      {/* <div className={styles.list__contents__wrap}>
        <ul>
        <li>
            <div className={styles.list__conatiner}>
              <div className={styles.list__title}>
                <span>1. 게시판이름</span>
              </div>
              <div className={styles.list__name__view}>
                <span>작성자 이름</span>
                <span>100</span>
              </div>
            </div>
          </li>    <li>
            <div className={styles.list__conatiner}>
              <div className={styles.list__title}>
                <span>1. 게시판이름</span>
              </div>
              <div className={styles.list__name__view}>
                <span>작성자 이름</span>
                <span>100</span>
              </div>
            </div>
          </li>    <li>
            <div className={styles.list__conatiner}>
              <div className={styles.list__title}>
                <span>1. 게시판이름</span>
              </div>
              <div className={styles.list__name__view}>
                <span>작성자 이름</span>
                <span>100</span>
              </div>
            </div>
          </li>    <li>
            <div className={styles.list__conatiner}>
              <div className={styles.list__title}>
                <span>1. 게시판이름</span>
              </div>
              <div className={styles.list__name__view}>
                <span>작성자 이름</span>
                <span>100</span>
              </div>
            </div>
          </li>    <li>
            <div className={styles.list__conatiner}>
              <div className={styles.list__title}>
                <span>1. 게시판이름</span>
              </div>
              <div className={styles.list__name__view}>
                <span>작성자 이름</span>
                <span>100</span>
              </div>
            </div>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
