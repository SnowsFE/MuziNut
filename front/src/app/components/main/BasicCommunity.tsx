import styles from "../main/css/BasicCommunity.module.css";

export default function BasicCommunity() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
          <h2>자유</h2>
          <h2>인기</h2>
          <h2>홍보</h2>
      </div>

      <div className={styles.list__contents__wrap}>
        <ul className={styles.list__contents__wrap__top}>
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
          </li>
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
          </li>  <li>
            <div className={styles.list__conatiner}>
              <div className={styles.list__title}>
                <div>1. 게시판이름</div>
              </div>
              <div className={styles.list__name__view}>
                <div>작성자 이름</div>
                <div>100</div>
              </div>
            </div>
          </li>  <li>
            <div className={styles.list__conatiner}>
              <div className={styles.list__title}>
                <div>1. 게시판이름</div>
              </div>
              <div className={styles.list__name__view}>
                <div>작성자 이름</div>
                <div>100</div>
              </div>
            </div>
          </li>  <li>
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
        <ul className={styles.list__contents__wrap__bottom}>
          <div className={styles.btn__wrap}>
              <button>게시판 더 보러가기</button>
              <button>글 작성하러 가기</button>
          </div>
        </ul>
      </div>
    </div>
  );
}
