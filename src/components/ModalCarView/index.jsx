/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import ReactModal from "react-modal";
import { CloseOutlined } from "@ant-design/icons";
import clsx from "clsx";
import ModalCarViewCarousel from "./ModalCarViewCarousel";

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
  const [scrollToIndex, setScrollToIndex] = useState(null);
  const imageRef = useRef(null);

  const handleLeftPanelImageClick = useCallback((url) => {
    setCurrentImage(url);
  }, []);

  const getImageSelectedByArrows = useCallback(
    (index) => {
      setCurrentImage(
        () =>
          `${process.env.NEXT_PUBLIC_IMAGE_BASE_URI}/${imageUrls[index].uri}`
      );
      setScrollToIndex(index);
    },
    [imageUrls]
  );

  useEffect(() => {
    if (scrollToIndex !== null && imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToIndex]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img src={currentImage} alt="Current Image" className={styles.blur} />
      <div className={styles.leftPanel}>
        {imageUrls.map((image, index) => {
          const imageSrcUri = `${process.env.NEXT_PUBLIC_IMAGE_BASE_URI}/${image.uri}`;
          return (
            <Image
              fill
              ref={scrollToIndex === index ? imageRef : null}
              className={clsx(
                styles.leftPanelImage,
                imageSrcUri === currentImage && styles.selectedImage
              )}
              src={imageSrcUri}
              alt="Left panel image"
              key={image.id}
              onClick={() => handleLeftPanelImageClick(imageSrcUri)}
            />
          );
        })}
      </div>
      <div className={styles.zoomImageDiv}>
        <ModalCarViewCarousel
          imageUrls={imageUrls}
          currentImage={currentImage}
          getImageSelectedByArrows={getImageSelectedByArrows}
        />
      </div>
      <CloseOutlined className={styles.closeButton} onClick={handleClose} />
    </ReactModal>
  );
};

export default ModalCarView;
