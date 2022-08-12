import { Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik'; 
import { useState } from 'react';


const MapSidebar = () => {
  return (
    <div className='sidebar-container text-light px-4'>
      <h3 className='text-center my-5'>Monument Points</h3>
      {/* Search bar and button */}

      <Formik
        initialValues={{
          latLng: '',
          cors: true,
          gps: true,
          classHorz: true,
          vertCont: true,
          approxHt: true,
          gpsVert: true,
          gpsApprox: true,
          classHorzVert: true,
          classHorzApprox: true
        }}
        // onSubmit={handleSubmit} // handler to pull the data
        // validate={validateLatLng}
      >
        <Form>
          <FormGroup>
            <Input
              id="latLngInp"
              name="latLng"
              placeholder="Enter a lat and lon"
              type="text"
              />
          </FormGroup>
          <Row>
            <Col sm='6' lg='4'>
              <FormGroup check>
                <Input type="checkbox" id='cors' />
                {' '}
                <Label htmlFor='cors' check>
                  CORS
                </Label>
              </FormGroup>
            </Col>
            <Col sm='6' lg='4'>
              <FormGroup check>
                <Input type="checkbox" id='gps'/>
                {' '}
                <Label htmlFor='gps' check>
                  GPS Site
                </Label>
              </FormGroup>
            </Col>
            <Col sm='6' lg='4'>
              <FormGroup check>
                <Input type="checkbox" id='classicHorz'/>
                {' '}
                <Label htmlFor='classicHorz' check>
                  Classic Horiz
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm='6' lg='4'>
              <FormGroup check>
                <Input type="checkbox" id='vertHorz'/>
                {' '}
                <Label htmlFor='vertHorz' check>
                  Vertical Control
                </Label>
              </FormGroup>
            </Col>
            <Col sm='6' lg='4'>
              <FormGroup check>
                <Input type="checkbox" id='approxHt'/>
                {' '}
                <Label htmlFor='approxHt' check>
                  Approx. Height
                </Label>
              </FormGroup>
            </Col>
          </Row>
          
          <Button>Find Points</Button>
        </Form>
        
      </Formik>
      {/* Filter points */}
      {/* cards for all the returned points */}
      {/* Export Button */}
    </div>

  );
}

export default MapSidebar;