import '../style/FooterStyle.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div>
      <Container>
        <Row>
          <nav id="homepageFooter" className="navbar fixed-bottom">
            <Col>
              <div className="footerColumns">
                <h4>Info</h4>
                <p>Formats</p>
                <p>Compression</p>
                <p>Pricing</p>
                <p>FAQ</p>
                <p>Status</p>
              </div>
            </Col>
            <Col>
              <div className="footerColumns">
                <h4>Resources</h4>
                <p>Dev API</p>
                <p>Tools</p>
                <p>Blog</p>
              </div>
            </Col>
            <Col>
              <div className="footerColumns">
                <h4>Company</h4>
                <p>About Us</p>
                <p>Sustainability</p>
                <p>Terms of Service</p>
                <p>Privacy</p>
              </div>
            </Col>
            <Col>
              <div className="footerColumns">
                <h4>SUB SECTION BELOW VVV</h4>
              </div>
            </Col>
          </nav>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
