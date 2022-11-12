import React from 'react'

import './index.scss'
import Sections from '../../components/Sections'
import SectionFeed from '../../components/SectionFeed'
import { useDispatch, useSelector } from 'react-redux'
import { selectCatalogs } from '../../store/catalog/selectors'
import { useEffect } from 'react'
import { loadCatalogsIfNotExists } from '../../store/catalog/loadCatalogsIfNotExists'
import { useParams } from 'react-router-dom'

export default function Catalog() {
  const { catalogId } = useParams()
  const dispatch = useDispatch()
  const catalogs = useSelector(state => selectCatalogs(state))
  const currentCatalogId = catalogId || catalogs[Object.keys(catalogs)[0]]?.id

  useEffect(() => {
    dispatch(loadCatalogsIfNotExists)
  }, [dispatch])

  return <section className="catalog container">
    {
      Object.keys(catalogs).length > 0 ? <>
        <Sections
          catalogs={ catalogs }
          currentCatalogId={ currentCatalogId }
        />
        <SectionFeed catalogId={currentCatalogId} />
      </> : <span>Загрузка...</span>
    }

  </section>
}
