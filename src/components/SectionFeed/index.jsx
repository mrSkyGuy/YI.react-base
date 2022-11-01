import React from 'react'

import './index.scss'
import Book from '../Book'

export default function SectionFeed({ books }) {
  return <ul className="section-feed">
    {
      books.map(book => {
        return <Book
          key={book.id}
          bookData={book}
          link={"/" + book.id}
        />
      })
    }
  </ul>
}
