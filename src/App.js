import React from 'react';
import './style.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MainContent from './Main/MainContent';
export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
