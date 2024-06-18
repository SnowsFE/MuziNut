
'use client'
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import search from "@/../public/images/favicon.png";
import AddSoundModal from "@/app/components/sound/page";

const AddAlbumModal: React.FC = () => {
  const [isSoundModalOpen, setIsSoundModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    albumName: "",
    artistName: "",
    albumDetails: "",
    albumPicture: "",
    soundtracks: [] as Array<{
      name: string;
      artist: string;
      composer: string;
      lyricist: string;
      genre: string;
      lyrics: string;
      soundFile: File | null;
    }>,
  });
  const [previewImage, setPreviewImage] = useState<string>("");

  const openSoundModal = () => {
    setIsSoundModalOpen(true);
  };

  const closeSoundModal = () => {
    setIsSoundModalOpen(false);
  };

  const handleSoundSubmit = (data: {
    name: string;
    artist: string;
    composer: string;
    lyricist: string;
    genre: string;
    lyrics: string;
    soundFile: File | null;
  }) => {
    setFormData({
      ...formData,
      soundtracks: [...formData.soundtracks, data],
    });
    closeSoundModal();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, [name]: files[0] });
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
      setPreviewImage("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const albumDataArray = [
      formData.albumName,
      formData.artistName,
      formData.albumDetails,
      formData.albumPicture,
      formData.soundtracks,
    ];
    console.log(albumDataArray);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <span>앨범 등록</span>
      </div>
      <form onSubmit={handleSubmit} className={styles.form__container}>
        <div className={styles.album__container}>
          <div className={styles.album__name}>
            앨범 이름
            <input
              type="text"
              name="albumName"
              value={formData.albumName}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.ablum__details}>
            앨범 소개
            <input
              type="text"
              name="albumDetails"
              value={formData.albumDetails}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.album__picture}>
            앨범 사진
            <input
              type="file"
              name="albumPicture"
              onChange={handleInputChange}
            />
          </div>
          {previewImage && (
            <div className={styles.album__preview}>
              <img src={previewImage} alt="Album Preview" width="200" />
            </div>
          )}
        </div>
        <div className={styles.artist__container}>
          <div className={styles.artist__name}>
            아티스트
            <input
              type="text"
              name="artistName"
              value={formData.artistName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.sound__container}>
          <div className={styles.soundtrack}>
            <a href="#" onClick={openSoundModal}>
              <Image src={search} alt="search" width={50} height={50} />
            </a>
          </div>

          <AddSoundModal
            isOpen={isSoundModalOpen}
            onClose={closeSoundModal}
            onSubmit={handleSoundSubmit}
          />

          <div>
            <h3>추가된 음원</h3>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        </div>

        <div className={styles.button__container}>
          <button type="submit">제출</button>
        </div>
      </form>
    </div>
  );
};

export default AddAlbumModal;
