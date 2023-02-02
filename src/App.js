import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {
  return (
  <Container>
    <Row>
      <Col>
        <div>
          <p></p>
          <h1>Order Summary</h1>
        </div>
      </Col>

      <Col>
      
        <Form>
        <p></p>
            <h1>Shipping Information</h1>


            <p></p>
              <h4>Order Contact</h4>
            <Row>
            <Form.Group as={Col} controlId="formGridfullname">
            <Form.Label>Fullname</Form.Label>
            <Form.Control />
            </Form.Group>
            </Row>

            <Row>
          <Form.Group as={Col} controlId="formGridPhonenumber">
          <Form.Label>Phone number</Form.Label>
          <Form.Control />
          </Form.Group>
          </Row>

          <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
          
              <p></p>
              <h4>Shipping Address</h4>
              <Form.Select aria-label="Default select example">
              <option>Select Country</option>
              <option value="1"> United States</option>
              <option value="2">Philippines</option>
              <option value="3">Canada</option>
              <option value="4">United Kingdom</option>
              <option value="5">Singapore</option>
              <option value="6">Hongkong</option>
              <option value="7">Taiwan</option>
              <option value="8">Japan</option>
              <option value="9">United Arab Emirates</option>
              <option value="10">South Korea</option>
              <option value="11">Macau</option>
              <option value="12">China</option>
              <option value="13">Thailand</option>
              <option value="14">Malasia</option>
            </Form.Select>
            </Row>

            <Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
              </Row>

              <Row>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
           </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>  
      </Row>
    </Container>      
  );
}

export default GridComplexExample;