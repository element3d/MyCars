import React, { useCallback, useMemo } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import styles from "./styles.module.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ModalCarViewCarousel = ({
  imageUrls = [],
  currentImage,
  getImageSelectedByArrows = () => {},
}) => {
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

  const getClickedImageIndex = useMemo(() => {
    return imageUrls.findIndex((el) => currentImage.includes(el?.uri));
  }, [currentImage, imageUrls]);

  const handleImageChange = useCallback(
    (index) => {
      getImageSelectedByArrows(index);
    },
    [getImageSelectedByArrows]
  );

  return (
    <div className={styles.carouselWrapper}>
      <Carousel
        showArrows
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        // showStatus={false}
        useKeyboardArrows
        renderArrowPrev={renderLeftArrow}
        renderArrowNext={renderRightArrow}
        selectedItem={getClickedImageIndex}
        onChange={handleImageChange}
      >
        {imageUrls.map((image) => {
          return (
            <Image
              key={image.id}
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URI}/${image.uri}`}
              alt={`Carousel Image-${image.id}`}
              width={500}
              height={500}
              className={styles.carouselCarImage}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default ModalCarViewCarousel;
