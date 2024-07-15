"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import AxiosURL from "@/app/axios/url";

const SettingUserThumbnail = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imageBase64, setImageBase64] = useState("");

  const onUploadImage = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }

      const token =
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MjQ2MDI2OTd9.JmiZuwQYYCjgX1Npi5Kd7OhPDqzNdobiHMm4ZOw1nAH7gF5wGIpEPIjXrZfzDTlVr7YvL4VKedTUGmiqNWNy6A";
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("bannerImg", file);

      try {
        const response = await axios.post(
          `${AxiosURL}/users/set-profile-bannerImage`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const { base64Image } = response.data;
        setImageBase64(base64Image);
      } catch (error) {
        console.error("데이터를 받아오지 못했습니다", error);
      }
    },
    []
  );

  // 메인 Get 통신 데이터
  const [userId, setUserId] = useState(2); // 초기 userId 값을 설정합니다.

  const [userdata, setuserdata] = useState();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${AxiosURL}/profile`, {
          params: { userId },
        });
        const data = response.data;
        setuserdata(data);
        console.log("프로필 데이터 가져옴:", data);
      } catch (error) {
        console.error("프로필 데이터를 가져오는데 실패했습니다.", error);
      }
    };

    fetchProfileData();
  }, [userId]); // userId가 변경될 때마다 useEffect가 실행됩니다.

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onUploadImage}
        style={{ display: "none" }} // input element를 숨김
      />
      <Button onClick={onUploadImageButtonClick}>이미지 업로드</Button>
      {imageBase64 && (
        <StyledImage
          src={`data:image/png;base64,${userdata}`}
          alt="Uploaded Image"
          width={1280}
          height={210}
        />
      )}
    </>
  );
};

const StyledImage = styled.img`
  max-width: 300px;
  max-height: 300px;
  object-fit: contain;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default SettingUserThumbnail;
