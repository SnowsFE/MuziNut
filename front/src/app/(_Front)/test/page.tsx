"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import AxiosURL from "@/app/axios/url";

const SettingUserThumbnail = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [userId, setUserId] = useState(2); // 초기 userId 값을 설정합니다.
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [userdata, setUserdata] = useState(null);

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
        const response = await fetch(
          `${AxiosURL}/users/set-profile-bannerImage`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        const data = await response.json();
        if (data.base64Image) {
          setImageBase64(data.base64Image);
        }
      } catch (error) {
        console.error("데이터를 받아오지 못했습니다", error);
      }
    },
    []
  );

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${AxiosURL}/profile`, {
          params: { userId },
        });
        const data = response.data;
        setUserdata(data);
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
      <ImageContainer>
        {imageBase64 && (
          <StyledImage
            src={`data:image/png;base64,${userdata}`}
            alt="Uploaded Image"
          />
        )}
      </ImageContainer>
    </>
  );
};

const ImageContainer = styled.div`
  width: 1280px;
  height: 210px;
  border: 1px solid black;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
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
