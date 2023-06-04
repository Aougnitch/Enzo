import React, { useEffect, useRef } from 'react';
import Typed from 'react-typed'



const FloatingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      rootMargin: '0px',
      threshold: 0.7,
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
    <p  ref={textRef} className='animated-typing about-para text-float-up '>
          <Typed
          strings={[

            
             "In Escape with Enzo, the number one priority of the team is to ensure the (huge) financial success of its members. As a retired 25 year old, I have this strong opinion that working a 9-5 for your whole life is the worst thing you can do for yourself. So despite my ability to never work again, I really want to share the knowledge I have amassed so that I can help others do the same thing and thus create the most powerful network of multi millionaires. You may think… Yeah, but there’s no way I can be a multimillionaire. I PROMISE YOU that you can. HOWEVER, I can’t help you if you don’t want to be helped.",
             "Trust us",

            ]}

          typeSpeed={12}
          backSpeed={6}
          onTypingPaused={4000}
          backDelay={4000}
          loop
          
          
          />
        </p>
  );
};

export default FloatingText;
