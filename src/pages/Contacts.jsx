import React, { useEffect } from 'react';

const Contacts = () => {

    useEffect(() => {
        document.title = 'Contact | ISPSC Tagudin';
    
        return () => {
          document.title = 'Home | ISPSC Tagudin';
        };
      }, []); 

  return (
    <div>
      <h2>Contact Us</h2>
      <p>This is the Contacts page content.</p>
    </div>
  );
};

export default Contacts;