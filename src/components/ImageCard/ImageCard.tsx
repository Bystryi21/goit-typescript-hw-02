import css from "./ImageCard.module.css";

interface ImageCardInterface {
  photos: string;
  alt_description: string;
  click: () => void;
}

export default function ImageCard({
  photos,
  alt_description,
  click,
}: ImageCardInterface) {
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
