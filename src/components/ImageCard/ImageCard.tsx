import css from "./ImageCard.module.css";

export default function ImageCard({ photos, alt_description, click }) {
  return (
    <>
      <div>
        <img
          src={photos}
          alt={alt_description}
          className={css.img}
          onClick={click}
        />
      </div>
    </>
  );
}
