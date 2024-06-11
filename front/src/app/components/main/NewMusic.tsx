import styles from "../main/css/NewMusic.module.css";
import Image from "next/image";
import search from "../../../../public/images/addMusic.png";
export default function NewMusic() {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <Image src={search} alt="search" width={200} height={200} />
      </div>
      <div className={styles.thumbnail}>
        <Image src={search} alt="search" width={200} height={200} />
      </div>
      <div className={styles.thumbnail}>
        <Image src={search} alt="search" width={200} height={200} />
      </div>
      <div className={styles.thumbnail}>
        <Image src={search} alt="search" width={200} height={200} />
      </div>
      <div className={styles.thumbnail}>
        <Image src={search} alt="search" width={200} height={200} />
      </div>
      
    </div>
  );
}
