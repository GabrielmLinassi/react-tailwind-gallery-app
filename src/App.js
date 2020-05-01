import React, { useState, useEffect } from 'react';

import ImageCard from './components/ImageCard';
import SearchBar from './components/SearchBar';

import './styles/app.css';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`,
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        return res.json();
      })
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [term]);

  function ImagesDisplay() {
    return images.length ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map(({ id, webformatURL, user, views, likes, downloads, tags }) => (
          <ImageCard
            key={id}
            webformatURL={webformatURL}
            user={user}
            views={views}
            likes={likes}
            downloads={downloads}
            tags={tags}
          />
        ))}
      </div>
    ) : (
      <h1 className="text-center text-5xl mt-32">Any Image Found</h1>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <SearchBar searchTerm={(text) => setTerm(text)} />
      {isLoading ? <h1 className="text-center text-6xl mt-32">Loading...</h1> : <ImagesDisplay />}
    </div>
  );
}

export default App;
