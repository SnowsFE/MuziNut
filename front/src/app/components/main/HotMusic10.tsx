/*
음악 데이터를 useMusicFecthData로 가져와서 테이블로 렌더링
MusicList로 데이터 전달!!!
 */

"use client";
import styles from "./css/BestMusic.module.css";
import search from "../../../../public/images/favicon.png";
import { useMusicFetchData } from "../useHook";
import MusicList from "./MusicList";

// export type MusicDataItem = {
//   songId: number;
//   albumImg: string;
//   title: string;
//   nickname: string;
// };

export default function HotMusic10() {
  // use훅으로 데이터 가져오는 부분
  const {
    data: listItems, //서버에서 받아온 데이터
    loading,
    error,
  } = useMusicFetchData({
    url: `http://localhost:8080/muzinut/hotsong`, //데이터 가져올 api 엔드포인트
    key: "top10Songs", // 응답 데이터의 키
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log("listItems은", listItems);

  //  렌더링 부분 - tbody 부분은 MusicList에서 렌더링
  return (
    <div className={styles.container}>
      <table className={styles.table__container}>
        <thead>
          <tr className={styles.tr__name}>
            <th>썸네일</th>
            <th>랭킹</th>
            <th>음악이름</th>
            <th>가수 이름</th>
            <th>재생</th>
            <th>옵션</th>
          </tr>
        </thead>
        <tbody>
          {listItems && listItems.length > 0 ? (
            listItems.map((item, index) => (
              <MusicList
                key={item.songId}
                musicChartData={item}
                index={index}
                showCheckbox={false}
              />
            ))
          ) : (
            // 데이터가 없을 때
            <tr>
              <td colSpan={6}>데이터를 불러올 수 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
