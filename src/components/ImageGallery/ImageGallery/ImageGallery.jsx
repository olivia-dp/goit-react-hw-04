import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css"
import { useState } from "react";
import ImageModal from "../../ImageModal/ImageModal";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState (null);

  const handleCardClick = (image) => {
    setSelectedImage(image);
  }

const closeModal = () => {
  setSelectedImage(null);
}
  return (
    <ul className={s.list}>
      {images.map(image => (
        <li key={image.id}>
              <ImageCard src={image.urls.small} alt={image.alt_description} onClick ={() => handleCardClick(image)}
/>
        </li>
      ))}
      {selectedImage && <ImageModal image={selectedImage}
      isOpen ={!!selectedImage}
    onRequestClose={closeModal}/>}
    </ul>
  );
};
export default ImageGallery;