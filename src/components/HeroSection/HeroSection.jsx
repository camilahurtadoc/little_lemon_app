import './HeroSection.css'
import HeroPic from '../../assets/images/restaurant/restauranfood_small.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const HeroSection = () => {
  return (
    <Container fluid className='py-5' id='hero-container'>
      <Row>
        <Col xs={0} md={2}></Col>
        <Col md={4} className='d-flex align-items-center justify-content-center mb-2'>
          <div>
            <div>
              <h2>Little Lemon</h2>
              <h3>Chicago</h3>
            </div>
            <p className='w-75 py-4'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button className='yellow-button' href="/reservations">Reserve a table</Button>
          </div>
        </Col>
        <Col md={4} className='d-flex justify-content-center'>
          <img className='object-fit-cover' src={HeroPic} alt='food on plate' />
        </Col>
        <Col xs={0} md={2}></Col>
      </Row>
    </Container>
  )
}

export default HeroSection