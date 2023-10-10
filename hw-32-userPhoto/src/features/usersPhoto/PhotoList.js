import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import style from './PhotoList.css';

export const PhotoList = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, [albumId]);

  return (
    <div>
      <h1>Фотографії альбому</h1>
      <Link to={`/user/${albumId}/albums`}>Повернутися до списку альбомів</Link>

      <ul className={style["photo-list"]}>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            {photo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

