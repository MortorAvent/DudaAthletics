import { Navbar, Nav, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
 
function NavBarMenu({ items }) {
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark">
      <Container>
        <img src="../../base_icon_transparent_background.png" width="75"></img>
        <Navbar.Brand href="/">DUDA ATHLETICS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {items.map(item => (
              <Nav.Link key={item.id} href={item.link}>
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
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
};
 
export default NavBarMenu;
 
 