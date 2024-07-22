"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import ArtistTableRow from "@/app/components/chart/ArtistList";
import axios from "axios";

const artist = () => {
  return (
    <div className={styles.container}>
      <div>인기아티스트 Top50</div>
      <ArtistList />
    </div>
  );
};
export default artist;

export const ArtistList = () => {
  const [data, setData] = useState(100); // 아티스트 차트 리스트 개수
  console.log("아티스트 차트 페이지 시작");
  console.log("data는 ", data); //처음에 100나오고 fetch로 업데이트 된 1로 됨

  const fetchData = async () => {
    console.log("main get 요청 눌림");
    try {
      const response = await axios.get("http://localhost:8080/music/1", {
        params: { page: 1 }, // {page:2}
      });
      console.log("data는 ", data); //초기값 100으로 나옴

      // 서버로부터 받은 아이디
      const serverResponse = response.data;
      console.log("Fetched data:", serverResponse); // 데이터 출력 확인
      console.log("Fetched-content data:", serverResponse.content); // 데이터 내용\
      console.log("Fetched-pageNumber data:", serverResponse.pageNumber); // 현재 페이지 숫자
      setData(serverResponse.pageNumber);
      console.log("Fetched-pageSize data:", serverResponse.pageSize); // 컬럼 수
      console.log("Fetched-totalPages data:", serverResponse.totalPages); // 전체 페이지(최대 5개)

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        console.log("서버로부터 받은 에러 데이터", error.response.data);
        console.log("서버로부터 받은 에러 상태코드", error.response.status);
        console.log("서버로부터 받은 에러 headers", error.response.headers);

        if (error.response.status === 404) {
          alert("파일이 존재하지 않습니다.");
          return;
        } else {
          alert("[error] 서버와 통신 오류 발생.");
        }
      } else {
        //axios 에러가 아닌 다른 예외가 발생한 경우
        alert("[error] 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  const rows = Array.from({ length: 10 }, (_, index) => (
    <ArtistTableRow key={index} />
  ));

  return (
    <div className={styles.artist__chart__container}>
      <button onClick={fetchData}>안녕</button>
      fetchData
      <table border={0}>
        <thead>
          <tr>
            <th>
              <span className={styles.blind}>랭킹</span>
            </th>
            <th>
              <span className={styles.blind}>앨범 썸네일</span>
            </th>
            <th>
              <span className={styles.blind}>가수정보</span>
            </th>
            <th>
              <span className={styles.blind}>팔로잉버튼</span>
            </th>
          </tr>
        </thead>
        <tbody className={styles.table__row}>{rows}</tbody>
      </table>
    </div>
  );
};
