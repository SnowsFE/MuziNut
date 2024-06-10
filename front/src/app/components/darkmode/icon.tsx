import React from "react";
import styled from "styled-components";

export const LikeIcon = () => {
  return (
    <Like>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        style={{ fill: "var(--text-color)" }}
      >
        <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
      </svg>
    </Like>
  );
};

export const CommentIcon = () => {
  return (
    <Comment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        style={{ fill: "var(--text-color)" }}
      >
        <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
      </svg>
    </Comment>
  );
};

export const StarIcon = () => {
  return (
    <Star>
      <StyledSVG
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="-5.0 -10.0 110.0 135.0"
      >
        <path
          d="m50 78.969-19.531 10.27c-4.207 2.2109-9.125-1.3594-8.3242-6.0469l3.7305-21.75-15.801-15.402c-3.4062-3.3203-1.5273-9.1016 3.1797-9.7852l21.836-3.1758 9.7656-19.789c2.1055-4.2617 8.1836-4.2617 10.289 0l9.7656 19.789 21.84 3.1719c4.7031 0.68359 6.582 6.4648 3.1797 9.7852l-15.801 15.402 3.7305 21.75c0.80469 4.6875-4.1133 8.2578-8.3242 6.0469z"
          fill="rgb(243, 239, 0)"
        />
      </StyledSVG>
    </Star>
  );
};

const Like = styled.div``;
const Comment = styled.div`
  transform: scaleX(-1);
`;
const Star = styled.div`
  width: 32px;
  height: 32px;
  margin-top: 2px;
`;
const StyledSVG = styled.svg`
  width: 100%;
  height: 100%;
`;
