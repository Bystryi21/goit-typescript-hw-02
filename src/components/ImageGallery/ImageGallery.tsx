import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { InterfaceImage } from "../../types";
import React, { FC } from "react";

interface InterfaceImageGallery {
  photos: InterfaceImage[];
  onImageClick: (imageUrl: InterfaceImage) => void;
}

export default function ImageGallery({
  photos,
  onImageClick,
}: InterfaceImageGallery) {
  return (
    <ul className={css.ul}>
      {photos.map((item: InterfaceImage) => {
        return (
          <li className={css.li} key={item.id}>
            <ImageCard
              photos={item.urls.small}
              alt_description={item.alt_description}
              // onClick={() => onImageClick(item.urls.regular)}
              click={() => onImageClick(item.urls.regular)}
            />
          </li>
        );
      })}
    </ul>
  );
}
