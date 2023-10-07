import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserList } from './features/usersPhoto/UserList.js';
import { AlbumList } from './features/usersPhoto/AlbumList.js';
import { PhotoList } from './features/usersPhoto/PhotoList.js';

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:userId/albums" element={<AlbumList />} />
          <Route path="/album/:albumId/photos" element={<PhotoList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}