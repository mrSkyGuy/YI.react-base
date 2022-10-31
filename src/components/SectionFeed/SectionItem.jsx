import React, { useState } from 'react'

import './index.scss'


export default function SectionItem({ title, author, genres, rating, price, quantity }) {
  const [counter, setCounter] = useState(0)

  return <section className="section-feed__item">
    <div className="item__description">
      <h3 className="item__title">{ title }</h3>
      <div className="item__info">
        <span className="item__author">{ author }</span>
        <span className="item__genres">{ genres.join(", ") }</span>
        <span className="item__rating">{ rating } / 5</span>
      </div>
      <span className="item__price">{price} ₽</span>
    </div>
    <div className="item__quantity-tools">
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