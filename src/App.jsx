import SearchBar from './components/SearchBar/SearchBar'
import { useEffect, useState } from 'react';
import { fetchImages } from './services/api';
import Loader from './components/Loader/Loader';
import toast from 'react-hot-toast';
import ImageGallery from './components/ImageGallery/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const getImagesData = async (newQuery, newPage = 1) => {
    try {
      setIsLoading(true);
      setIsError(false);

      const data = await fetchImages({ query: newQuery, page: newPage });
      console.log("Fetching images with:", { query: newQuery, page: newPage });
      setImages((prev) => (newPage === 1 ? data : [...prev, ...data]));
    } catch (error) {
      setIsError(true);
      console.error("Ошибка при получении данных:", error);
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
      toast.success(`Page changed to: ${nextPage}`);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleChangeQuery} />
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && !isLoading && (
        <button onClick={handleChangePage}>Load more</button>
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />} 
    </div>
  );
}

export default App;
