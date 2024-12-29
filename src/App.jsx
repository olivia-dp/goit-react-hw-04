import SearchBar from './components/SearchBar/SearchBar'
import { useState } from 'react';
import { fetchImages } from './services/api';
import Loader from './components/Loader/Loader';
import toast from 'react-hot-toast';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from "./components//ImageModal/ImageModal";




function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState (null);
  

  const getImagesData = async (newQuery, newPage = 1) => {
    try {
      setIsLoading(true);
      setIsError(false);

      const data = await fetchImages({ query: newQuery, page: newPage });
      
      setImages((prev) => (newPage === 1 ? data : [...prev, ...data]));
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeQuery = (newQuery) => {
    if (newQuery === query) {
      toast.error("Please enter a new search query!");
      return;
    }

    setQuery(newQuery);
    setPage(1);
    setImages([]);
    getImagesData(newQuery, 1); 
  };

  const handleChangePage = () => {
    if (!isLoading) {
      const nextPage = page + 1;
      setPage(nextPage);
      getImagesData(query, nextPage); 
    }
  };



const handleCardClick = (image) => {
    setSelectedImage(image);
  }

const closeModal = () => {
  setSelectedImage(null);
}

  return (
    <>
      <SearchBar onSubmit={handleChangeQuery} />
      {images.length > 0 && <ImageGallery images={images} handleCardClick={ handleCardClick} />}
      {images.length > 0 && !isLoading && <LoadMoreBtn handleChangePage={handleChangePage}/>}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {selectedImage && <ImageModal image={selectedImage}
      isOpen ={!!selectedImage}
    onRequestClose={closeModal}/>}
    </>
  );
}

export default App;
