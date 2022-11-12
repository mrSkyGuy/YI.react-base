import React from 'react'

import './index.scss'
import Book from '../Book'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadBooksIfNotExists } from '../../store/book/loadBooksIfNotExists'
import { selectCatalogsBookIds } from '../../store/catalog/selectors'

export default function SectionFeed({ catalogId }) {
  const dispatch = useDispatch()
  const bookIds = useSelector(state => selectCatalogsBookIds(state, catalogId))

  useEffect(() => {
    dispatch(loadBooksIfNotExists(catalogId))
  }, [dispatch, catalogId])

  return <ul className="section-feed">
    {
      bookIds ? bookIds.map(bookId => {
        return <Book
          key={bookId}
          bookId={bookId}
          link={"/book/" + bookId}
        />
      }) : "Загрузка..."
    }
  </ul>
}
