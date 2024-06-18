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

export const MoneyIcon = () => {
  return (
    <Money>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="24pt"
        height="24pt"
        viewBox="0 0 64 64"
      >
        <g
          transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
          fill="brown"
          stroke="none"
        >
          <path
            d="M240 509 c-79 -32 -137 -140 -124 -227 9 -58 59 -131 109 -156 61
-32 150 -29 203 7 58 38 92 93 99 161 5 47 2 64 -21 109 -38 78 -88 111 -175
114 -36 2 -77 -2 -91 -8z m168 -18 c47 -24 66 -45 91 -101 36 -79 21 -152 -43
-216 -71 -72 -166 -81 -245 -23 -152 110 -78 359 106 359 33 0 68 -7 91 -19z"
          />
          <path
            d="M242 479 c-160 -79 -118 -330 58 -347 65 -6 93 2 135 40 48 42 65 77
65 138 0 83 -39 144 -113 175 -50 21 -94 19 -145 -6z m131 -3 c48 -18 74 -41
98 -88 36 -71 19 -149 -44 -205 -67 -58 -152 -56 -216 5 -99 95 -62 253 68
292 37 12 51 11 94 -4z"
          />
          <path
            d="M267 442 c-10 -10 -17 -28 -17 -40 0 -16 -6 -22 -23 -22 -29 0 -53
-18 -62 -47 -7 -25 32 -73 59 -73 10 0 13 -6 10 -15 -20 -51 36 -96 85 -70 16
8 31 21 34 30 4 10 20 15 46 15 31 0 44 6 60 26 26 33 26 45 1 77 -11 14 -20
39 -20 56 0 34 -36 66 -63 55 -9 -3 -26 1 -39 10 -29 21 -51 20 -71 -2z m68
-12 c3 -5 -1 -20 -9 -32 -9 -12 -16 -33 -16 -45 0 -15 -5 -21 -14 -17 -22 8
-39 50 -32 78 5 21 13 26 36 26 16 0 32 -4 35 -10z m85 -25 c14 -17 5 -65 -12
-65 -9 0 -9 3 0 12 7 7 12 19 12 28 -1 10 -5 7 -13 -8 -17 -29 -74 -65 -83
-51 -8 14 5 61 23 82 20 21 56 22 73 2z m-148 -64 c18 -16 30 -32 26 -36 -3
-4 -27 -7 -53 -8 -46 -2 -46 -2 -18 -14 15 -7 21 -12 13 -13 -48 -1 -80 67
-42 89 27 16 39 13 74 -18z m176 -23 c33 -33 -5 -93 -55 -85 l-28 4 31 2 c17
0 38 8 45 18 13 15 12 15 -8 5 -43 -23 -83 -5 -83 38 0 24 77 39 98 18z m-118
-48 c0 -10 -5 -31 -12 -45 -9 -20 -18 -26 -35 -22 -12 2 -20 0 -17 -4 17 -29
68 6 77 51 4 25 4 24 6 -2 0 -16 -8 -37 -19 -48 -43 -43 -101 -11 -81 44 17
43 81 65 81 26z"
          />
        </g>
      </svg>
    </Money>
  );
};

export const GoldMedal = () => {
  return (
    <Gold>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="-55 147 500 625"
      >
        <g>
          <path
            d="M130.7,519.8c-0.6,0-1.3,0.1-1.9,0.2h-0.2l-31.4,5.2L83,496.6c-1.7-3.4-5.1-5.9-9.1-6.5l-25-3.8L-5,591.5l70.3-3.9   l37.8,59.5l54-105.3l-18-18.2C136.9,521.1,133.8,519.8,130.7,519.8z"
            fill="#F5E837"
          />
          <path
            d="M341.3,486.6l-25.9,4c-3.7,0.5-7.1,3-8.9,6.5l-14,28l-31.2-5.1c-3.7-0.7-7.6,0.6-10.4,3.5L233,541.6L287,647l37.8-59.5   l70.3,3.9L341.3,486.6z"
            fill="#F5E837"
          />
          <path
            d="M195,216.9c-64.1,0-116.3,52.2-116.3,116.4S130.9,449.7,195,449.7s116.3-52.2,116.3-116.4S259.1,216.9,195,216.9z"
            fill="#F5E837"
          />
          <path
            d="M264.9,498.8l15.3,2.5l7-13.9c5-9.8,14.4-16.6,25.1-18.1l15.7-2.4l2.4-15.9c1.6-10.8,8.4-20.1,18.2-25.1l13.9-6.9   l-2.5-15.3c-1.8-10.7,1.8-21.8,9.6-29.5L381,363l-7.4-14.3c-5-9.6-5-21.1,0-30.8l7.2-13.9l-11.1-11c-7.7-7.6-11.2-18.6-9.5-29.3   l2.6-15.9l-14.3-7.1c-9.8-5-16.6-14.3-18.2-25.1l-2.3-15.3l-15.3-2.3c-10.9-1.7-20.2-8.5-25.1-18.3l-7.1-14.2l-15.6,2.5   c-10.7,1.8-21.6-1.8-29.3-9.5l-11-11.1l-13.8,7.2c-9.6,5-21.1,5-30.8,0l-14.3-7.6l-11.2,11.4c-7.6,7.8-18.6,11.3-29.3,9.6   l-15.4-2.5l-7,13.9c-4.9,9.7-14.2,16.5-25,18.1L62,199.9l-2.4,15.8c-1.7,10.8-8.5,20.2-18.2,25.1l-13.9,6.9L30,263   c1.7,10.8-1.9,21.8-9.6,29.5L9,303.7l7.4,14.2c5,9.6,5,21.2,0,30.9l-7.2,13.9l11.1,11c7.8,7.6,11.3,18.6,9.5,29.4l-2.6,15.8   l14.3,7.1c9.8,4.9,16.6,14.3,18.2,25.1l2.3,15.4l15.4,2.3c10.8,1.7,20.2,8.5,25,18.2l7.1,14.3l15.7-2.6c1.9-0.3,3.7-0.5,5.6-0.5   c8.8,0,17.4,3.5,23.7,10l11,11.1l13.9-7.2c4.8-2.5,10-3.8,15.3-3.8s10.6,1.3,15.5,3.8l14.2,7.4l11.2-11.4   C243.3,500.4,254.3,496.9,264.9,498.8z M195,476c-78.6,0-142.5-64-142.5-142.6S116.4,190.7,195,190.7s142.5,64,142.5,142.6   S273.6,476,195,476z"
            fill="#F5E837"
          />
        </g>
      </svg>
    </Gold>
  );
};

export const SilverMedal = () => {
  return (
    <Silver>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="-55 147 500 625"
      >
        <g>
          <path
            d="M130.7,519.8c-0.6,0-1.3,0.1-1.9,0.2h-0.2l-31.4,5.2L83,496.6c-1.7-3.4-5.1-5.9-9.1-6.5l-25-3.8L-5,591.5l70.3-3.9   l37.8,59.5l54-105.3l-18-18.2C136.9,521.1,133.8,519.8,130.7,519.8z"
            fill="#d1d1d1"
          />
          <path
            d="M341.3,486.6l-25.9,4c-3.7,0.5-7.1,3-8.9,6.5l-14,28l-31.2-5.1c-3.7-0.7-7.6,0.6-10.4,3.5L233,541.6L287,647l37.8-59.5   l70.3,3.9L341.3,486.6z"
            fill="#d1d1d1"
          />
          <path
            d="M195,216.9c-64.1,0-116.3,52.2-116.3,116.4S130.9,449.7,195,449.7s116.3-52.2,116.3-116.4S259.1,216.9,195,216.9z"
            fill="#d1d1d1"
          />
          <path
            d="M264.9,498.8l15.3,2.5l7-13.9c5-9.8,14.4-16.6,25.1-18.1l15.7-2.4l2.4-15.9c1.6-10.8,8.4-20.1,18.2-25.1l13.9-6.9   l-2.5-15.3c-1.8-10.7,1.8-21.8,9.6-29.5L381,363l-7.4-14.3c-5-9.6-5-21.1,0-30.8l7.2-13.9l-11.1-11c-7.7-7.6-11.2-18.6-9.5-29.3   l2.6-15.9l-14.3-7.1c-9.8-5-16.6-14.3-18.2-25.1l-2.3-15.3l-15.3-2.3c-10.9-1.7-20.2-8.5-25.1-18.3l-7.1-14.2l-15.6,2.5   c-10.7,1.8-21.6-1.8-29.3-9.5l-11-11.1l-13.8,7.2c-9.6,5-21.1,5-30.8,0l-14.3-7.6l-11.2,11.4c-7.6,7.8-18.6,11.3-29.3,9.6   l-15.4-2.5l-7,13.9c-4.9,9.7-14.2,16.5-25,18.1L62,199.9l-2.4,15.8c-1.7,10.8-8.5,20.2-18.2,25.1l-13.9,6.9L30,263   c1.7,10.8-1.9,21.8-9.6,29.5L9,303.7l7.4,14.2c5,9.6,5,21.2,0,30.9l-7.2,13.9l11.1,11c7.8,7.6,11.3,18.6,9.5,29.4l-2.6,15.8   l14.3,7.1c9.8,4.9,16.6,14.3,18.2,25.1l2.3,15.4l15.4,2.3c10.8,1.7,20.2,8.5,25,18.2l7.1,14.3l15.7-2.6c1.9-0.3,3.7-0.5,5.6-0.5   c8.8,0,17.4,3.5,23.7,10l11,11.1l13.9-7.2c4.8-2.5,10-3.8,15.3-3.8s10.6,1.3,15.5,3.8l14.2,7.4l11.2-11.4   C243.3,500.4,254.3,496.9,264.9,498.8z M195,476c-78.6,0-142.5-64-142.5-142.6S116.4,190.7,195,190.7s142.5,64,142.5,142.6   S273.6,476,195,476z"
            fill="#d1d1d1"
          />
        </g>
      </svg>
    </Silver>
  );
};

export const BronzeMedal = () => {
  return (
    <Bronze>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="-55 147 500 625"
      >
        <g>
          <path
            d="M130.7,519.8c-0.6,0-1.3,0.1-1.9,0.2h-0.2l-31.4,5.2L83,496.6c-1.7-3.4-5.1-5.9-9.1-6.5l-25-3.8L-5,591.5l70.3-3.9   l37.8,59.5l54-105.3l-18-18.2C136.9,521.1,133.8,519.8,130.7,519.8z"
            fill="#e68a00"
          />
          <path
            d="M341.3,486.6l-25.9,4c-3.7,0.5-7.1,3-8.9,6.5l-14,28l-31.2-5.1c-3.7-0.7-7.6,0.6-10.4,3.5L233,541.6L287,647l37.8-59.5   l70.3,3.9L341.3,486.6z"
            fill="#e68a00"
          />
          <path
            d="M195,216.9c-64.1,0-116.3,52.2-116.3,116.4S130.9,449.7,195,449.7s116.3-52.2,116.3-116.4S259.1,216.9,195,216.9z"
            fill="#e68a00"
          />
          <path
            d="M264.9,498.8l15.3,2.5l7-13.9c5-9.8,14.4-16.6,25.1-18.1l15.7-2.4l2.4-15.9c1.6-10.8,8.4-20.1,18.2-25.1l13.9-6.9   l-2.5-15.3c-1.8-10.7,1.8-21.8,9.6-29.5L381,363l-7.4-14.3c-5-9.6-5-21.1,0-30.8l7.2-13.9l-11.1-11c-7.7-7.6-11.2-18.6-9.5-29.3   l2.6-15.9l-14.3-7.1c-9.8-5-16.6-14.3-18.2-25.1l-2.3-15.3l-15.3-2.3c-10.9-1.7-20.2-8.5-25.1-18.3l-7.1-14.2l-15.6,2.5   c-10.7,1.8-21.6-1.8-29.3-9.5l-11-11.1l-13.8,7.2c-9.6,5-21.1,5-30.8,0l-14.3-7.6l-11.2,11.4c-7.6,7.8-18.6,11.3-29.3,9.6   l-15.4-2.5l-7,13.9c-4.9,9.7-14.2,16.5-25,18.1L62,199.9l-2.4,15.8c-1.7,10.8-8.5,20.2-18.2,25.1l-13.9,6.9L30,263   c1.7,10.8-1.9,21.8-9.6,29.5L9,303.7l7.4,14.2c5,9.6,5,21.2,0,30.9l-7.2,13.9l11.1,11c7.8,7.6,11.3,18.6,9.5,29.4l-2.6,15.8   l14.3,7.1c9.8,4.9,16.6,14.3,18.2,25.1l2.3,15.4l15.4,2.3c10.8,1.7,20.2,8.5,25,18.2l7.1,14.3l15.7-2.6c1.9-0.3,3.7-0.5,5.6-0.5   c8.8,0,17.4,3.5,23.7,10l11,11.1l13.9-7.2c4.8-2.5,10-3.8,15.3-3.8s10.6,1.3,15.5,3.8l14.2,7.4l11.2-11.4   C243.3,500.4,254.3,496.9,264.9,498.8z M195,476c-78.6,0-142.5-64-142.5-142.6S116.4,190.7,195,190.7s142.5,64,142.5,142.6   S273.6,476,195,476z"
            fill="#e68a00"
          />
        </g>
      </svg>
    </Bronze>
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

const Money = styled.div`
  margin-top: 2px;
`;

const Gold = styled.div`
  width: 50px;
  height: 24px;
`;

const Silver = styled.div`
  width: 50px;
  height: 24px;
`;

const Bronze = styled.div`
  width: 50px;
  height: 24px;
`;