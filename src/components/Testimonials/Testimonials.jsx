import './Testimonials.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RatingTestimonial from "../RatingTestimonial/RatingTestimonial";
import picOscar from '../../assets/images/ratings/man.jpg';
import picMax from '../../assets/images/ratings/woman2.jpg';
import picCarlos from '../../assets/images/ratings/man2.jpg';
import picLexie from '../../assets/images/ratings/woman.jpg';

const Testimonials = () => {
  return (
    <Container fluid className='py-5' id='testimonials'>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <h3>Testimonials</h3>
        </Col>
        <Col md={2}></Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col lg={2} ></Col>
        <Col sm={5} md={5} lg={2} >
          <RatingTestimonial name={"Oscar"} rating={4} img={picOscar} comment={"Great desserts, but had to wait for table."} />
        </Col>
        <Col sm={5} md={5} lg={2} >
          <RatingTestimonial name={"Max"} rating={5} img={picMax} comment={"Loved the food!"} />
        </Col>
        <Col sm={5} md={5} lg={2} >
          <RatingTestimonial name={"Carlos"} rating={5} img={picCarlos} comment={"Great ambiance and tasty food."} />
        </Col>
        <Col sm={5} md={5} lg={2} >
          <RatingTestimonial name={"Lexie"} rating={4} img={picLexie} comment={"Good food, missing wine options."} />
        </Col>
        <Col lg={2} ></Col>
      </Row>
    </Container>
  )
}

export default Testimonials