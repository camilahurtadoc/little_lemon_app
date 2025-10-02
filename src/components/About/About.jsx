import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic1 from '../../assets/images/MarioAdrian/MarioAdrian_A.jpg'
import pic2 from '../../assets/images/MarioAdrian/MarioAdrian_B.jpg'

const About = () => {
  return (
    <Container fluid className='py-5' id='about'>
      <Row>
        <Col xs={0} md={2}></Col>
        <Col md={4} className='mb-2'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p>
          <p>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the mediterranean region.</p>
        </Col>
        <Col md={4} id='img-col'>
        <div id='img-box'>
          <img src={pic2} className='img2 object-fit-cover'/>
          <img src={pic1} className='img1 object-fit-cover'/>
        </div>
        </Col>
        <Col xs={0} md={2}></Col>
      </Row>
    </Container>
  )
}

export default About