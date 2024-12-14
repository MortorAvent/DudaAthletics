import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function NavBarMenu({ items, isLoggedIn, onLogout }) {
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-dark bg-dark"
      style={{
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Dodanie szarego cienia
        zIndex: 1000, // Aby navbar zawsze znajdował się na wierzchu
      }}
    >
      <Container>
        <img
          src="../../base_icon_transparent_background.png"
          width="80"
          alt="Logo"
        />
        <Navbar.Brand
          style={{
            color: 'white',
            fontSize: '30px',
            textStroke: '1px black',
            WebkitTextStroke: '1px black',
            fontWeight: 'bold',
          }}
          href="/"
        >
          DUDA ATHLETICS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {items.map((item) => (
              <Nav.Link key={item.id} href={item.link}>
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
          {isLoggedIn && (
            <Button
              onClick={onLogout}
              style={{
                backgroundColor: 'darkgoldenrod',
                border: 'none',
                color: 'black',
                fontWeight: 'bold',
              }}
            >
              Wyloguj
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBarMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NavBarMenu;

 
 