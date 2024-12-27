import s from "./ImageCard.module.css"

const ImageCard = ({ alt, src }) => {
    return (
        <div>
            <img src={src} alt={alt} className={s.image} />
        </div>
    )
}


export default ImageCard;