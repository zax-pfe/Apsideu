import "../../styles/works/carousel.css";
import { Dispatch, SetStateAction } from "react";

interface CarouselProps {
  setActiveModal: Dispatch<SetStateAction<boolean>>;
}
export default function Carousel(props: CarouselProps) {
  return (
    <div className="carousel-content">
      <div onClick={() => props.setActiveModal(false)}>ok</div>
    </div>
  );
}
