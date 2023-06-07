import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div>
    <nav className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="web-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button className="ham-button" data-testid="hamburgerIconButton">
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="ModalContainer">
            <button
              className="CloseButton"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="NavLinksList">
              <li className="NavLinkItem">
                <Link className="NavLink" to="/" onClick={() => close()}>
                  <AiFillHome size="36" />
                  <p className="NavLinkContent">Home</p>
                </Link>
              </li>
              <li className="NavLinkItem">
                <Link className="NavLink" to="/about" onClick={() => close()}>
                  <BsInfoCircleFill size="32" />
                  <p className="NavLinkContent">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </nav>
    <hr />
  </div>
)

export default Header
