import '../App.css';
import { Col, Row, Input, Button, Container } from 'reactstrap';

const Hero = () => {
  return (
    <section className='py-5'>
      <Container className='py-5'>
        <Row className='hero py-5'>
          <Col
            className='text-center'
            xs={{
              size: 8,
              offset: 2
            }}
            >
            <h2>Find Your Points</h2>
            <p>
              A tool to find geodetic survey monuments.  You can filter points, export to a KML file or geoJSON.
              All data is pulled from the <a href='https://geodesy.noaa.gov/web_services/data-explorer.shtml'>NGS Data Explorer API.</a>
            </p>
            <Row class='coords-form'>
              <Col xs='10'>
                <Input
                  bsSize="lg"
                  className=''
                  placeholder='38.91538, -94.63930'
                  />
              </Col>
              <Col xs='2' className='d-flex '>
                <Button
                  className='align-items-center'
                  color='primary'
                  >
                  Submit
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero;