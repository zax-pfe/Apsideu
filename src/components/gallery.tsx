import "../styles/info.css";
import GalleryItem from "./galleryItem";
import { categoriesList } from "@/app/data/categories";

export default function Gallery() {
  return (
    <div>
      <div className="grid-container"></div>
      {categoriesList.map(({ name, id, cover }, index) => (
        <div key={`${name}${id}`}>
          <GalleryItem cover={cover} id={index} name={name} />
        </div>
      ))}
    </div>
  );
}
