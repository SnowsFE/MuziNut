import styles from "../main/css/BestArtist.module.css";
import Image from "next/image";
import search from "../../../../public/images/favicon.png";
export default function BestArtist() {
  return (
    <div className={styles.container}>
      <div className={styles.list__contents__wrap}>
        <ul>
          <li>
            <div className={styles.list__conatiner}>
              <div>
                <h1>1</h1>
                <h4>아이유</h4>
              </div>
              <Image src={search} alt="search" width={120} height={120} />
              <div>
                <div className={styles.list__container__row}>
                  <h6>팔로잉</h6>
                  <Image src={search} alt="search" width={30} height={30} />
                </div>
                <div className={styles.list__container__row}>
                  <h6>아티스트 바로가기</h6>
                  <Image src={search} alt="search" width={30} height={30} />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.list__conatiner}>
              <div>
                <h1>1</h1>
                <h4>아이유</h4>
              </div>
              <Image src={search} alt="search" width={120} height={120} />
              <div>
                <div className={styles.list__container__row}>
                  <h6>팔로잉</h6>
                  <Image src={search} alt="search" width={30} height={30} />
                </div>
                <div className={styles.list__container__row}>
                  <h6>아티스트 바로가기</h6>
                  <Image src={search} alt="search" width={30} height={30} />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.list__conatiner}>
              <div>
                <h1>1</h1>
                <h4>아이유</h4>
              </div>
              <Image src={search} alt="search" width={120} height={120} />
              <div>
                <div className={styles.list__container__row}>
                  <h6>팔로잉</h6>
                  <Image src={search} alt="search" width={30} height={30} />
                </div>
                <div className={styles.list__container__row}>
                  <h6>아티스트 바로가기</h6>
                  <Image src={search} alt="search" width={30} height={30} />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.list__conatiner}>
              <div>
                <h1>1</h1>
                <h4>아이유</h4>
              </div>
              <Image src={search} alt="search" width={120} height={120} />
              <div>
                <div className={styles.list__container__row}>
                  <h6>팔로잉</h6>
                  <Image src={search} alt="search" width={30} height={30} />
                </div>
                <div className={styles.list__container__row}>
                  <h6>아티스트 바로가기</h6>
                  <Image src={search} alt="search" width={30} height={30} />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.list__conatiner}>
              <div>
                <h1>1</h1>
                <h4>아이유</h4>
              </div>
              <Image src={search} alt="search" width={120} height={120} />
              <div>
                <div className={styles.list__container__row}>
                  <h6>팔로잉</h6>
                  <Image src={search} alt="search" width={30} height={30} />
                </div>
                <div className={styles.list__container__row}>
                  <h6>아티스트 바로가기</h6>
                  <Image src={search} alt="search" width={30} height={30} />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
