import React, { useContext } from 'react'

import './index.scss'
import mock from '../../constants/mock'
import Sections from '../../components/Sections'
import SectionFeed from '../../components/SectionFeed'
import { CurrentSectionContext } from '../../context/currentSectionContext'

export default function Catalog() {
  const {currentSection} = useContext(CurrentSectionContext)

  return <section className="catalog container">
    <Sections sections={mock.map(section => section.title)} />
    <SectionFeed books={currentSection.books} />
  </section>
}
