"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Page = () => {
  //   const [userId, setUserId] = useState(2);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/profile", {
          //   params: { userId },
        });

        console.log("됩니다", response.data);
        getData();
      } catch {
        console.error("안됩니다");
      }
    };
  }, []);

  return <div>page</div>;
};

export default Page;
