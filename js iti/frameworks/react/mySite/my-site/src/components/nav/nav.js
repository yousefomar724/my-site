import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import './nav.css'

function Nav() {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  return (
    <header className='header' id='header'>
      <nav className='nav container'>
        <Link
          to='/'
          className='nav__logo'
          alt='...'
          onClick={() => setIsMenuVisible(false)}
        >
          <i className='bx bx-planet'></i> YO
        </Link>

        <div className='nav__btns'>
          <div
            className={isMenuVisible ? 'nav__menu show-menu' : 'nav__menu'}
            id='nav-menu'
          >
            <ul className='nav__list'>
              <li className='nav__item'>
                <Link
                  to='/'
                  className='nav__link'
                  onClick={() => setIsMenuVisible(false)}
                >
                  Home
                </Link>
              </li>
              <li className='nav__item'>
                <Link
                  to='/about'
                  className='nav__link'
                  onClick={() => setIsMenuVisible(false)}
                >
                  About
                </Link>
              </li>
              <li className='nav__item'>
                <Link
                  to='/projects'
                  className='nav__link'
                  onClick={() => setIsMenuVisible(false)}
                >
                  Projects
                </Link>
              </li>
              <li className='nav__item'>
                <Link
                  to='/contact'
                  className='nav__link'
                  onClick={() => setIsMenuVisible(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div
            className='nav__toggle'
            id='nav-toggle'
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          >
            <i className='bx bx-grid-alt'></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav
