import React, { useCallback, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import ReactModal from "react-modal";
import { CloseOutlined } from "@ant-design/icons";
import clsx from "clsx";

const customStyles = {
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    padding: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
    margin: "0 auto",
    inset: "unset",
    display: "flex",
    zIndex: "3",
    width: "100vw",
    height: "100vh",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
    backgroundImage: "",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
  },
};

const ModalCarView = ({ isOpen, handleClose, src, imageUrls }) => {
  const [currentImage, setCurrentImage] = useState(src);

  const handleLeftPanelImageClick = useCallback((url) => {
    setCurrentImage(url);
  }, []);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img src={currentImage} alt="Current Image" className={styles.blur} />
      <div className={styles.leftPanel}>
        {imageUrls.map((image) => (
          <Image
            fill
            className={clsx(
              styles.leftPanelImage,
              image.url === currentImage && styles.selectedImage
            )}
            src={image.url}
            alt="Left panel image"
            key={image.id}
            onClick={() => handleLeftPanelImageClick(image.url)}
          />
        ))}
      </div>
      <div className={styles.zoomImageDiv}>
        <Image
          fill
          className={styles.zoomImage}
          src={currentImage}
          alt="Image Zoomed"
        />
      </div>
      <CloseOutlined className={styles.closeButton} onClick={handleClose} />
    </ReactModal>
  );
};

export default ModalCarView;
