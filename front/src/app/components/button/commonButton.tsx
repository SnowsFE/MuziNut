"use client";
import React, { ReactNode, useState } from "react";
import styles from "./commonButton.module.css";
import Image from "next/image";
import heartIcon from '@/../../public/svgs/heart.svg'
import heartFillIcon from '@/../../public/svgs/heart_fill.svg'

/*일반 버튼
버튼 안에 텍스트
클릭 여부만 판단(클릭 이벤트는 따로 사용하는 컴포넌트에서 구현)
*/
interface CommonButtonProps {
  onClick: () => void;
  children: ReactNode;
}
const CommonButton: React.FC<CommonButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.common__button} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};



/* 좋아요 버튼
버튼 누르면 빨간색 하트로,
버튼 해제하면 일반 빈 하트로
*/
const HeartButton: React.FC = () => {
  const [heart, setHeart] = useState(false);

  const handleClickBtn = () => {
    setHeart(!heart);
  };

  return (
    <button onClick={handleClickBtn} className={styles.heart__button}>
      <Image
        src={heart ? heartIcon : heartFillIcon}
        alt="Like button"
        width={24}
        height={24}
      />
    </button>
  );
};

export { CommonButton, HeartButton };
