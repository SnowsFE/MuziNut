'use client';
import Link from "next/link";
import styles from "./css/CommunityList.module.css";
import styled from "styled-components";

type CommunityListItem = {
  id: number;
  titleName: string;
  authorName: string;
  views: number;
};

// 백엔드에서 가져올 데이터
/*
const listItems: CommunityListItem[] = [
    {id: 1, titleName: "게시판 이름", authorName: "작성자", views: 100},
    {id: 1, titleName: "게시판 이름", authorName: "작성자", views: 100},
    {id: 1, titleName: "게시판 이름", authorName: "작성자", views: 100},
    {id: 1, titleName: "게시판 이름", authorName: "작성자", views: 100},
    {id: 1, titleName: "게시판 이름", authorName: "작성자", views: 100}
]
*/

// listItems 데이터를 props로 전달
type CommunityListProps = {
  listItems: CommunityListItem[];
};

const CommunityList: React.FC<CommunityListProps> = ({ listItems }) => {
  return (
    <div className={styles.list__contents__wrap}>
      <ul>
        {listItems.map((item, index) => (
          <li key={item.id}>
            <Link href={`/community/detail/${item.id}`}>
             <LinkSytle>
              <div className={styles.list__container}>
                <div className={styles.list__title}>
                  <span>
                    {index + 1}. {item.titleName}
                  </span>
                </div>
                <div className={styles.list__name__view}>
                  <span>{item.authorName}</span>
                  <span>{item.views}</span>
                </div>
              </div>
              </LinkSytle>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityList;
export type {CommunityListItem};


const LinkSytle = styled.div`
  text-decoration: none;
  color: black;
`;