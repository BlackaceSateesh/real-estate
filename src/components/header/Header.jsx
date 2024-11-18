import { Container, Nav, Navbar } from "react-bootstrap";
import { MainContent } from "../../constants/mainContent";
import { AuthenticatedRoutes } from "../../constants/Routes";
import { Link, useLocation } from "react-router-dom";
import SearchButton from "../UI/SearchButton";
import ButtonMain from "../UI/ButtonMain";
import '../../styles/global/Header.css'

const Header = () => {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  const navItems = [
    {
      name: "PROJECTS",
      link: AuthenticatedRoutes.HOME,
    },
    {
      name: "PRICING",
      link: '',
    },
    {
      name: "ABOUT",
      link: '',
    },
    {
      name: "CONTACT",
      link: '',
    },
  ];

  return (
    <Navbar expand="lg" className="Header">
      <Container className="section-left">
        <Navbar.Brand href={AuthenticatedRoutes.HOME}>
          <img
            src={MainContent.appLogo}
            alt="App Logo"
            className="appLogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item, index) => (
              <Nav.Link
                key={`navItem${index}`}
                as={Link}
                to={item.link}
                className={isActive(item.link)}
              >
                {item.name}
              </Nav.Link>
            ))}
            <Nav.Item>
              <SearchButton />
            </Nav.Item>
            <Nav.Item>
              <ButtonMain name={'Login Now'} />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
