import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill"; // React Quill 에디터 컴포넌트 import
import "react-quill/dist/quill.snow.css"; // React Quill의 Snow 테마 CSS import

// 허용할 폰트 옵션 및 사이즈 옵션 정의
const Font = {
  whitelist: ["esamanruLight", "esamanruMedium", "esamanruBold"],
};

const Size = {
  whitelist: ["13px", "16px", "18px", "24px", "28px", "32px"],
};

// 각 폰트 옵션에 대한 레이블 정의
const fontLabels: Record<string, string> = {
  esamanruLight: "EsaManru",
  esamanruMedium: "통통하게",
  esamanruBold: "두껍게",
};

// Quill 툴바를 구현하는 함수형 컴포넌트
const QuillToolbar = () => {
  const quillRef = useRef<ReactQuill | null>(null); // Quill 에디터 ref 생성
  const [font, setFont] = useState(Font.whitelist[0]); // 현재 선택된 폰트 상태 관리
  const [size, setSize] = useState(Size.whitelist[0]); // 현재 선택된 크기 상태 관리

  // Quill 에디터가 준비되면 실행되는 useEffect
  useEffect(() => {
    const quill = quillRef.current?.getEditor(); // Quill 에디터 객체 가져오기
    if (quill) {
      quill.format("font", Font.whitelist[0]); // 초기 폰트 적용
      quill.format("size", Size.whitelist[0]); // 초기 크기 적용
    }
  }, [font, size]); // 초기 렌더 시에만 실행되도록 설정

  // 폰트 선택이 변경됐을 때 실행되는 함수
  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newFont = event.target.value; // 새로 선택된 폰트 값
    const quill = quillRef.current?.getEditor(); // Quill 에디터 객체 가져오기
    if (quill) {
      quill.format("font", newFont); // 에디터에 새로운 폰트 적용
      setFont(newFont); // 현재 선택된 폰트 상태 업데이트
    }
  };

  // 크기 선택이 변경됐을 때 실행되는 함수
  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = event.target.value; // 새로 선택된 크기 값
    const quill = quillRef.current?.getEditor(); // Quill 에디터 객체 가져오기
    if (quill) {
      quill.format("size", newSize); // 에디터에 새로운 크기 적용
      setSize(newSize); // 현재 선택된 크기 상태 업데이트
    }
  };

  return (
    <div>
      <div id="toolbar">
        <span className="ql-formats">
          <select
            className="ql-font"
            value={Font.whitelist[0]}
            onChange={handleFontChange}
          >
            {Font.whitelist.map((fontOption) => (
              <option key={fontOption} value={fontOption}>
                {fontLabels[fontOption]}
              </option>
            ))}
          </select>

          <select
            className="ql-size"
            value={Size.whitelist[0]}
            onChange={handleSizeChange}
          >
            {Size.whitelist.map((sizeOption) => (
              <option key={sizeOption} value={sizeOption}>
                {sizeOption}
              </option>
            ))}
          </select>
        </span>

        <span className="ql-formats">
          <button className="ql-italic" />
          <button className="ql-underline" />
          <button className="ql-strike" />
        </span>
        <span className="ql-formats">
          <button className="ql-list" value="ordered" />
          <button className="ql-list" value="bullet" />
        </span>
        <span className="ql-formats">
          <select className="ql-color" />
          <select className="ql-background" />
        </span>
        <span className="ql-formats">
          <select className="ql-align" />
          <button className="ql-link" />
          <button className="ql-image" />
        </span>
      </div>
    </div>
  );
};

export default QuillToolbar; // QuillToolbar 컴포넌트 export
