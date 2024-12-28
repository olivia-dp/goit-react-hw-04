import s from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({handleChangePage}) => {
    return (
        <button onClick={handleChangePage} className={s.loadBtn}>Load more</button>
    )
}

export default LoadMoreBtn;