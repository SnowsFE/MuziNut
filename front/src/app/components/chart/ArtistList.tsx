import Image from "next/image";
import search from "@/../public/images/favicon.png";
import styles from "../chart/css/ArtistList.module.css"

const TableRow = () => (
  <tr className={styles.artist__list}>
    <td className={styles.ranking}>
      <span>1</span>
    </td>
    <td  className={styles.picture}>
      <a href="#">
        <Image src={search} alt="search" width={130} height={130} style={{ borderRadius: '50%' }} />
      </a>
    </td>
    <td className={styles.info__section}>
    <div >
        <div className={styles.name}>
        <span>가수 이름</span>
        </div>
      
      <div className={styles.info__section__bottom}>
        <span className={styles.follow__num}>팔로워 3명</span>
        <span className={styles.go__profile}>프로필 보기 →</span>
      </div>
      </div>
    </td>
    <td className={styles.follow__btn}>
    <button>팔로잉</button>
    </td>
  </tr>

);

export const ArtistList = () => {
  const rows = Array.from({ length: 10 }, (_, index) => (
    <TableRow key={index} />
  ));

  return (
    <div className={styles.container}>
      
      <table className={styles.table__container}>
        <tbody className={styles.a}>{rows}</tbody>
      </table>
    </div>
  );
};
