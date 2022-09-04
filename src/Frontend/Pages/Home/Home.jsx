import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import FirstPartHome from '../../Components/FirstPartHome/FirstPartHome';
import NewsHome from '../../Components/NewsHome/NewsHome';
import ThreePartHome from '../../Components/ThreePartHome/ThreePartHome';
import CommentsHome from '../../Components/CommentsHome/CommentsHome';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
  return (
    <div className="page__home">
      <Header />
      <FirstPartHome />
      <NewsHome />
      <ThreePartHome />
      <CommentsHome />
      {/* <Footer /> */}
    </div>
  );
}
