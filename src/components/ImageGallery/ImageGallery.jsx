export default function ImageGallery({ photos, onImageClick }) {
  return (
    <ul>
      {photos.map((item) => {
        return (
          <li key={item.id} onClick={() => onImageClick(item.urls.regular)}>
            <div>
              <img src={item.urls.small} alt={item.alt_description} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
