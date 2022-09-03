import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import FirstPartHome from '../../Components/FirstPartHome/FirstPartHome';
import NewsHome from '../../Components/NewsHome/NewsHome';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
  return (
    <section className="page__home">
      <Header />
      <FirstPartHome />
      <NewsHome />
      {/* <Footer /> */}
    </section>
  );
}
