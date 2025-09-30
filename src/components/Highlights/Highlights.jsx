import WeekSpecial from "../WeekSpecial/WeekSpecial"
import greekSalad from '../../assets/images/dishes/greek_salad.jpg'
import bruschetta from '../../assets/images/dishes/bruschetta.jpg'
import lemonDessert from '../../assets/images/dishes/lemon_dessert.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Highlights = () => {
  return (
    <>
      <Container fluid className="py-5 bg-body-primary">
        <Row className="mb-4">
          <Col xs={0} md={2}></Col>
          <Col md={6}>
            <h2>This weeks specials</h2>
          </Col>
          <Col md={2}>
            <Button className="yellow-button px-4">Online Menu</Button>
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
        <Row>
          <Col xs={0} md={2}></Col>
          <Col xs={12} md={8}>
            <Row>
              <Col md={4}>
                <WeekSpecial img={greekSalad} title={"Greek Salad"} description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."} />
              </Col>
              <Col md={4}>
                <WeekSpecial img={bruschetta} title={"Bruschetta"} description={"Our bruschetta is made from frilled bread that has been smeared with garlic and seasoned with salt and olive oil."} />
              </Col>
              <Col md={4}>
                <WeekSpecial img={lemonDessert} title={"Lemon Dessert"} description={"This comes straight from grandma’s recipe book, every last ingredient has been sourced ans is as authentic as can be imagined."} />
              </Col>
            </Row>
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
      </Container>
    </>
  )
}

export default Highlights