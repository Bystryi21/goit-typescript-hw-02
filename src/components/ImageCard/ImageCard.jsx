import css from "./ImageCard.module.css";

export default function ImageCard({ photos, altInfo, click }) {
  return (
    <>
      <div>
        <img src={photos} alt={altInfo} className={css.img} onClick={click} />
      </div>
    </>
  );
}
