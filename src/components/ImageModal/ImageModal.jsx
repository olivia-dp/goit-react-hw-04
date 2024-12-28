import Modal from 'react-modal';

const ImageModal = ({ image, isOpen, onRequestClose }) => {
    
    return (<Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >

        <button onClick={onRequestClose}>close</button>

        <img src={image.urls.regular}/>

        
      </Modal>)
}

export default ImageModal;