import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { BasketContext } from '../../context/basketContext'
import './index.scss'


export default function Book({
  bookData,
  link
}) {
  const [counter, setCounter] = useState(0)
  const { basket, setBasket } = useContext(BasketContext)

  useEffect(() => {
    let currBook = basket.filter(book => book.id === bookData.id)[0]
    if (currBook) setCounter(currBook.userQuantity !== undefined ? currBook.userQuantity : 0)
  }, [basket, bookData.id])

  function toBasket(event, type) {
    setCounter(prev => type === "+" ? ++prev : --prev)
    setBasket(content => {
      let currBook = content.filter(book => book.id === bookData.id)[0]
      if (currBook) {
        content = content.map(book => {
          if (book.id === bookData.id) {
            book.userQuantity = type === "+" ? counter + 1 : counter - 1
          }
          return book
        })

        return content.filter(book => book.userQuantity > 0)
      } else {
        currBook = {
          ...bookData,
          userQuantity: type === "+" ? counter + 1 : counter - 1
        }
        return [
          ...content,
          currBook
        ]
      }

    })

    event.stopPropagation()
    event.preventDefault()
  }

  const jsx = <section className="book">
    <div className="book__description">
      <h3 className="book__title">{ bookData.title }</h3>
      <div className="book__info">
        <span className="book__author">{ bookData.author }</span>
        <span className="book__genres">{ bookData.genres.join(", ") }</span>
        <span className="book__rating">{ bookData.rating } / 5</span>
      </div>
      <span className="book__price">{bookData.price} ₽</span>
    </div>
    <div className="book__quantity-tools">
      <button
        className="quantity-tools__minus quantity-tools__btn"
        disabled={counter <= 0}
        onClick={e => toBasket(e, "-")}
      >-</button>
      <span className="quantity-tools__counter">{counter}</span>
      <button
        className="quantity-tools__plus quantity-tools__btn"
        disabled={counter >= bookData.quantity}
        onClick={e => toBasket(e, "+")}
      >+</button>
    </div>
  </section>

  return link ? <Link to={link}>{jsx}</Link> : jsx
}