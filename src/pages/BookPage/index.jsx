import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './index.scss'
import Book from '../../components/Book'
import { useDispatch, useSelector } from 'react-redux'
import { selectBookById } from '../../store/book/selectors'
import { loadBookIfNotExists } from "../../store/book/loadBooksIfNotExists"

export default function BookPage() {
  const { bookId } = useParams()
  const dispatch = useDispatch()
  const book = useSelector(state => selectBookById(state, bookId))

  useEffect(() => {
    dispatch(loadBookIfNotExists(bookId))
  }, [dispatch, bookId])

  return <section className="book-page container">
    <Book
      key={bookId}
      bookId={bookId}
    />

    <section className="book-page__description">
      <h3 className="description__title">Аннотация</h3>
      <p className="description__text">
        {book && book.description}
      </p>
    </section>
    <ul className="book-page__feedbacks">
      {book && book.feedbacks.map((feedback, index) =>
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