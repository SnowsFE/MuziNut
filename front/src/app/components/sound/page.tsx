"use client";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./page.module.css";

interface AddSoundModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; artist: string; composer: string; lyricist: string; genre: string; lyrics: string; soundFile: File | null }) => void;
}

const AddSoundModal: React.FC<AddSoundModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [soundData, setSoundData] = useState({
    name: "",
    artist: "",
    composer: "",
    lyricist: "",
    genre: "",
    lyrics: "",
    soundFile: null as File | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files) {
      setSoundData({ ...soundData, soundFile: files[0] });
    } else {
      setSoundData({ ...soundData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(soundData);
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered >
      <div className={styles.modal__container}>

     
      <Modal.Header closeButton>
        <Modal.Title>음원 업로드</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className={styles.soundtrack}>
            
            <div className={styles.sound__name}>
              음원 이름
              <input type="text" name="name" value={soundData.name} onChange={handleChange} />
            </div>
            <div className={styles.sound__upload}>
              음원
              <input type="file" name="soundFile" onChange={handleChange} />
            </div>
            <div className={styles.artist__name}>
              아티스트
              <input type="text" name="artist" value={soundData.artist} onChange={handleChange} />
            </div>
            <div className={styles.artist__etc}>
              작곡가
              <input type="text" name="composer" value={soundData.composer} onChange={handleChange} />
              작사가
              <input type="text" name="lyricist" value={soundData.lyricist} onChange={handleChange} />
            </div>
            <div className={styles.genre}>
              장르
              <input type="text" name="genre" value={soundData.genre} onChange={handleChange} />
            </div>
            <div className={styles.lyrics}>
              노래 가사
              <input type="text" name="lyrics" value={soundData.lyrics} onChange={handleChange} />
            </div>
          </div>
          <button type="submit">제출</button>
        </form>
      </Modal.Body>
      </div>
    </Modal>
  );
};

export default AddSoundModal;
