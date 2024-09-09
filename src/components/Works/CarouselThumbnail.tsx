import "../../styles/works/carouselThumbnail.css";

interface CarouselProps {
  activeThumbnail: number;
  categorySize: number;
}

export default function CarouselThumbnail(props: CarouselProps) {
  return (
    <div className="thumbnail-container">
      {[...Array(props.categorySize)].map((_, i) => (
        <span
          key={i}
          className={`dot ${i === props.activeThumbnail ? "active" : ""}`}
        />
      ))}
    </div>
  );
}
