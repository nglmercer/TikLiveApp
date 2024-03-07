import React, { useEffect, useState } from 'react';

const ImageGrid = () => {
  const [imagePaths, setImagePaths] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchImagePaths = async () => {
      try {
        const images = require.context('./img', false, /\.(png|webp|webm)$/);
        const paths = images.keys().map((imagePath) => {
          const filename = imagePath.split('/').pop().split('.')[0];
          return { path: images(imagePath).default, name: filename };
        });
        setImagePaths(paths);
      } catch (error) {
        console.error('Error fetching image paths:', error);
      }
    };

    fetchImagePaths();
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="image-grid">
      {imagePaths.map((image, index) => {
        if (!showAll && index >= 19) {
          return null; // Oculta los elementos adicionales si no se muestra todo
        }

        return (
          <div key={index} className="image-item">
            {image.path.endsWith('.webm') ? (
              <video src={image.path} className="video" controls />
            ) : (
              <>
                <img src={image.path} alt={`Image ${index + 1}`} className="image" />
                <div className="image-name">{image.name}</div>
              </>
            )}
          </div>
        );
      })}
      {imagePaths.length >= 19 && (
        <button className="show-more-button" onClick={toggleShowAll}>
          {showAll ? 'Mostrar menos' : 'Mostrar más'}
        </button>
      )}
    </div>
  );
};

export default ImageGrid;