import React from 'react'
import { Link } from 'react-router-dom'

import basketIcon from '../../img/basket.svg'
import './index.scss'

export default function Header() {
	return <header className="header">
    <div className="container">
      <h3 className="header__title"><Link to="/">Library</Link></h3>
      <Link to="/basket">
        <img src={basketIcon} alt="basket" className="basket-btn__icon" />
      </Link>
    </div>
	</header>
}
