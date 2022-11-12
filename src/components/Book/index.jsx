import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { basketSlice } from '../../store/basket'
import { selectBasket } from '../../store/basket/selectors'
import { selectBookById } from '../../store/book/selectors'

import './index.scss'


export default function Book({ bookId, link }) {
  const dispatch = useDispatch()
  const book = useSelector(state => selectBookById(state, bookId))
  const basket = useSelector(state => selectBasket(state))
  console.log(book)
  function toBasket(event, type) {
    dispatch(
      type === "+" ?
        basketSlice.actions.addBook(bookId)
        : basketSlice.actions.removeBook(bookId)
    )

    event.stopPropagation()
    event.preventDefault()
  }

  if (!book) return <div>Загрузка...</div>;

  const jsx = <section className="book">
    <div className="book__description">
      <h3 className="book__title">{ book.title }</h3>
      <div className="book__info">
        <span className="book__author">{ book.author }</span>
        <span className="book__genres">{ book.genres.join(", ") }</span>
        <span className="book__rating">{ book.rating } / 5</span>
      </div>
      <span className="book__price">{book.price} ₽</span>
    </div>
    <div className="book__quantity-tools">
      <button
        className="quantity-tools__minus quantity-tools__btn"
        disabled={basket?.bookId <= 0}
        onClick={e => toBasket(e, "-")}
      >-</button>
      <span className="quantity-tools__counter">{basket[bookId] || 0}</span>
      <button
        className="quantity-tools__plus quantity-tools__btn"
        disabled={basket?.bookId >= book.quantity}
        onClick={e => toBasket(e, "+")}
      >+</button>
    </div>
  </section>

  return link ? <Link to={link}>{jsx}</Link> : jsx
}