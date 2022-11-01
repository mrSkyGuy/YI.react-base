import React, { useContext } from 'react'

import './index.scss'
import { BasketContext } from '../../context/basketContext'
import Book from '../../components/Book'


export default function Basket() {
  const { basket } = useContext(BasketContext)

  return <section className="basket container">
    {
      basket.length !== 0 ? <>
        <section className="basket__cheque">
          <h3 className="cheque__title">Ваш заказ:</h3>
          <ul className="cheque__products">
            {
              basket.map(product =>
                <li className="products__item" key={product.id}>
                  <span className="products__item-title">{product.title}</span>
                  <span className="products__item-price">{product.price * product.userQuantity} ₽</span>
                </li>
              )
            }
          </ul>
          <section className="cheque__total">
            <span className="total__sum">Итого: {basket.reduce(
              (prev, curr) => prev + curr.price * curr.userQuantity,
              0
            )} ₽</span>
            <button className="total__buy-btn">Купить</button>
          </section>
        </section>

        <ul className="basket__products">
          {
            basket.map(product => <Book
              key={product.id}
              bookData={product}
            />)
          }
        </ul>
      </> : <h3 className="basket__error">Корзина пуста</h3>
    }

  </section>
}
