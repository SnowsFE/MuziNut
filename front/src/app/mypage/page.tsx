import React from "react";
import Event from "../eventpage/event/page";

const page = () => {
  return (
    <div>
      <a href="/mypage/home">
        <p>마이페이지</p>
      </a>
      <Event />
    </div>
  );
};

export default page;
