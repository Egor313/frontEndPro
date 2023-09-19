import React from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import './App.css';



export default function App() {
  return (
    <div className="app">
      <Header />
        <div className="content">
          <Sidebar className="sidebar" />
          <Main className="main" />
        </div>
    </div>
  )
}