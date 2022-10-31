import React, { useContext } from 'react'
import classNames from 'classnames'

import "./index.scss"
import { CurrentSectionContext } from '../../context/currentSectionContext'
import mock from '../../constants/mock'

export default function Sections({ sections }) {
  const {currentSection, setCurrentSection} = useContext(CurrentSectionContext)

  return <div className="sections">
    <ul className="sections__list">
      {sections.map((title, index) =>
        <li className="sections__list-item" key={index}>
          <button
            className={classNames(
              "sections__btn", {
                "active": title === currentSection.title
              }
            )}
            onClick={() => setCurrentSection( mock.filter(section => section.title === title)[0] )}
          >{title}</button>
        </li>
      )}
    </ul>
  </div>
}
