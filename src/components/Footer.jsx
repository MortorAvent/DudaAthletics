import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="text-center text-md-start">
            <img
              src="../../base_logo_transparent_background.png"
              alt="DudaAthletics Logo"
              width="200"
              className="mb-2"
            />
          </Col>
          <Col xs={12} md={6} className="text-white text-center text-md-end">
            <p className="mb-0" style={{ fontSize: '20px' }}>Autor aplikacji: Szczepan Duda </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
 
export default Footer;
 