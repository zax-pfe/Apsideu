import "../../styles/works/carousel.css";
import { Dispatch, SetStateAction, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { nuitImages } from "@/app/data/nuit";

interface CarouselProps {
  setActiveModal: Dispatch<SetStateAction<number>>;
  pictureId: number;
}
export default function Carousel(props: CarouselProps) {
  const imageData = nuitImages.find((image) => image.id === props.pictureId);

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

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <IoMdClose
          className="cursor-pointer"
          onClick={() => props.setActiveModal(0)}
          color="white"
          size={35}
        />
      </div>
      <div className="carousel-content">
        <div className="arrow-container"></div>
        <div className="image-container">
          {imageData?.src && (
            <Image src={imageData.src} alt={imageData.name} fill={true} />
          )}
        </div>
        <div className="arrow-container"></div>
      </div>
      <div className="carousel-footer"></div>
    </div>
  );
}
