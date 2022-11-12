import React from 'react'
import classNames from 'classnames'

import "./index.scss"
import { Link } from 'react-router-dom'

export default function Sections({ catalogs, currentCatalogId }) {
  return <div className="sections">
    <ul className="sections__list">
      {Object.values(catalogs).map((catalog) =>
        <li className="sections__list-item" key={catalog.id}>
          <Link
            to={`/catalog/${catalog.id}`}
            className={classNames(
              "sections__btn", {
                "active": catalog.id === parseInt(currentCatalogId)
              }
            )}
          >{catalog.name}</Link>
        </li>
      )}
    </ul>
  </div>
}
