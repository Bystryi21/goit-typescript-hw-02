import css from "./ImageCard.module.css";

export default function ImageCard({ photos, onImageClick }) {
  return (
    <>
      {photos.map((item) => (
        <li
          className={css.li}
          key={item.id}
          onClick={() => onImageClick(item.urls.regular)}
        >
          {/* <div> */}
          <img src={item.urls.small} alt={item.alt_description} />
          {/* </div> */}
        </li>
      ))}
    </>
  );
}
