import '../style/HomePage.css';
import jpLogo from '../style/img/jplogo.png';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {
  return (
    <div>
      <Container>
        <div id="headerJumbo" className="jumbotron">
          <Row>
            <Col>
              <h1 className="homepageHeader">Jumping Pang</h1>
              <img id="jpLogo" alt="logo" src={jpLogo} />
            </Col>
          </Row>
        </div>
        <Footer />
      </Container>
    </div>
  );
}

export default HomePage;
