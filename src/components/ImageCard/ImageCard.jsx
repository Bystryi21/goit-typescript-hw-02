import css from "./ImageCard.module.css";

export default function ImageCard({ photos, onImageClick }) {
  return (
    <>
      <div>
        <img src={photos} alt={onImageClick} className={css.img} />
      </div>
    </>
  );
}
