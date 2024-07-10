import React, { useMemo, useRef, useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import styled, { keyframes, css } from "styled-components";
import QuillToolbar from "../../profile/lounge/EditorOption";
import Quill from "quill";

const Font = Quill.import("formats/font");
Font.whitelist = ["esamanruLight", "esamanruMedium", "esamanruBold"];
Quill.register(Font, true);

const Size = Quill.import("attributors/style/size");
Size.whitelist = ["13px", "16px", "18px", "24px", "28px", "32px"];
Quill.register(Size, true);

const WriteQuill: React.FC<{
  onPublish: (content: string) => void;
  onClose: () => void;
  initialContent?: string;
}> = ({ onPublish, onClose, initialContent }) => {
  const quillRef = useRef<ReactQuill>(null);
  const [content, setContent] = useState<string>(initialContent || "");
  const [visible, setVisible] = useState<boolean>(true);
  const [render, setRender] = useState<boolean>(true);

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => setRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: "#toolbar",
        handlers: {
          image: QuillImageUpload,
        },
      },
    };
  }, [content, initialContent, onClose, onPublish]);

  useEffect(() => {
    const quill = quillRef.current?.getEditor();
    if (quill) {
      quill.format("font", "esamanruLight");
      quill.format("size", "13px");
    }
  }, []);

  const handleChange = (content: string) => {
    setContent(content);
    console.log("글 변경", content);
  };

  const QuillImageUpload = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        await QuillSubmit(file);
      }
    };
    input.click();
  };

  const QuillSubmit = async (file?: File) => {
    const formData = new FormData();
    formData.append("content", content);

    try {
      const response = await fetch("http://localhost:8080", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("글이 성공적으로 등록되었습니다.");

        // 글 등록 또는 수정 후에 최신 상태 반영
        if (initialContent !== null && initialContent !== undefined) {
          // 글 수정 시
          const updatedContent = content;
          onPublish(updatedContent);
        } else {
          // 글 등록 시
          onPublish(content);
        }

        // 에디터 닫기
        setVisible(false);
        onClose();
      } else {
        console.error("글 등록에 실패했습니다.");
      }
    } catch (error) {
      console.error("글 등록 중 오류 발생:", error);
    }
  };

  return (
    <>
      <Overlay visible={visible} />
      <EditorContainer visible={visible}>
        <QuillTitle>라운지 Talk</QuillTitle>
        <QuillToolbar />
        <CustomReactQuill
          placeholder="자유롭게 여러분의 생각을 나눠보세요."
          theme="snow"
          ref={quillRef}
          value={content}
          onChange={handleChange}
          modules={modules}
        />
        <QuillButtonContainer>
          <QuillCancelButton
            onClick={() => {
              setVisible(false);
              onClose();
            }}
          >
            취소
          </QuillCancelButton>
          <StyledButton onClick={() => QuillSubmit()}>
            {initialContent ? "글 수정" : "글 등록"}
          </StyledButton>
        </QuillButtonContainer>
      </EditorContainer>
    </>
  );
};

export default WriteQuill;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Overlay = ({ visible }: { visible: boolean }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    e.preventDefault(); // 기본 동작 막기
  };

  return <OverlayStyled visible={visible} onClick={handleOverlayClick} />;
};

const OverlayStyled = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
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
  z-index: 4;
  animation: ${({ visible }) =>
    visible
      ? ""
      : css`
          ${fadeOut} 0.5s forwards
        `};
`;

const QuillTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: black;
`;

const CustomReactQuill = styled(ReactQuill)`
  border-radius: 30px;
  height: 450px;
  margin-bottom: 20px;
  color: black;

  .ql-container {
    font-family: "esamanru Light", sans-serif;
  }

  .ql-toolbar {
    font-family: "esamanru Light", sans-serif;
  }

  .ql-editor {
    font-family: "esamanru Light", sans-serif;
  }

  .ql-font-esamanruLight {
    font-family: "esamanru Light";
  }

  .ql-font-esamanruMedium {
    font-family: "esamanru Medium";
  }

  .ql-font-esamanruBold {
    font-family: "esamanru Bold";
  }
`;

const QuillButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 13px 0;
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

const QuillCancelButton = styled.button`
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
