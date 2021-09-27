import '../style/HomePage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {
  return (
    <div>
      <Container>
        <div className="jumbotron">
          <a id="aboutMeLink" href="/">
            About Me
          </a>
          <Row>
            <Col>
              <h1 className="homepageHeader">testing</h1>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
