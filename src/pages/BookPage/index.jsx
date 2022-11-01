import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './index.scss'
import mock from '../../constants/mock'
import Book from '../../components/Book'

export default function BookPage() {
  const { id } = useParams()
  const [currBook, setCurrBook] = useState()

  useEffect(() => {
    for (let i = 0; i < mock.length; i++) {
      const section = mock[i]
      const book = section.books.filter(book => book.id === parseInt(id))
      if (book.length !== 0) {
        setCurrBook(book[0])
        break
      }
    }
  }, [id])

  return <section className="book-page container">
    {currBook && <Book
      key={currBook.id}
      bookData={currBook}
    />}

    <section className="book-page__description">
      <h3 className="description__title">Аннотация</h3>
      <p className="description__text">
        {currBook && currBook.description}
      </p>
    </section>

    <ul className="book-page__feedbacks">
      {currBook && currBook.feedbacks.map((feedback, index) =>
        <li className="feedbacks__item" key={index}>
          <div className="item__info">
            <h4 className="item__username">{feedback.username}</h4>
            <span>{feedback.rating} / 5</span>
          </div>
          <p className="item__text">{feedback.text}</p>
        </li>
      )}
    </ul>
  </section>
}