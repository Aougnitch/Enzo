import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typed from 'react-typed'
import { useEffect, useRef } from 'react';




const About = () => {

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
    <Container id='about' fluid className="full-viewport-section">
      <Row className="align-items-center h-100">
        <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center ">
        
            <h2 className='about-header text-3D'> About <highlight>Enzo</highlight></h2>
          
        </Col>

        <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center">
        
       
        <p ref={textRef} className='animated-typing about-para text-float-up text-3D' >
          <Typed
          strings={[

              
             "In Escape with Enzo, the number one priority of the team is to ensure the <highlight>(huge)</highlight> financial success of its members. As a retired 25 year old, I have this <highlight>strong opinion</highlight> that working a 9-5 for your whole life is the <highlight>worst</highlight> thing you can do for yourself. So despite my ability to never work again, I really want to share the knowledge I have amassed so that I can help others do the same thing and thus create the most <highlight>powerful network of multi millionaires</highlight>. You may think… Yeah, but there’s no way I can be a multimillionaire. <highlight>I PROMISE YOU</highlight> that you can. <highlight>HOWEVER</highlight>, I can’t help you if you don’t want to be helped.",
             "<highlight>Trust us</highlight>",

            ]}

          typeSpeed={12}
          backSpeed={6}
          onTypingPaused={10000}
          backDelay={10000}
          loop
          
          
          />
        </p>



        
              
            
        </Col>



      </Row>
    </Container>


    
  );
};

export default About;