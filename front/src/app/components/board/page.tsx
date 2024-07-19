"use client";
import { useOutData } from "./AxiosData";
import { useRouter } from "next/router";

const AnotherComponent = () => {
  const { boardsData } = useOutData();

  return (
    <div>
      <p>ID: {boardsData.boardsID}</p>
    </div>
  );
};

export default AnotherComponent;
