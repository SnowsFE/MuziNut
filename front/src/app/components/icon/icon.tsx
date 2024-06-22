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
