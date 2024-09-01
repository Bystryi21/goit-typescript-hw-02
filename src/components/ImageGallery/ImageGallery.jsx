import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ photos, onImageClick }) {
  return (
    <ul className={css.ul}>
      <ImageCard photos={photos} onImageClick={onImageClick} />
    </ul>
  );
}
