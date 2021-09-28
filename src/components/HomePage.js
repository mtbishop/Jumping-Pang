import '../style/HomePage.css';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {
  return (
    <div>
      <Container>
        <div id="headerJumbo" className="jumbotron">
          <a id="aboutMeLink" href="/">
            About Us
          </a>
          <Row>
            <Col>
              <h1 className="homepageHeader">Jumping Pang</h1>
            </Col>
          </Row>
        </div>
        <Footer />
      </Container>
    </div>
  );
}

export default HomePage;
