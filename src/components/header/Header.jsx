import { useLocation } from 'react-router-dom';
import { MainContent } from '../../constants/mainContent';
import { AuthenticatedRoutes } from '../../constants/Routes';
import SearchButton from '../UI/SearchButton';
import ButtonMain from '../UI/ButtonMain';
import '../../styles/global/Header.css';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  const navItems = [
    {
      name: 'PROJECTS',
      link: '#project',
    },
    {
      name: 'PRICING',
      link: '#plan',
    },
    {
      name: 'ABOUT',
      link: '#about',
    },
    {
      name: 'CONTACT',
      link: '#contact-us',
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="Header">
      <div className="header-container">
        <a href={AuthenticatedRoutes.HOME} className="header-logo">
          <img src={MainContent.appLogo} alt="App Logo" className="appLogo" />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          {/* Close button */}
          <button
            className="menu-toggle-close"
            onClick={toggleMobileMenu}
            aria-label="Close navigation"
          >
            <IoCloseSharp />
          </button>

          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={`navItem${index}`} className="nav-item">
                <a
                  href={item.link}
                  className={`nav-link ${isActive(item.link)}`}
                  onClick={closeMobileMenu} // Close menu on link click
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <SearchButton />
            </li>
            <li className="nav-item">
              <ButtonMain name={'Login Now'} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
