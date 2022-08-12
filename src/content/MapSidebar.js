import { Button, FormGroup, Label, Row, Col } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik'; 
import { useState } from 'react';


const MapSidebar = () => {

  const handleSubmit = () => { 
    console.log('The form has been submitted');
  }


  return (
    <div className='sidebar-container text-light px-4'>
      <h3 className='text-center my-5'>Survey Points</h3>
      {/* Search bar and button */}

      <Formik
        initialValues={{
          latLng: '',
          cors: true,
          gps: true,
          classHorz: true,
          vertCont: true,
          approxHt: true
        }}
        onSubmit={handleSubmit} // handler to pull the data
        // validate={validateLatLng}
      >
        <Form>
          <Col md='12'>
            <FormGroup>
              <Field
                name="latLng"
                placeholder="Enter a lat and lon"
                className='form-control'
                />
            </FormGroup>

          </Col>
          <Row>
            <Col sm='6' xl='4'>
              <FormGroup check>
                <Label check>
                  <Field
                  type="checkbox"
                  name='cors'
                  className='form-check-input'
                  />
                  {' '}
                  CORS
                </Label>
              </FormGroup>
            </Col>
            <Col sm='6' xl='4'>
              <FormGroup check>
                <Label check>
                  <Field
                  type="checkbox"
                  name='gps'
                  className='form-check-input'
                  />
                  {' '}
                  GPS Site
                </Label>
              </FormGroup>
            </Col>
            <Col sm='6' xl='4'>
              <FormGroup check>
                <Label check>
                  <Field
                  type="checkbox"
                  name='classHorz'
                  className='form-check-input'
                  />
                  {' '}
                  Classic Horiz
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md='6' xl='4'>
              <FormGroup check>
                <Label check>
                  <Field
                  type="checkbox"
                  name='vertCont'
                  className='form-check-input'
                  />
                  {' '}
                  Vertical Control
                </Label>
              </FormGroup>
            </Col>
            <Col sm='6' xl='4'>
              <FormGroup check>
                <Label check>
                  <Field
                  type="checkbox"
                  name='approxHt'
                  className='form-check-input'
                  />
                  {' '}
                  Approx. Height
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Row className='text-center'>
            <Button type='submit' color='primary' className='mt-4'>Find Points</Button>
          </Row>
        </Form>
      </Formik>
      {/* Filter points */}
      {/* cards for all the returned points */}
      {/* Export Button */}
    </div>

  );
}

export default MapSidebar;