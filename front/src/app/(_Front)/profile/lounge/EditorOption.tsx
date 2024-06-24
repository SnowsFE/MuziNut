import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill"; // React Quill 에디터 컴포넌트 import
import "react-quill/dist/quill.snow.css"; // React Quill의 Snow 테마 CSS import

const Font = {
  whitelist: ["esamanruLight", "esamanruMedium", "esamanruBold"],
};

const Size = {
  whitelist: ["13px", "16px", "18px", "24px", "28px", "32px"],
};

const fontLabels: Record<string, string> = {
  esamanruLight: "동글",
  esamanruMedium: "통통",
  esamanruBold: "뚱뚱",
};

const QuillToolbar = () => {
  const quillRef = useRef<ReactQuill | null>(null); // Quill 에디터 ref 생성
  const defaultFont = Font.whitelist[0];
  const defaultSize = Size.whitelist[0];
  const [font, setFont] = useState(defaultFont); // 현재 선택된 폰트 상태 관리
  const [size, setSize] = useState(defaultSize); // 현재 선택된 크기 상태 관리

  useEffect(() => {
    const quill = quillRef.current?.getEditor(); // Quill 에디터 객체 가져오기
    if (quill) {
      quill.format("font", defaultFont); // 초기 폰트 적용
      quill.format("size", defaultSize); // 초기 크기 적용

      quill.on("editor-change", () => {
        const currentFormat = quill.getFormat();
        setFont(currentFormat.font || defaultFont);
        setSize(currentFormat.size || defaultSize);
      });

      quill.root.addEventListener("blur", () => {
        // 에디터가 블러될 때 초기값으로 설정
        setFont(defaultFont);
        setSize(defaultSize);
      });
    }
    // 클린업 함수로 블러 이벤트 제거
    return () => {
      quill?.root.removeEventListener("blur", () => {
        setFont(defaultFont);
        setSize(defaultSize);
      });
    };
  }, [defaultFont, defaultSize]); // defaultFont와 defaultSize가 변경될 때마다 실행되도록 설정

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newFont = event.target.value; // 새로 선택된 폰트 값
    const quill = quillRef.current?.getEditor(); // Quill 에디터 객체 가져오기
    if (quill) {
      quill.format("font", newFont); // 에디터에 새로운 폰트 적용
      setFont(newFont); // 현재 선택된 폰트 상태 업데이트
    }
  };

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
          <select className="ql-font" value={font} onChange={handleFontChange}>
            {Font.whitelist.map((fontOption) => (
              <option key={fontOption} value={fontOption}>
                {fontLabels[fontOption]}
              </option>
            ))}
          </select>

          <select className="ql-size" value={size} onChange={handleSizeChange}>
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

export default QuillToolbar;
