"use client";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./styles.module.css";
import ModalCarView from "../ModalCarView";

const CarouselCarImages = ({ imageUrls = [], clickable }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const handleModalOpen = useCallback(() => setIsOpen(true), []);

  const handleImageOpen = useCallback(
    (url) => {
      setImageUrl(url);
      handleModalOpen();
    },
    [handleModalOpen]
  );

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
    [clickable, handleImageOpen]
  );

  const renderLeftArrow = useCallback((clickHandler) => {
    return (
      <div onClick={clickHandler}>
        <LeftOutlined className={styles.arrowLeft} />
      </div>
    );
  }, []);

  const renderRightArrow = useCallback((clickHandler) => {
    return (
      <div onClick={clickHandler}>
        <RightOutlined className={styles.arrowRight} />
      </div>
    );
  }, []);

  return (
    <div>
      <Carousel
        showArrows
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows
        renderArrowPrev={renderLeftArrow}
        renderArrowNext={renderRightArrow}
      >
        {imageUrls.map((image) => {
          return (
            <div
              key={image.id}
              onClick={() =>
                imageOpenClick(
                  `${process.env.NEXT_PUBLIC_IMAGE_BASE_URI}/${image.uri}`
                )
              }
              className={styles.carouselCarImage}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URI}/${image.uri}`}
                alt={`Carousel Image-${image.id}`}
                width={500}
                height={450}
                className={styles.carouselCarImage}
              />
            </div>
          );
        })}
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
