"use client";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled, { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
  showPopup: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    overflow: ${(props) => (props.showPopup ? "hidden" : "auto")};
  }
`;

interface MyEditorHandle {
  openPopup: () => void;
}

const MyEditor = forwardRef<MyEditorHandle>((props, ref) => {
  const [editorHtml, setEditorHtml] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"], // remove formatting button
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useImperativeHandle(ref, () => ({
    openPopup,
  }));

  return (
    <>
      <GlobalStyle showPopup={showPopup} />
      <PopupBackground show={showPopup} onClick={closePopup}>
        <PopupContent onClick={(e) => e.stopPropagation()}>
          <h2>글 작성</h2>
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={editorHtml}
            onChange={setEditorHtml}
          />
          <SubmitButton onClick={closePopup}>등록 완료</SubmitButton>
        </PopupContent>
      </PopupBackground>
    </>
  );
});

export default MyEditor;

interface PopupBackgroundProps {
  show: boolean;
}

const PopupBackground = styled.div<PopupBackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  z-index: 1001;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: #16be78;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #13a569;
  }
`;
