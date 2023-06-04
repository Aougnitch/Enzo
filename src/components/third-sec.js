import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import screenrec from './assets/discordscreenrecord.MP4'
import screenshot from './assets/discordscreenshot.JPG'
import Phone from './assets/Phoneani_3.mp4'
import Typed from 'react-typed'

const About2 = () => {
    return (

<Container id='' fluid className="full-viewport-section">
      <Row className="align-items-center h-100">
    

        <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center about-assets-align">
        

              <video className='about-assets' autoPlay loop muted>


                <source src={Phone} type='video/mp4'/>
              </video>

              

             
              
            
            
            
        </Col>


        <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center">
        
        <p className='animated-typing about-para '>
          <Typed
          strings={[
            "Our team will guide you step by step to financial freedom through the discord but it is only YOU who can take that step and actually join and let me help you. I am not a “guru” and I’m not any of these bullshit advisors that you encounter everywhere online nowadays. I’ve actually made it and retired at 25. I NEVER have to work again in my life. This could be you. Don’t waste this opportunity. There’s a 3 day free trial so if you think I’m bluffing, feel free to check it out yourself. Congratulations if you take the step as it will probably be the best decision of your life. If not, then I guess you deserve staying broke, good luck with that."
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