import React from 'react'

import './index.scss'
import SectionItem from './SectionItem'

export default function SectionFeed({ books }) {
  return <ul className="section-feed">
    {
      books.map(book => {
        return <SectionItem
          key={book.id}
          title={book.title}
          author={book.author}
          genres={book.genres}
          rating={book.rating}
          price={book.price}
          quantity={book.quantity}
        />
      })
    }
  </ul>
}
