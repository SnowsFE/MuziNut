import React, { useMemo, useRef, useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import styled, { keyframes, css } from "styled-components";
import QuillToolbar from "../../(_Front)/profile/lounge/EditorOption";
import Quill from "quill";

// Quill에서 사용할 사용자 정의 폰트 설정
const Font = Quill.import("formats/font");
Font.whitelist = ["esamanruLight", "esamanruMedium", "esamanruBold"];
Quill.register(Font, true);

// Quill에서 사용할 사용자 정의 폰트 크기 설정
const Size = Quill.import("attributors/style/size");
Size.whitelist = ["13px", "16px", "18px", "24px", "28px", "32px"];
Quill.register(Size, true);

const WriteEditor: React.FC = () => {
  const quillRef = useRef<ReactQuill>(null);
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);
  const [render, setRender] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!visible) {
        const timer = setTimeout(() => setRender(false), 500);
        return () => clearTimeout(timer);
      }
    }
  }, [visible]);

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: "#toolbar", // QuillToolbar 컴포넌트를 툴바로 사용
        handlers: {
          image: function () {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.onchange = async () => {
              const file = input.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                  const base64Image = e.target?.result as string;
                  const image = new Image();
                  image.src = base64Image;
                  image.onload = () => {
                    const canvas = document.createElement("canvas");
                    const ctx = canvas.getContext("2d");
                    const maxSize = 300;
                    let width = image.width;
                    let height = image.height;

                    if (width > height) {
                      if (width > maxSize) {
                        height = (height * maxSize) / width;
                        width = maxSize;
                      }
                    } else {
                      if (height > maxSize) {
                        width = (width * maxSize) / height;
                        height = maxSize;
                      }
                    }

                    canvas.width = width;
                    canvas.height = height;
                    ctx?.drawImage(image, 0, 0, width, height);
                    const resizedImage = canvas.toDataURL("image/jpeg");
                    const quill = quillRef.current?.getEditor();
                    const range = quill?.getSelection();
                    if (range) {
                      quill?.insertEmbed(range.index, "image", resizedImage);
                    }
                  };
                };
                reader.readAsDataURL(file);
              }
            };
            input.click();
          },
        },
      },
    };
  }, []);

  if (!render) return null;

  return (
    <>
      <Overlay visible={visible} />
      <EditorContainer visible={visible}>
        <Title>라운지 Talk</Title>
        <TitleInput
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <QuillToolbar /> {/* QuillToolbar 컴포넌트 추가 */}
        <CustomReactQuill
          placeholder="자유롭게 이야기를 나눠보세요."
          theme="snow"
          ref={quillRef}
          value={content}
          onChange={setContent}
          modules={modules}
        />
        <ButtonContainer>
          <CancelButton onClick={() => setVisible(false)}>취소</CancelButton>
          <StyledButton onClick={() => console.log(content)}>
            글 등록
          </StyledButton>
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
  height: 700px; /* 높이를 늘려서 제목란을 포함 */
  padding: 12px 35px;
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
`;

const TitleInput = styled.input`
  width: 96%;
  padding: 13px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const CustomReactQuill = styled(ReactQuill)`
  border-radius: 30px;
  height: 450px; /* 높이를 조정하여 제목란을 위한 공간 확보 */
  margin-bottom: 20px;

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
