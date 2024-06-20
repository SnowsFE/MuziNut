import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

// FileUploadProps 인터페이스 정의
interface FileUploadProps {
  onUpload: (data: any) => void; // 이미지 파일 유형에 따라 any값이 바뀔 수 있음
}

// FileUpload 컴포넌트 선언
const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  // bannerFile과 profileFile 상태 관리를 위한 useState 훅 사용
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [profileFile, setProfileFile] = useState<File | null>(null);

  // 파일 입력 변경 시 호출되는 함수
  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>, // 파일 입력 필드의 변경 이벤트 타입
    setFile: React.Dispatch<React.SetStateAction<File | null>> // 파일 상태를 설정하는 setState 함수 타입
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]); // 선택된 파일을 해당 파일 상태에 설정
    }
  };

  // 폼 제출 시 호출되는 비동기 함수
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 제출 동작 방지

    const formData = new FormData(); // FormData 객체 생성
    if (bannerFile) {
      formData.append("banner", bannerFile); // formData에 banner 파일 추가
    }
    if (profileFile) {
      formData.append("profile", profileFile); // formData에 profile 파일 추가
    }

    try {
      const response = await fetch("/upload", {
        method: "POST", // POST 메서드로 서버에 요청
        body: formData, // formData를 요청 본문으로 설정
      });

      const data = await response.json(); // 서버 응답을 JSON 형태로 변환
      onUpload(data); // onUpload 콜백 함수 호출하여 서버 응답 데이터 전달
    } catch (error) {
      console.error("Error uploading files:", error); // 파일 업로드 중 오류 발생 시 콘솔에 에러 로그 출력
    }
  };

  // JSX 반환
  return (
    <UploadForm onSubmit={handleSubmit}>
      <UploadInput
        type="file"
        onChange={(e) => handleFileChange(e, setBannerFile)}
      />{" "}
      {/* banner 파일 선택 입력 필드 */}
      <UploadInput
        type="file"
        onChange={(e) => handleFileChange(e, setProfileFile)}
      />{" "}
      {/* profile 파일 선택 입력 필드 */}
      <UploadButton type="submit">Upload</UploadButton>{" "}
      {/* 파일 업로드 제출 버튼 */}
    </UploadForm>
  );
};

const UploadForm = styled.form`
  margin-top: 20px;
`;

const UploadInput = styled.input`
  margin-right: 10px;
`;

const UploadButton = styled.button`
  margin-top: 10px;
  background-color: #1bb373;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

export default FileUpload; // FileUpload 컴포넌트 내보내기
