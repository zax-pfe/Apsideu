import "../styles/gallery.css";
import GalleryItem from "./galleryItem";
import { categoriesList } from "@/app/data/categories";

export default function Gallery() {
  return (
    <div className="grid-container">
      {categoriesList.map(({ name, id, cover }, index) => (
        <div key={`${name}${id}`}>
          <GalleryItem cover={cover} id={index} name={name} />
        </div>
      ))}
    </div>
  );
}
