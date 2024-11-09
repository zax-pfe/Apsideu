import "../../styles/works/carousel.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoMdClose, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image, { StaticImageData } from "next/image";
import { nuitImages } from "@/app/data/nuit";
import { AnimatePresence, motion } from "framer-motion";
import CarouselThumbnail from "./CarouselThumbnail";

interface CarouselProps {
  setActiveModal: Dispatch<SetStateAction<number>>;
  activeModal: number;
}
type ImageType = {
  id: number;
  name: string;
  src: StaticImageData; // or `string` if it's just a URL path
  model: string;
};

const imageVariant = {
  hidden: {
    opacity: 0,
    // x: 50,
    transiaiton: {
      duration: 0.4,
    },
  },

  visible: {
    opacity: 1,
    // x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Carousel(props: CarouselProps) {
  const categorySize = nuitImages.length;
  const [imageData, setImageData] = useState<ImageType>(
    nuitImages[props.activeModal]
  );

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflowY = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, []);

  useEffect(() => {
    setImageData(nuitImages[props.activeModal]);
    console.log(props.activeModal);
  }, [props.activeModal]);

  function handleNextClick(activeModal: number) {
    if (activeModal + 1 < categorySize) {
      props.setActiveModal(activeModal + 1);
    } else {
      props.setActiveModal(0);
    }
  }

  function handlePrevClick(activeModal: number) {
    if (activeModal > 0) {
      props.setActiveModal(activeModal - 1);
    } else {
      props.setActiveModal(categorySize - 1);
    }
  }

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <div className="button-container">
          <IoMdClose
            className="carousel-button"
            onClick={() => props.setActiveModal(-1)}
            color="white"
            size={35}
          />
        </div>
      </div>
      <div className="carousel-content">
        <div className="arrow-container justify-end">
          <div className="button-container">
            <IoIosArrowBack
              className="carousel-button"
              onClick={() => handlePrevClick(props.activeModal)}
              color="white"
              size={45}
            />
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={props.activeModal}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={imageVariant}
            className="image-container"
          >
            {imageData?.src && (
              <Image src={imageData.src} alt={imageData.name} fill={true} />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="arrow-container">
          <div className="button-container">
            <IoIosArrowForward
              className="carousel-button"
              onClick={() => handleNextClick(props.activeModal)}
              color="white"
              size={45}
            />
          </div>
        </div>
      </div>
      <div className="carousel-footer">
        <CarouselThumbnail
          activeThumbnail={props.activeModal}
          categorySize={categorySize}
        />
      </div>
    </div>
  );
}
