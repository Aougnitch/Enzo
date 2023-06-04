import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Typed from 'react-typed'
import FloatingText from './floatingtext';



const About = () => {
  return (
    <Container id='container' fluid className="full-viewport-section">
      <Row className="align-items-center h-100">
        <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center ">
        
            <h2 className='about-header'> About Enzo</h2>
          
        </Col>

        <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center">
        
       
        <FloatingText/>
        

      

              
            
        </Col>



      </Row>
    </Container>


    
  );
};

export default About;