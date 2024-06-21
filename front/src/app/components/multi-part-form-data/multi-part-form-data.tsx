import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";

const useFileState = (onUpload: (data: any) => void) => {
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    banner: null,
    profile: null,
  });

  const checkImageDimensions = (
    file: File,
    minWidth: number,
    minHeight: number
  ): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve(img.width >= minWidth && img.height >= minHeight);
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFileChange = async (
    e: ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      let isValid = true;
      if (key === "banner") {
        isValid = await checkImageDimensions(file, 600, 210);
        if (!isValid) {
          alert("배너 이미지는 최소 600x210 크기여야 합니다.");
          return;
        }
      } else if (key === "profile") {
        isValid = await checkImageDimensions(file, 160, 160);
        if (!isValid) {
          alert("프로필 이미지는 최소 160x160 크기여야 합니다.");
          return;
        }
      }

      setFiles((prevFiles) => ({ ...prevFiles, [key]: file }));

      const imageUrl = URL.createObjectURL(file);
      onUpload({ [`${key}Url`]: imageUrl });

      const formData = new FormData();
      formData.append(key, file);

      try {
        const response = await fetch("/profile/boards", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        onUpload(data);
      } catch (error) {
        console.error("파일이 올라가지 않았습니다", error);
      }
    }
  };

  return { files, handleFileChange };
};

const BannerData: React.FC<{ onUpload: (data: any) => void }> = ({
  onUpload,
}) => {
  const { handleFileChange } = useFileState(onUpload);

  return (
    <UploadForm>
      <Label>
        <HiddenInput
          type="file"
          onChange={(e) => handleFileChange(e, "banner")}
          id="banner-file"
        />
        <CustomButton htmlFor="banner-file">⚙️</CustomButton>
      </Label>
    </UploadForm>
  );
};

const ProfileData: React.FC<{ onUpload: (data: any) => void }> = ({
  onUpload,
}) => {
  const { handleFileChange } = useFileState(onUpload);

  return (
    <UploadForm>
      <Label>
        <HiddenInput
          type="file"
          onChange={(e) => handleFileChange(e, "profile")}
          id="profile-file"
        />
        <CustomButton2 htmlFor="profile-file">⚙️</CustomButton2>
      </Label>
    </UploadForm>
  );
};

const UploadForm = styled.form`
  opacity: 1;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const HiddenInput = styled.input`
  display: none;
`;

const CustomButton = styled.label`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 98%;
  height: 90%;
  opacity: 0;
  padding: 10px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
  font-size: 18px; /* 아이콘 크기 조정 */
`;

const CustomButton2 = styled.label`
  cursor: pointer;
  position: absolute;
  top: 13.5%;
  left: 0.8%;
  opacity: 0;
  padding: 60px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
  font-size: 18px; /* 아이콘 크기 조정 */
`;

export { BannerData, ProfileData };
