import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import  { useEffect, useRef } from 'react';


const Beginnings = () => {


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
          
            <h2 className='description-title text-3D'>Beginnings</h2>
          
        </Col>
        <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center">
          
            <p ref={textRef} className='about-para text-float-up text-3D'>

            I came from nothing… blah blah… NOT TRUE. <highlight>I won’t sell you a story</highlight> of how I was raised in poverty and had to struggle my whole life.
            I actually attended one of the <highlight>best private schools</highlight> in my country. I got admitted to one of the <highlight>top universities</highlight> in the UK. But guess what.
            I didn’t go. What people need to understand is, universities teach you how to be <highlight>employees</highlight>. 
            If you’re an employee, and I don’t care what type of employee you are, all the way from a garbage collector to a doctor, you <highlight>CANNOT retire</highlight>. 
            You are <highlight>dependant</highlight> on your wage. The only way to retire is through <highlight>owning</highlight> a business, or owning a <highlight>PART</highlight> of a business. In other words, investing. 
            This has been my life since I was 18. <highlight>NON STOP learning</highlight> on how to invest. That has been the key to me having a fucking mansion at 25. 
            Now all that I have learned and achieved, will all be  <highlight>transferred to YOU</highlight> through the discord. 
            I will not let ANY member of the discord be left behind. <br />
            Don’t be a fool. <highlight>Escape with Enzo</highlight>.


            </p>
          
        </Col>
      </Row>
    </Container>
  );
};




           
 
export default Beginnings;





