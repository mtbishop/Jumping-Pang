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
                <p href="/">Formats</p>
                <p href="/">Compression</p>
                <p href="/">Pricing</p>
                <p href="/">FAQ</p>
                <p href="/">Status</p>
              </div>
            </Col>
            <Col>
              <div className="footerColumns">
                <h4>Resources</h4>
                <p href="/">Dev API</p>
                <p href="/">Tools</p>
                <p href="/">Blog</p>
              </div>
            </Col>
            <Col>
              <div className="footerColumns">
                <h4>Company</h4>
                <p href="/">About Us</p>
                <p href="/">Sustainability</p>
                <p href="/">Terms of Service</p>
                <p href="/">Privacy</p>
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
