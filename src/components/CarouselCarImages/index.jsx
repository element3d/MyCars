"use client";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useCallback, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./styles.module.css";
import ModalCarView from "../ModalCarView";

const CarouselCarImages = ({ imageUrls = [], clickable }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const handleModalOpen = useCallback(() => setIsOpen(true), []);

  const handleModalClose = useCallback(() => {
    setIsOpen(false);
    setImageUrl(null);
  }, []);

  const imageOpenClick = useCallback(
    (url) => {
      if (!clickable) {
        return;
      }
      handleImageOpen(url);
    },
    [clickable]
  );

  const renderLeftArrow = useCallback((clickHandler, hasPrev) => {
    return (
      <div
        className={hasPrev ? styles.showArrow : styles.hiddenArrow}
        onClick={clickHandler}
      >
        <LeftOutlined className={styles.arrowLeft} />
      </div>
    );
  }, []);

  const renderRightArrow = useCallback((clickHandler, hasNext) => {
    return (
      <div
        className={hasNext ? styles.showArrow : styles.hiddenArrow}
        onClick={clickHandler}
      >
        <RightOutlined className={styles.arrowRight} />
      </div>
    );
  }, []);

  const handleImageOpen = useCallback((url) => {
    setImageUrl(url);
    handleModalOpen();
  }, []);

  return (
    <div>
      <Carousel
        showArrows
        showStatus={false}
        useKeyboardArrows
        renderArrowPrev={renderLeftArrow}
        renderArrowNext={renderRightArrow}
      >
        {imageUrls.map((image) => (
          <div
            key={image.id}
            onClick={() => imageOpenClick(image.url)}
            className={styles.carouselCarImage}
          >
            <img src={image.url} />
          </div>
        ))}
      </Carousel>

      {isOpen && (
        <ModalCarView
          isOpen={isOpen}
          handleClose={handleModalClose}
          src={imageUrl}
          imageUrls={imageUrls}
        />
      )}
    </div>
  );
};

export default CarouselCarImages;
