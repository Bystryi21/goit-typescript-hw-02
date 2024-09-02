import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ photos, onImageClick }) {
  return (
    <ul className={css.ul}>
      {photos.map((item) => {
        return (
          <li
            className={css.li}
            key={item.id}
            onClick={() => onImageClick(item.urls.regular)}
          >
            <ImageCard
              photos={item.urls.small}
              onImageClick={item.alt_description}
            />
          </li>
        );
      })}
    </ul>
  );
}
