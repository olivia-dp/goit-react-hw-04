import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css"

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.list}>
      {images.map(item => (
        <li key={item.id}>
              <ImageCard alt={item.alt_description} src={item.urls.small}
/>
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;