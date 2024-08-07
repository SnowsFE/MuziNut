"use client";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

export const LikeIcon = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <Like onClick={handleLikeClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        style={{ fill: liked ? "#16be78" : "var(--text-color)" }}
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

export const VoteBox = () => {
  return (
    <Vote>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="-5.0 -10.0 110.0 135.0"
      >
        <g>
          <path
            d="m12.355 10.531c0.13281 0.027344 13.453 2.8125 19.016 6.5742 1.7656 1.1992 4.0859 2.3281 7.293 3.543 0.78516 0.30469 1.7109-0.09375 2.0156-0.90625 0.30859-0.80859-0.097657-1.7109-0.90625-2.0156-2.9727-1.1289-5.0859-2.1484-6.6484-3.207-6.0742-4.1094-19.566-6.9297-20.137-7.0508-2.0117-0.37891-2.6445 2.6055-0.63281 3.0625z"
            fill="green"
            stroke="green"
            stroke-width="2"
          />
          <path
            d="m89.676 64.52-6.5859-0.3125c-2.0391-0.054687-2.2109 2.9805-0.14844 3.1211l6.5859 0.3125c0.61719 0.027344 1.1016 0.53516 1.1016 1.1523v22.207c0.027344 2.043 3.0898 2.0625 3.125 0v-22.207c0-2.2891-1.7891-4.168-4.0742-4.2773z"
            fill="green"
            stroke="green"
            stroke-width="2"
          />
          <path
            d="m78.047 67.094c2.0273 0.066406 2.2266-2.9766 0.15234-3.1211l-4.4453-0.21484 4.5391-8.832c0.89062-1.6328-0.007813-3.875-1.8008-4.3984-8.082-2.5664-15.953-8.0547-21.484-12.551l1.043-1.7773c1.043-1.7852 0.99219-4.0547-0.13281-5.7812-1.0312-1.5898-3.4453-5.3203-4.2617-6.918-0.75391-1.4844-2.7773-2.4258-7.0312-3.9805-1.9453-0.66016-2.9883 2.1914-1.0703 2.9375 1.3242 0.48438 4.8477 1.7695 5.3164 2.4609 0.78516 1.5391 2.6758 4.5039 4.4258 7.2031 0.91016 1.3242-0.003906 2.6719-0.71875 3.8242-1.9258-1.6641-3.418-3.0664-4.3086-3.9297-1.5195-1.5469-4.207-0.92578-5.082 1.0078l-1.2773-2.0781c-1.0977-1.7266-3.7109-0.13672-2.6602 1.6367l8.7695 14.27c1.0508 1.6523-1.3438 3.4453-2.5547 1.8477-4.5703-6.125-12.754-16.477-16.191-17.02-2.3438-0.37109-4.9258-3.3867-5.7773-4.375-1.8125-2.1172-11.398-3.8633-15.438-4.5156-2.0117-0.29297-2.5391 2.7148-0.49609 3.0859 5.7734 0.93359 12.609 2.5547 13.562 3.4609 1.9453 2.2734 4.5742 4.9414 7.6445 5.4258 1.1328 0.28125 5.9844 4.8203 14.188 15.809 3.6992 4.7188 10.738-0.28125 7.7188-5.3516 0 0-5.668-9.2188-5.668-9.2188l1.0781-1.7383c4.5508 4.4219 16.531 15.152 29.426 19.246l-5.1875 10.094-27.219-1.3203c-0.22266 0.046875-0.49609 0.03125-0.71484 0.10547l-8.7461-8.2695 3.4922-5.5703c0.45703-0.73047 0.23828-1.6953-0.49609-2.1562-0.73047-0.45703-1.6953-0.23438-2.1562 0.49609l-3.4922 5.5703c-0.78906 1.2578-0.57813 2.9102 0.50391 3.9297l7.2188 6.8242-16.633 3.7383c-1.9688 0.44141-3.3398 2.1602-3.3398 4.1758v19.887c0.039062 2.0273 3.082 2.0781 3.125 0v-19.887c0-0.54297 0.37109-1.0078 0.90234-1.1289l18.703-4.207v25.219c0.023438 2.0234 3.0898 2.0781 3.125 0v-25.535l33.449 1.625z"
            fill="green"
            stroke="green"
            stroke-width="2"
          />
          <path
            d="m80.648 77.906-22.855-1.1016c-0.86719-0.074219-1.6523 0.69922-1.6367 1.5625v12.637c0 0.86328 0.69922 1.5625 1.5625 1.5625s1.5625-0.69922 1.5625-1.5625v-10.996l19.73 0.94922v10.043c0.027343 2.0469 3.0938 2.0586 3.125 0v-11.535c0-0.83203-0.65625-1.5195-1.4883-1.5625z"
            fill="green"
            stroke="green"
            stroke-width="2"
          />
        </g>
      </svg>
    </Vote>
  );
};

export const DownArrow = () => {
  return (
    <Arrow>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#000000"
      >
        <path d="M480-336.35 232.35-584 296-647.65l184 184 184-184L727.65-584 480-336.35Z" />
      </svg>
    </Arrow>
  );
};

export const UpArrow = () => {
  return (
    <Arrow2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#000000"
      >
        <path d="M480-336.35 232.35-584 296-647.65l184 184 184-184L727.65-584 480-336.35Z" />
      </svg>
    </Arrow2>
  );
};

export const NewIcon = () => {
  return (
    <New>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 25"
        x="0px"
        y="0px"
        fill="#FFDF00"
      >
        <g>
          <path d="M9.99023,10.67676a1.43466,1.43466,0,0,0-.002-2.63867L8.70605,7.49121,8.1582,6.20654a1.43529,1.43529,0,0,0-2.63867.002L4.97266,7.49121,3.6875,8.03906a1.4353,1.4353,0,0,0,.00195,2.63867l1.28321.54688.54785,1.28467a1.435,1.435,0,0,0,2.63867-.002l.54687-1.28271,1.28223-.54688Zm-.3955-.91846-1.46582.62549a.50258.50258,0,0,0-.26368.26367l-.625,1.46533a.43489.43489,0,0,1-.80078.002l-.626-1.46729a.50254.50254,0,0,0-.26368-.26367L4.084,9.75879A.43521.43521,0,0,1,4.082,8.958L5.5498,8.332a.50254.50254,0,0,0,.26368-.26367l.625-1.46533a.4352.4352,0,0,1,.80078-.002l.626,1.46729a.50258.50258,0,0,0,.26368.26367l1.46484.625a.43464.43464,0,0,1,.001.80127ZM14.43359,12.75l-.70117-.29883-.2998-.70263a1.06367,1.06367,0,0,0-1.95606.00195l-.29883.70068-.70312.29981a1.064,1.064,0,0,0,.00195,1.95654l.70117.29883.29981.70263a1.06367,1.06367,0,0,0,1.95605-.002l.29883-.70068.70117-.29883.002-.001a1.06468,1.06468,0,0,0-.002-1.95654ZM14.04,13.78809l-.88477.37744a.50256.50256,0,0,0-.26367.26367l-.37793.88525.46.19629-.57715-.19629-.37793-.88525a.50252.50252,0,0,0-.26367-.26367l-.88574-.37793-.19629.46.19629-.57764.88574-.37793a.50252.50252,0,0,0,.26367-.26367l.37793-.88525-.46-.19629.57715.19629.37793.88525a.50256.50256,0,0,0,.26367.26367l.92383.437A.05826.05826,0,0,1,14.04,13.78809Zm2.43359-8.208-.85937-.3667-.36719-.86133a1.15028,1.15028,0,0,0-1.06934-.70557h-.001a1.15331,1.15331,0,0,0-1.07227.70752l-.36621.85938-.86133.36767a1.16539,1.16539,0,0,0,.002,2.14209l.85937.3667.36719.86133a1.15251,1.15251,0,0,0,1.07129.70508h.001a1.15139,1.15139,0,0,0,1.07032-.70752l.36621-.85889.85937-.3667.002-.001a1.16475,1.16475,0,0,0-.002-2.14209Zm-.39355,1.22363-1.043.44531a.50254.50254,0,0,0-.26367.26368L14.3291,8.5542a.15617.15617,0,0,1-.15234.10205.15805.15805,0,0,1-.15235-.1001L13.5791,7.5127a.50254.50254,0,0,0-.26367-.26368l-1.042-.44482a.1653.1653,0,0,1-.002-.3042l1.04395-.4458a.50256.50256,0,0,0,.26367-.26367L14.02344,4.749a.15911.15911,0,0,1,.15332-.10254.15494.15494,0,0,1,.15136.1001l.44532,1.044a.50256.50256,0,0,0,.26367.26367l1.042.44482a.16474.16474,0,0,1,.001.30469Z" />
        </g>
      </svg>
    </New>
  );
};

export const ViewIcon = () => {
  return (
    <View>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#000000"
      >
        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
      </svg>
    </View>
  );
};

export const MiniViewIcon = () => {
  return (
    <MiniView>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="13px"
        viewBox="0 -960 960 960"
        width="12px"
      >
        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
      </svg>
    </MiniView>
  );
};

export const Submit = () => {
  return (
    <SubMit>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 125"
        fill="none"
        x="0px"
        y="0px"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M71.3802 28.5525C71.5432 28.7079 71.6769 28.888 71.7779 29.0841C71.883 29.2879 71.9503 29.5041 71.9809 29.7234C72.0215 30.0149 71.9972 30.3119 71.9104 30.5923L59.9156 70.5746C59.6916 71.3215 59.0539 71.8701 58.2819 71.98C57.5099 72.0899 56.7444 71.7411 56.3208 71.0864L45.6039 54.5239L29.0642 45.7677C28.3616 45.3957 27.946 44.6428 28.0057 43.85C28.0653 43.0572 28.5889 42.375 29.3393 42.1124L69.3178 28.12C69.3775 28.0984 69.4381 28.0796 69.4994 28.0638C69.7321 28.0035 69.9689 27.9868 70.1997 28.0101C70.639 28.0543 71.0561 28.2434 71.3802 28.5525ZM46.6303 50.5414L62.3886 34.7831L34.9828 44.3751L46.6303 50.5414ZM49.5575 53.271L57.328 65.2799L65.8049 37.0237L49.5575 53.271Z"
          fill="#9c9c9c"
        />
      </svg>
    </SubMit>
  );
};

export const BookMarkIcon = () => {
  return (
    <BookMark>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 30"
        x="0px"
        y="0px"
      >
        <path
          d="m18.19,7.25h-2.19c-.33,0-.65-.13-.88-.37-.24-.23-.37-.55-.37-.88v-2.19l3.44,3.44Z"
          fill="#a3a3a3"
        />
        <path
          d="m16,8.75c-.74,0-1.43-.29-1.95-.81-.51-.51-.8-1.21-.8-1.94v-2.25h-6.25c-.33,0-.65.13-.88.37-.24.23-.37.55-.37.88v14c0,.33.13.65.37.88.23.24.55.37.88.37h10c.33,0,.65-.13.88-.37.24-.23.37-.55.37-.88v-10.25h-2.25Zm.4,4.86l-1.37,1.76.07,2.22c.01.25-.11.49-.31.64-.2.14-.46.18-.69.09l-2.1-.75-2.1.75c-.08.03-.17.05-.25.05-.16,0-.31-.05-.44-.14-.2-.15-.32-.39-.31-.64l.07-2.22-1.37-1.76c-.15-.2-.19-.46-.12-.7.08-.23.27-.41.51-.48l2.14-.63,1.25-1.84c.14-.21.37-.33.62-.33s.48.12.62.33l1.25,1.84,2.14.63c.24.07.43.25.51.48.07.24.03.5-.12.7Z"
          fill="#a3a3a3"
        />
        <path
          d="m13.68,14.66c-.11.14-.16.31-.16.48l.05,1.4-1.32-.47c-.16-.06-.34-.06-.5,0l-1.32.47.05-1.4c0-.17-.05-.34-.16-.48l-.86-1.1,1.34-.39c.17-.05.32-.15.41-.3l.79-1.15.78,1.15c.1.15.25.25.42.3l1.34.39-.86,1.1Z"
          fill="#a3a3a3"
        />
      </svg>
    </BookMark>
  );
};

export const BaseImgBox = () => {
  return (
    <BaseImg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
        fill="var(--text-color)"
      >
        <g>
          <path d="m75.293 81.141h-11.238v-2.3984h11.199zm-13.637 0h-11.199v-2.3984h11.199zm-13.602 0h-11.199v-2.3984h11.199zm-13.602 0h-9.7266c-0.64062 0-1.2773-0.10547-1.8828-0.30859l0.75781-2.2734c0.35938 0.12109 0.73438 0.18359 1.1133 0.17969h9.6836zm43.77-0.76953-1.1992-2.0859v0.003906c1.082-0.62109 1.7461-1.7695 1.75-3.0156v-6.3008h2.3984v6.3008c-0.007813 2.1133-1.1484 4.0586-2.9883 5.0977zm-57.871-1.1719c-0.96094-1.0781-1.4922-2.4727-1.4922-3.9141v-7.8164h2.3984v7.8047h0.003907c-0.003907 0.85156 0.30859 1.6758 0.87891 2.3125zm60.801-12.621h-2.3984v-11.199h2.3984zm-59.879-1.5039h-2.3984v-11.199h2.3984zm59.879-12.113h-2.3984v-11.199h2.3984zm-59.879-1.5078h-2.3984v-11.199h2.3984zm59.879-12.113h-2.3984v-11.199h2.3984zm-59.891-1.5117h-2.3984v-11.199h2.3984zm59.879-12.113h-2.3984l-0.003907-0.98828c0-1.9141-1.5508-3.4648-3.4648-3.4648h-2.875v-2.3984h2.8867l0.003906-0.003906c3.2383 0.003906 5.8633 2.6289 5.8672 5.8672zm-59.859-1.375-2.3984-0.26562h-0.003906c0.33203-2.9648 2.8477-5.207 5.832-5.1992h4.3984v2.3984h-4.3984v0.003906c-1.7539 0-3.2305 1.3203-3.4297 3.0625zm48.719-3.0781h-11.199v-2.3984h11.199zm-13.602 0h-11.199v-2.3984h11.199zm-13.602 0h-11.199v-2.3984h11.199z" />
          <path d="m50 64.27c-0.98828-0.003906-1.7891-0.80469-1.793-1.793v-1.8672c-0.039062-4.9141 2.3867-9.5234 6.4609-12.27 2.4336-1.6055 3.8633-4.3594 3.7734-7.2734-0.17578-4.4531-3.75-8.0195-8.2031-8.1914-4.1875-0.12109-7.832 2.8516-8.5508 6.9805-0.16406 0.85156-0.91016 1.4609-1.7773 1.4531-0.52344 0.003906-1.0234-0.22656-1.3633-0.625-0.33984-0.39844-0.49219-0.92578-0.40625-1.4453 1.0312-5.8867 6.2227-10.129 12.199-9.9609 6.3516 0.25 11.441 5.3398 11.691 11.691 0.125 4.1562-1.9102 8.0781-5.3789 10.371-3.0703 2.082-4.8906 5.5625-4.8516 9.2695v1.8672c0 0.47656-0.19141 0.93359-0.53125 1.2695-0.33594 0.33594-0.79297 0.52344-1.2695 0.52344z" />
          <path d="m49.758 67.379h0.48828c0.85938 0 1.5547 0.85938 1.5547 1.5547v0.003906c0 0.85938-0.69531 1.5547-1.5547 1.5547h-0.48828c-0.85937 0-1.5547-0.85938-1.5547-1.5547v-0.003906c0-0.85938 0.69531-1.5547 1.5547-1.5547z" />
        </g>
      </svg>
    </BaseImg>
  );
};

export const ReplyIcon = () => {
  return (
    <Reply>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 125"
        enable-background="new 0 0 100 100"
      >
        <path d="M50,47H18.243l21.878-21.879c1.172-1.171,1.172-3.071,0-4.242c-1.171-1.172-3.071-1.172-4.242,0l-27,26.999  c0,0.001,0,0.001-0.001,0.001L6.757,50l2.121,2.121c0,0,0,0,0.001,0.001l27,26.999C36.464,79.707,37.232,80,38,80  s1.536-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L18.243,53H50c19.851,0,36,15.477,36,34.5c0,1.657,1.343,3,3,3  s3-1.343,3-3C92,65.168,73.159,47,50,47z" />
      </svg>
    </Reply>
  );
};

const Reply = styled.div`
  width: 16px;
  height: 16px;
  opacity: 50%;
  transform: rotate(180deg);
`;

const Like = styled.div`
  cursor: pointer;
`;

const Comment = styled.div`
  margin-top: 5px;
  cursor: pointer;
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

const Vote = styled.div`
  width: 32px;
  height: 32px;
  padding: 5px;
  background-color: white;
  border: 1px solid green;
  border-radius: 100px;
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const Arrow2 = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  transform: rotate(180deg);
`;

const New = styled.div`
  width: 24px;
  height: 24px;
`;

const View = styled.div`
  width: 24px;
  height: 24px;
`;

const MiniView = styled.div`
  width: 18px;
  height: 12px;
  svg,
  img {
    color: #888;
    filter: opacity(0.5);
  }
`;

const SubMit = styled.div`
  width: 40px;
  height: 40px;
`;

const BookMark = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;

  &:hover {
    background-color: #e7e7e7; /* 배경색을 설정 */
    border-radius: 8px;
  }
`;

const BaseImg = styled.div``;
