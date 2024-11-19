import { useLocation } from 'react-router-dom';
import { MainContent } from '../../constants/mainContent';
import { AuthenticatedRoutes } from '../../constants/Routes';
import SearchButton from '../UI/SearchButton';
import ButtonMain from '../UI/ButtonMain';
import '../../styles/global/Header.css';
import { useState } from 'react';

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

  return (
    <header className="Header">
      <div className="header-container">
        {/* Logo */}
        <a href={AuthenticatedRoutes.HOME} className="header-logo">
          <img src={MainContent.appLogo} alt="App Logo" className="appLogo" />
        </a>

        {/* Mobile menu toggle button */}
        <button
          className="menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Navigation */}
        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={`navItem${index}`} className="nav-item">
                <a
                  href={item.link}
                  className={`nav-link ${isActive(item.link)}`}
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
