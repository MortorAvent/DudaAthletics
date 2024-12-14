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
          <Col xs={12} md={6} className="text-white text-center text-md-start">
          
            <div className="d-flex justify-content-center justify-content-md-start align-items-center">
              <p className="mb-0" style={{ fontSize: '16px', color: 'white', marginRight: '10px' }}>Autor aplikacji: </p>
              <p className="mb-0" style={{ fontSize: '16px', color: 'darkgoldenrod' }}>Szczepan Duda</p>
            </div>
            <div className="d-flex justify-content-center justify-content-md-start align-items-center">
              <p className="mb-0" style={{ fontSize: '16px', color: 'white', marginRight: '10px' }}>Email: </p>
              <p className="mb-0" style={{ fontSize: '16px', color: 'darkgoldenrod' }}>szczepan.duda@microsoft.wsei.edu.pl</p>
            </div>
            <div className="d-flex justify-content-center justify-content-md-start align-items-center">
              <p className="mb-0" style={{ fontSize: '16px', color: 'white', marginRight: '10px' }}>Numer Indeksu: </p>
              <p className="mb-0" style={{ fontSize: '16px', color: 'darkgoldenrod' }}>14449</p>
            </div>

          </Col>
        </Row>
      </Container>
    </footer>
  );
}
 
export default Footer;
 