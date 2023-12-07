import React, { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        document.title = 'About | ISPSC Tagudin';
    
        return () => {
          document.title = 'Home | ISPSC Tagudin';
        };
      }, []); 
  return (
    <div>
      <h2>About ISPSC</h2>
      <p>This is the About page content.</p>
    </div>
  )
}

export default About;
