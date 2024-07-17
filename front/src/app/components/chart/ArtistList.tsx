import Image from "next/image";
import search from "@/../public/images/favicon.png";
import styles from "../chart/css/ArtistList.module.css";

const ArtistData = [
  {artistName: 'string'},
  {img: "sdf/"}
]


const ArtistTableRow = () => (
  <tr className={styles.tr__wrap}>
    <td className={styles.td1__ranking}>
      <span>1</span>
    </td>
    <td className={styles.td2__picture}>
      <div>
        <Image src={search} alt="search" width={130} height={130} />
        <a href="#"> </a>
      </div>
    </td>
    <td className={styles.td3__info__section}>
      <div>
        <div className={styles.name}>
          <span>가수 이름</span>
        </div>
        <div className={styles.info}>
          <span className={styles.follow__num}>팔로워 3명</span>
          <span className={styles.go__profile}>프로필 보기 →</span>
        </div>
      </div>
    </td>
    <td className={styles.td4__follow__btn}>
      <button>팔로잉</button>
    </td>
  </tr>
);

export default ArtistTableRow;
