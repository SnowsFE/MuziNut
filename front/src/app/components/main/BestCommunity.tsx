import styles from "../main/css/BestCommunity.module.css";

export default function BestCommunity() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>인기 게시판</h2>
        <h4>모든 게시판 중 조회수가 높은 순서로 노출됩니다.</h4>
      </div>

      <div className={styles.list__contents__wrap}>
        <ul>
        <li>
            <div className={styles.list__conatiner}>
              <div className={styles.list__title}>
                <div>1. 게시판이름</div>
              </div>
              <div className={styles.list__name__view}>
                <div>작성자 이름</div>
                <div>100</div>
              </div>
            </div>
          </li>    <li>
            <div className={styles.list__conatiner}>
              <div className={styles.list__title}>
                <div>1. 게시판이름</div>
              </div>
              <div className={styles.list__name__view}>
                <div>작성자 이름</div>
                <div>100</div>
              </div>
            </div>
          </li>    <li>
            <div className={styles.list__conatiner}>
              <div className={styles.list__title}>
                <div>1. 게시판이름</div>
              </div>
              <div className={styles.list__name__view}>
                <div>작성자 이름</div>
                <div>100</div>
              </div>
            </div>
          </li>    <li>
            <div className={styles.list__conatiner}>
              <div className={styles.list__title}>
                <div>1. 게시판이름</div>
              </div>
              <div className={styles.list__name__view}>
                <div>작성자 이름</div>
                <div>100</div>
              </div>
            </div>
          </li>    <li>
            <div className={styles.list__conatiner}>
              <div className={styles.list__title}>
                <div>1. 게시판이름</div>
              </div>
              <div className={styles.list__name__view}>
                <div>작성자 이름</div>
                <div>100</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
