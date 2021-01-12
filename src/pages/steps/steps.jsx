import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import pizza from "../../assests/recepies/download.jfif";

const CookingSteps = () => {
  return (
    <div id="about">
      <div className="about">
        {/* <h1 className="pt-3 text-left font-details pb-3">Cooking Steps</h1> */}
        
      </div>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            
              <Col xs={12} md={6}>

              <Row className="justify-content-left mb-2 mr-2 ">
                  <h1 className="pt-3 text-left font-details pb-3 u">Cooking Steps</h1>
              </Row>
                <Row className="justify-content-left mb-2 mr-2 ">
                    <Card style={{ width: '28rem' }}>
                    <Card.Img variant="top" src={pizza} style={{ width: '10rem'}}/>
                    <Card.Body>
                      <Card.Title>Step 1</Card.Title>
                      <Card.Text>
                        this is first step. it consits of multiple lines. make it even longer
                      </Card.Text>
                      <Button variant="primary">watch video</Button>
                    </Card.Body>
                  </Card>
                </Row>
              </Col>


              <Col xs={12} md={6}>
                <Row className="justify-content-left mb-2 mr-2 ">
                    <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={pizza} style={{ width: '10rem'}}/>
                    <Card.Body>
                      <Card.Title>Step 2</Card.Title>
                      <Card.Text>
                        finally
                      </Card.Text>
                      <Button variant="primary">watch video</Button>
                    </Card.Body>
                  </Card>
                </Row>
              </Col>

          </Row>
        </Container>
        

    </div>
  );
};

export default CookingSteps;