"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import album from "@/../../public/svgs/album_thumb.png";
import AlbumForm from "@/app/components/add-album/album";
import SongForm from "@/app/components/add-album/song";
import StepForCheck from "@/app/components/add-album/check";
import SubmitModal from "@/app/components/add-album/submitModal";

export default function AddAlbumModal() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // URL 업데이트
    window.history.pushState(null, "", `/add-album?step=${step + 1}`);
  }, [step]);

  // 버튼 클릭 시 step 상태 변경
  const isButtonClicked = () => {
    if (step < 2) {
      setStep((preStep) => preStep + 1);
    }
  };
  const isButtonClickedBack = () => {
    if (step > 0) {
      setStep((preStep) => preStep - 1);
    }
  };

  // 이미지 클릭 시 imageClick 상태변경
  const [imageClick, setImageClick] = useState(false);

  const isImageClicked = () => {
    setImageClick(true);
  };

  // 이미지 hover 여부를 나타내는 상태
  const [isHovered, setIsHovered] = useState(false);

  const [isChecked, setIsChecked] = useState(false); // isChecked 상태 추가
  // 체크박스 변경 핸들러
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  // 체크박스 선택하고 제출 눌렀을 때 모달창
  const [showModal, setShowModal] = useState(false);


  const handleSubmit = () => {
    if (!isChecked) {
      alert("위 사실에 대해 모두 인지하고, 동의해 주세요.");
    } else {
      console.log("모달 열려야 함")
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <>
      <div className={styles.Title}>앨범 만들기</div>

      <div className={styles.container}>
        <div className={styles.steps__container}>
          <div
            className={`${styles.step} ${step >= 0 ? styles.selected : ""} ${
              step > 0 ? styles.completed : ""
            }`}
          >
            <span className={styles.steps__index}>1</span>
            <div className={styles.steps__contents}>
              <span className={styles.steps__label}>단계 1</span>
              <span className={styles.steps__description}>앨범 업로드하기</span>
            </div>
          </div>
          <div
            className={`${styles.step} ${step >= 1 ? styles.selected : ""} ${
              step > 1 ? styles.completed : ""
            }`}
          >
            <span className={styles.steps__index}>2</span>
            <div className={styles.steps__contents}>
              <span className={styles.steps__label}>단계 2</span>
              <span className={styles.steps__description}>
                원하는 음악 추가
                <br />
                (최대 10곡)
              </span>
            </div>
          </div>
          <div className={`${styles.step} ${step >= 2 ? styles.selected : ""}`}>
            <span className={styles.steps__index}>3</span>
            <div className={styles.steps__contents}>
              <span className={styles.steps__label}>단계 3</span>
              <span className={styles.steps__description}>제출 완료</span>
            </div>
          </div>
        </div>

        {/* ______________ FORM 부분 ______________ */}

        <div className={styles.album__container}>
          {step === 0 && (
            <div
              className={styles.img__container}
              onClick={isImageClicked}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {!imageClick && (
                <Image src={album} alt="album" width={530} height={530} />
              )}

              {isHovered && !imageClick && (
                <div className={styles.image__over__text}>
                  <span>이미지를 클릭해서 Form을 입력해보세요!</span>
                </div>
              )}
            </div>
          )}

          {step === 0 && imageClick && (
            <div className={styles.form__container}>
              <AlbumForm />
            </div>
          )}

          {step === 1 && (
            <div className={styles.form__container}>
              <SongForm />
            </div>
          )}

          {step === 2 && (
            <div className={styles.form__container}>
              <StepForCheck />
              <label className={isChecked ? "" : styles.checkboxError}>
              <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className={styles.agree}>위 사실에 대해 모두 인지하였고 동의합니다.</span>
              </label>
            </div>
          )}

          <div className={styles.bottom__container}>
            <div className={styles.btn__container}>
              {step === 0 && !imageClick && (
                <div className={styles.album__descrption}>
                  * 앨범 기본 이미지 입니다 * <br />
                  이미지를 선택하지 않을 시, 다음 이미지로 제공됩니다.
                </div>
              )}
              {step > 0 && (
                <button
                  onClick={isButtonClickedBack}
                  className={styles.prev__btn}
                >
                  이전 단계
                </button>
              )}
              {(step === 1 || (step === 0 && imageClick)) && (
                <button onClick={isButtonClicked} className={styles.next__btn}>
                  다음 단계
                </button>
              )}
              {step === 2 && (
                <button
                  onClick={handleSubmit}
                  className={`${styles.submit__btn} ${
                    isChecked ? styles.active : ""
                  }`}
                >
                  생성하기
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <SubmitModal show={showModal} handleClose={closeModal}>
        <h2>앨범을 생성했습니다!</h2>
      </SubmitModal>

    </>
  );
}
