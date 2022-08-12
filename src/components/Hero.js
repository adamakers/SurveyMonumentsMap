import '../App.css';
import { Col, Row, Input, Button, Container } from 'reactstrap';

const Hero = () => {

  return (
    <section className='hero d-flex justify-content-center align-items-center'>
      <Container className="text-center">
        <Row>
          <Col sm={{size:8, offset:2}}>
            <h2>Find Your Points</h2>
            <p>
              A tool to find geodetic survey monuments.  You can filter points, export to a KML file or geoJSON.
              All data is pulled from the <a className='text-decoration-none text-warning' href='https://geodesy.noaa.gov/web_services/data-explorer.shtml'>NGS Data Explorer API.</a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='form-inp' sm={{size:8, offset:2}}>
            <Input type='text' placeholder='38.92229, -104.77797'/>
          </Col>
        </Row>

        <Button color='primary' className='mt-4'>Search For Points</Button>
      </Container>
    </section>
  )
}

export default Hero;