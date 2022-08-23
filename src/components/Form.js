import { Col, Row } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Form = () => {
  return (
    <Formik
      initialValues={{
        
      }}
    >
      <Form>
        <FormGroup>
          <Label htmlFor='firstName'>
            First Name
          </Label>
          <Field
            name='firstName'
            placeHolder='John'
            className='form-control'
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='lastName'>
            Last Name
          </Label>
          <Field
            name='lastName'
            placeHolder='Doe'
            className='form-control'
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='email'>
            Email
          </Label>
          <Field
            name='email'
            placeHolder='JohnDoe@google.com'
            className='form-control'
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='email'>
            Email
          </Label>
          <Field
            name='email'
            placeHolder='JohnDoe@google.com'
            className='form-control'
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='email'>
            Email
          </Label>
          <Field
            name=''
            as='textarea'
            rows='12'
            placeHolder='JohnDoe@google.com'
            className='form-control'
          />
        </FormGroup>
      </Form>
    </Formik>
  );
}

export default Form;