import React, { useState } from 'react'

import './index.scss'


export default function Book({ title, author, genres, rating, price, quantity }) {
  const [counter, setCounter] = useState(0)

  return <section className="book">
    <div className="book__description">
      <h3 className="book__title">{ title }</h3>
      <div className="book__info">
        <span className="book__author">{ author }</span>
        <span className="book__genres">{ genres.join(", ") }</span>
        <span className="book__rating">{ rating } / 5</span>
      </div>
      <span className="book__price">{price} ₽</span>
    </div>
    <div className="book__quantity-tools">
      <button
        className="quantity-tools__minus quantity-tools__btn"
        disabled={counter <= 0}
        onClick={() => setCounter(prev => --prev)}
      >-</button>
      <span className="quantity-tools__counter">{counter}</span>
      <button
        className="quantity-tools__plus quantity-tools__btn"
        disabled={counter >= quantity}
        onClick={() => setCounter(prev => ++prev)}
      >+</button>
    </div>
  </section>
}