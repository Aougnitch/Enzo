import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}

const options = {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 0.2, // percentage of the target element's visibility needed to trigger the animation
};

const observer = new IntersectionObserver(handleIntersection, options);
const elements = document.querySelectorAll('.float-up');

elements.forEach((element) => {
  observer.observe(element);
});


const FullViewportSection2 = () => {
  return (
    <Container fluid className="full-viewport-section">
      <Row className="h-100 fourthsec-col">
        <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center">
         
            <h2 className='description-title'>Our plans and goals</h2>
         
        </Col>
        <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center">
          
            <p className='about-para float-up'>
            Real world no bullshit Finance and Economics education. Analysis of crucial indicators and their implications on the financial markets. 
            Higher than expected CPI report coming from the US? In Escape with Enzo you will get to know exactly what this means and how it affects markets in the short term as well as the long term. 
            No university will teach you how to invest. Universities teach you how to get a 9-5 job and have just enough money to survive when you retire. I will guide you to making 'Fuck you' money. 
            Think about it, if you bought Solana at bear market lows in the previous business cycle, you would have a 256x. Do you really think there are no such opportunities with the upcoming recession? Of course there are. 
            By no means am I saying that it is 100% guaranteed if you invest into a promising asset that it will 256x, but even if it does a 10x you will have 10 times the amount of money you would if you did not invest. 
            This is not a 'get rich quick scheme', you will have to put in the hours to study and do your own research. Life is fair because it rewards those who put in the effort. 
            Join Escape with Enzo and gain life-changing knowledge on how to become financially free. You will have enough money to support yourselves and your loved ones for the rest of your life. 
            All you have to do is take that step forward and join the discord.
            </p>
          
        </Col>
      </Row>
      <Row className="h-100 fourthsec-col">
        <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center">
          

            <h2 className='description-title'>Beginnings</h2>
          

        </Col>
        <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center">
          
            <p className='about-para float-up'>

            I came from nothing… blah blah… NOT TRUE. I won’t sell you a story of how I was raised in poverty and had to struggle my whole life.
            I actually attended one of the best private schools in my country. I got admitted to one of the top universities in the UK. But guess what.
            I didn’t go. What people need to understand is, universities teach you how to be employees. 
            If you’re an employee, and I don’t care what type of employee you are, all the way from a garbage collector to a doctor, you CANNOT retire. 
            You are dependant on your wage. The only way to retire is through owning a business, or owning a PART of a business. In other words, investing. 
            This has been my life since I was 18. NON STOP learning on how to invest. That has been the key to me having a fucking mansion at 25. 
            Now all that I have learned and achieved, will all be transferred to YOU through the discord. 
            I will not let ANY member of the discord be left behind. 
            Don’t be a fool. Escape with Enzo.

            </p>
          
        </Col>
      </Row>
    </Container>
  );
};




           
 
export default FullViewportSection2;





