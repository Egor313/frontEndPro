import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './AlbumList.css';


export const AlbumList = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, [userId]);

  return (
    <div>
      <h1>Список альбомів користувача</h1>
      <Link to="/">Повернутися до списку користувачів</Link>
      <ul className="album-list">
        {albums.map((album) => (
          <li key={album.id}>
            {album.title}
            <Link to={`/album/${album.id}/photos`}>Фотографії</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
