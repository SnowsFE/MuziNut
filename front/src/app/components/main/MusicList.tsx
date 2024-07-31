/*
MusicDataItem의 항목을 테이블의 한 행(row)로 렌더링 - tbody 부분
props로 musicChartData(음악 데이터), index(랭킹), showCheckbox(체크박스 표시)를 불러옴.

필요한 요소
1. 체크박스(메인에서는 X, 차트에서는 O)
2. 앨범 이미지 - details/album/[id]로 이동
3. 순위(index)
4. 제목 - details/song/[id]로 이동
5. 가수 = 프로필 페이지로 이동
6. 옵션1
7. 옵션2 - 재생 버튼
*/

import styles from "./css/BestMusic.module.css";
import Image from "next/image";
import Link from "next/link";
import playBtn from "@/../../public/svgs/play_btn.svg"
import threeDot from "@/../../public/svgs/threedot.svg"
import albumDefaultImg from "@/../../public/images/Muzinut.png"
export type MusicDataItem = {
  songId: number;
  albumImg: string;
  title: string;
  nickname: string;
};

interface MusicListProps {
  musicChartData: MusicDataItem;
  index: number;
  showCheckbox: boolean;
}

const MusicList: React.FC<MusicListProps> = ({
  musicChartData,
  index,
  showCheckbox,
}) => (
  <tr className={styles.tr__styles}>
    {/* checkbox가 true일 때만 표시
    1. 체크박스(메인에서는 X, 차트에서는 O) */}
    {showCheckbox && (
      <td className={styles.td1__select}>
        <input type="checkbox" />
      </td>
    )}
    {/* 2. 앨범 이미지 - details/album/[id]로 이동 */}
    <td className={styles.thumb__picture}>
      {/* <Link href={`/details/album/${musicChartData.songId}`}> */}
        {/* musicCharData의 이미지가 없으면 기본 이미지(album)으로 설정 */}
        <Image
          src={
            musicChartData.albumImg
              ? `data:image/png;base64,${musicChartData.albumImg}`
              : albumDefaultImg
          }
          alt="album"
          width={50}
          height={50}
        />
      {/* </Link> */}
    </td>
    {/* 3. 순위(index) */}
    <td className={styles.ranking}>
      <span>{index + 1}</span>
    </td>
    {/* 4. 제목 - details/song/[id]로 이동 */}
    <td className={styles.song}>
      <Link href={`/details/song/${musicChartData.songId}`}>
        <span>{musicChartData.title}</span>
      </Link>
    </td>
    {/* 5. 가수 = 프로필 페이지로 이동 */}
    <td className={styles.artist}>
      <Link href={`/profile/lounge`}>
        <span>{musicChartData.nickname}</span>
      </Link>
    </td>
    {/* 6. 옵션1 */}
    <td className={styles.play__btn}>
      <button className={styles.btn}>
        <Image src={playBtn} alt="play" width={30} height={30} />
      </button>
    </td>
    {/* 7. 옵션2  */}
    <td className={styles.option}>
      <button className={styles.btn}>
        <Image src={threeDot} alt="option" width={30} height={30} />
      </button>
    </td>
  </tr>
);

export default MusicList;
