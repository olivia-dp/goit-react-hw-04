import Modal from 'react-modal';
import s from "./ImageModal.module.css"
import { TbPhotoFilled } from "react-icons/tb";
import { TbPhotoHeart } from "react-icons/tb";
import { TbPhotoPin } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";

const ImageModal = ({ image, isOpen, onRequestClose }) => {
    const BASE_URL ="https://www.instagram.com";
    const FULL_URL = `${BASE_URL}/${image.user.social.instagram_username}`;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Example Modal"
        ariaHideApp={false}
        className={s.ImageModal}
        overlayClassName={s.modalfieldwrap}
      >

        <div>
          <div className={s.infoContainer}>
            <p><TbPhotoFilled /> by {image.user.name} </p>
            <p><TbPhotoHeart /> {image.user.total_likes} likes</p>
            <p><TbPhotoPin /> {image.user.location}</p>
            <a href={FULL_URL} target="_blank" rel="noopener noreferrer" > <IoLogoInstagram /> Instagram</a>
            </div>
          <img src={image.urls.regular} className={s.image}/>
        </div>
      </Modal>
      )
}

export default ImageModal;