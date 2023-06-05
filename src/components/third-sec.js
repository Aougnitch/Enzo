import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Phone from './assets/Phoneani_3.mp4'
import Typed from 'react-typed'
import  { useEffect, useRef } from 'react';

const About2 = () => {

  
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

<Container id='' fluid className="full-viewport-section">
      <Row className="align-items-center h-100">
    

        <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center about-assets-align">
        
              
              <video  className='about-assets' autoPlay loop muted controls={false} playsInline>


                <source src={Phone} type='video/mp4'/>
              </video>

              

             
              
            
            
            
        </Col>


        <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center">
        
        <p  ref={textRef} className='animated-typing about-para text-float-up '>
          <Typed
          strings={[
            "Our team will guide you step by step to <highlight>financial freedom</highlight> through the discord but it is only <highlight>YOU</highlight> who can take that step and actually join and let me help you. I am not a “guru” and I’m not any of these bullshit advisors that you encounter everywhere online nowadays. <highlight>I’ve actually made it</highlight> and retired at 25. <highlight>I NEVER</highlight> have to work again in my life. This could be you. <highlight>Don’t waste this opportunity</highlight>. There’s a 3 day free trial so if you think I’m bluffing, feel free to check it out yourself. Congratulations if you take the step as it will probably be the best decision of your life. If not, then I guess you deserve staying broke, good luck with that."
          ]}
          typeSpeed={12}
          
          />
        </p>
          
        </Col>



      </Row>
      </Container>

      );
};

export default About2;