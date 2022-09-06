import React from 'react';
import './Cart.css';
import Header from '../../Components/Header/Header';
import CartShop from '../../Components/CartShop/CartShop';
import Footer from '../../Components/Footer/Footer';

export default function Cart() {
  return (
    <div className="cart__page">
      <Header />
      <CartShop />
      <Footer />
    </div>
  );
}
