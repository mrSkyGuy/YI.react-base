import React from 'react'

import './index.scss'
import Book from '../../components/Book'
import { useSelector } from 'react-redux'
import { selectBasket } from '../../store/basket/selectors'
import { selectBookById, selectBooks } from '../../store/book/selectors'


export default function Basket() {
  const basket = useSelector(state => selectBasket(state))
  const allBooks = useSelector(state => selectBooks(state))

  return <section className="basket container">
    {
      Object.keys(basket).length !== 0 ? <>
        <section className="basket__cheque">
          <h3 className="cheque__title">Ваш заказ:</h3>
          <ul className="cheque__products">
            {
              Object.keys(basket).map(bookId => <ChequeLine bookId={bookId} quantity={basket[bookId]} />)
            }
          </ul>
          <section className="cheque__total">
            <span className="total__sum">Итого: {
              Object.keys(basket).reduce(
                (prev, curr) => prev + allBooks[curr].price * basket[curr],
               0
              )
            } ₽</span>
            <button className="total__buy-btn">Купить</button>
          </section>
        </section>

        <ul className="basket__products">
          {
            Object.keys(basket).map(bookId => <Book
              key={bookId}
              bookId={bookId}
            />)
          }
        </ul>
      </> : <h3 className="basket__error">Корзина пуста</h3>
    }

  </section>
}


function ChequeLine({bookId, quantity}) {
  const book = useSelector(state => selectBookById(state, bookId))
  return <li className="products__item" key={book.id}>
    <span className="products__item-title">{book.title}</span>
    <span className="products__item-price">{book.price * quantity} ₽</span>
  </li>
}