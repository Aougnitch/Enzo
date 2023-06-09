import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import  { useEffect, useRef } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Plans = () => {


  const textRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      rootMargin: '0px',
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);


  return (
    <Container fluid className="full-viewport-section">
      <Row className="h-100 fourthsec-col">
        <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center">
         
            <h2 className='description-title text-3D'>Our plans and goals</h2>
         
        </Col>
        <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center">
          
           
<Accordion ref={textRef} className='Accordion-size text-float-up' defaultActiveKey="0"> 
      <Accordion.Item eventKey="0">
        <Accordion.Header className='Accordion-Head'>Goal 1</Accordion.Header>
        <Accordion.Body>
          
   <p className='about-para text-3D'>

              <highlight>Real world no bullshit</highlight> Finance and Economics education. Analysis of crucial indicators and their implications on the financial markets. 
              Higher than expected CPI report coming from the US? In Escape with Enzo <highlight>you will</highlight> get to know exactly <highlight>what this means</highlight> and how it affects markets in the short term as well as the long term. 
              <highlight>No university</highlight> will teach you how to invest. Universities teach you how to get a <highlight>9-5 job</highlight> and have just enough money to survive when you retire. I will guide you to making 'Fuck you' money. 
              Think about it, if you bought Solana at bear market lows in the previous business cycle, you would have a 256x. 

              </p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='Accordion-Head'>Goal 2</Accordion.Header>
        <Accordion.Body>

        <p className='about-para text-3D'>
         
              Do you really think there are no such opportunities with the <highlight>upcoming recession?</highlight> Of course there are. 
              By no means am I saying that it is 100% guaranteed if you invest into a promising asset that it will <highlight>256x</highlight>, but even if it does a 10x you will have 10 times the amount of money you would if you did not invest. 
              This is not a 'get rich quick scheme', you will have to put in the hours to study and do your own research. Life is fair because it rewards those who put in the effort. 
              <highlight>Join Escape with Enzo</highlight> and gain <highlight>life-changing</highlight> knowledge on how to become <highlight>financially free</highlight>. You will have enough money to support yourselves and your loved ones for the rest of your life. 
              All you have to do is take that step forward and <highlight>join the discord</highlight>.

              </p>


        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

            
          
        </Col>
      </Row>
      
    </Container>
  );
};




           
 
export default Plans;





