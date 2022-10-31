import React from 'react'

import './index.scss'
import Book from '../Book'
import { Link } from 'react-router-dom'

export default function SectionFeed({ books }) {
  return <ul className="section-feed">
    {
      books.map(book => {
        return <Link to={"/" + book.id}>
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            genres={book.genres}
            rating={book.rating}
            price={book.price}
            quantity={book.quantity}
          />
        </Link>
      })
    }
  </ul>
}
