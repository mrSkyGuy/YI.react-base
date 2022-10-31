import React from 'react'

import basketIcon from '../../img/basket.svg'
import './index.scss'

export default function Header() {
	return <header className="header">
    <div className="container">
      <h3 className="header__title">Library</h3>
      <button className="header__basket-btn">
        <img src={basketIcon} alt="basket" className="basket-btn__icon" />
      </button>
    </div>
	</header>
}
