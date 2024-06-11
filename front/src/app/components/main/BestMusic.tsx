import styles from "../main/css/BestMusic.module.css";
import Image from "next/image";
import search from "../../../../public/images/favicon.png";

const TableRow = () => (
  <tr>
    <td className={styles.thumb__picture}>
      <a href="#">
        <Image src={search} alt="search" width={50} height={50} />
      </a>
    </td>
    <td className={styles.ranking}>
      <span>1</span>
    </td>
    <td className={styles.song}>
      <span>음악 이름</span>
    </td>
    <td className={styles.artist}>
      <span>가수 이름</span>
    </td>
    <td className={styles.play__btn}>
      <button className={styles.btn}>
        <Image src={search} alt="search" width={30} height={30} />
      </button>
    </td>
    <td className={styles.option}>
      <button className={styles.btn}>
        <Image src={search} alt="search" width={30} height={30} />
      </button>
    </td>
  </tr>
);

export const BestMusic = () => {
  const rows = Array.from({ length: 10 }, (_, index) => (
    <TableRow key={index} />
  ));

  return (
    <div className={styles.container}>
      <table className={styles.table__container}>
        <thead>
          <tr >
            <th>썸네일</th>
            <th>랭킹</th>
            <th>음악이름</th>
            <th>가수 이름</th>
            <th>재생</th>
            <th>옵션</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};