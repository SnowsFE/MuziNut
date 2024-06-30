import React, { useMemo, useRef, useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import styled, { keyframes, css } from "styled-components";
import QuillToolbar from "./EditorOption"; // 툴바 컴포넌트를 임포트
import Quill from "quill";

// Quill에서 사용할 사용자 정의 폰트 설정
const Font = Quill.import("formats/font");
Font.whitelist = ["esamanruLight", "esamanruMedium", "esamanruBold"];
Quill.register(Font, true);

// Quill에서 사용할 사용자 정의 폰트 크기 설정
const Size = Quill.import("attributors/style/size");
Size.whitelist = ["13px", "16px", "18px", "24px", "28px", "32px"];
Quill.register(Size, true);

const WriteEditor: React.FC<{
  onPublish: React.Dispatch<React.SetStateAction<string>>;
}> = ({ onPublish }) => {
  const quillRef = useRef<ReactQuill>(null);
  const [content, setContent] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);
  const [render, setRender] = useState<boolean>(true);

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => setRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setVisible(false);
    }
  };

  // Quill 모듈 설정
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: "#toolbar",
        handlers: {
          // 이미지 삽입 핸들러
          image: function () {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.onchange = async () => {
              const file = input.files?.[0];
              if (file) {
                const formData = new FormData();
                formData.append("file", file);

                try {
                  // 서버에 파일 업로드 요청
                  const response = await fetch("/profile/lounge", {
                    method: "POST",
                    body: formData,
                  });

                  if (response.ok) {
                    const data = await response.json();
                    const quill = quillRef.current?.getEditor();
                    const range = quill?.getSelection();
                    if (quill && range) {
                      quill.insertEmbed(range.index, "image", data.url);
                      console.log("이미지가 삽입되었습니다: ", data.url); // 이미지 삽입 로그
                    }
                  } else {
                    console.error("이미지 업로드 실패.");
                  }
                } catch (error) {
                  console.error("이미지 업로드 중 오류 발생:", error);
                }
              }
            };
            input.click();
          },
        },
      },
    };
  }, []);

  // Quill 에디터 초기 설정
  useEffect(() => {
    const quill = quillRef.current?.getEditor();
    if (quill) {
      quill.format("font", "esamanruLight");
      quill.format("size", "13px");
    }
  }, []);

  // 에디터 내용 변경 핸들러
  const handleChange = (content: string) => {
    setContent(content);
    console.log("Content changed: ", content); // 텍스트 변경 로그
  };

  // 글 등록 버튼 클릭 핸들러
  const handlePublishClick = async () => {
    try {
      const formData = new FormData();
      formData.append("content", content);

      const response = await fetch("/profile/lounge", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("글이 성공적으로 등록되었습니다.");
        onPublish(content); // 콜백 함수 호출
      } else {
        console.error("글 등록에 실패했습니다.");
      }
    } catch (error) {
      console.error("글 등록 중 오류 발생:", error);
    }
  };

  if (!render) return null;

  return (
    <>
      <Overlay visible={visible} onClick={handleOverlayClick} />
      <EditorContainer visible={visible}>
        <Title>라운지 Talk</Title>
        <QuillToolbar />
        <CustomReactQuill
          placeholder="라운지Talk에서 소중한 일상을 공유해보세요."
          theme="snow"
          ref={quillRef}
          value={content}
          onChange={handleChange}
          modules={modules}
        />
        <ButtonContainer>
          <CancelButton onClick={() => setVisible(false)}>취소</CancelButton>
          <StyledButton onClick={handlePublishClick}>글 등록</StyledButton>
        </ButtonContainer>
      </EditorContainer>
    </>
  );
};

export default WriteEditor;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Overlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  animation: ${({ visible }) =>
    visible
      ? ""
      : css`
          ${fadeOut} 0.5s forwards
        `};
`;

const EditorContainer = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 635px;
  padding: 15px 40px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: white;
  z-index: 2;
  animation: ${({ visible }) =>
    visible
      ? ""
      : css`
          ${fadeOut} 0.5s forwards
        `};
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: black;
`;

const CustomReactQuill = styled(ReactQuill)`
  border-radius: 30px;
  height: 450px; /* 높이를 조정하여 제목란을 위한 공간 확보 */
  margin-bottom: 20px;
  color: black;

  .ql-container {
    font-family: "esamanru Light", sans-serif; // 기본 폰트 설정
  }

  .ql-toolbar {
    font-family: "esamanru Light", sans-serif; // 기본 폰트 설정
  }

  .ql-editor {
    font-family: "esamanru Light", sans-serif; // 기본 폰트 설정
  }

  .ql-font-esamanruLight {
    font-family: "esamanru Light"; // 사용자 정의 폰트 패밀리 적용 클래스
  }

  .ql-font-esamanruMedium {
    font-family: "esamanru Medium"; // 사용자 정의 폰트 패밀리 적용 클래스
  }

  .ql-font-esamanruBold {
    font-family: "esamanru Bold"; // 사용자 정의 폰트 패밀리 적용 클래스
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 13px;
`;

const StyledButton = styled.button`
  background-color: #16be78;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #13a86a;
  }
`;

const CancelButton = styled.button`
  background-color: #ccc;
  color: black;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #bbb;
  }
`;
