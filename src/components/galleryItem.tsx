import "../styles/galleryitem.css";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface galleryItemProps {
  name: string;
  id: number;
  cover: StaticImageData;
}

export default function GalleryItem(props: galleryItemProps) {
  console.log(`${props.cover}`);
  return (
    <div className="grid-item">
      <Image src={props.cover} alt={props.name} className="grid-item-image" />
      {/* {props.name}
      <div className="text-overlay">
        <p>{props.name}</p>
      </div> */}
    </div>
  );
}
