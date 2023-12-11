import {useEffect} from 'react';
import Section from '../components/Section';
import Ads from '../components/Ads';

const Contacts = () => {

    useEffect(() => {
      document.title = 'Contact | Bitress';

        return () => {
          document.title = 'Home | Bitress';
        };
    }, []);

    return ( <> <div className="container">
        <div className="row">
            <div className="col-3">
                <Section/>
            </div>

            <div className="col-6">
                <div className='mission_vision_card'>
                    <div className='card contact-card'>

                        <div
                            style={{
                            maxWidth: '400px',
                            margin: 'auto'
                        }}>
                            <h2
                                style={{
                                textAlign: 'center',
                                marginBottom: '20px'
                            }}>Contact Us</h2>

                            <form>
                                <label style={labelStyle} htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required style={inputStyle}/>

                                <label style={labelStyle} htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required style={inputStyle}/>

                                <label style={labelStyle} htmlFor="message">Message:</label>
                                <textarea id="message" name="message" value="" required style={inputStyle}></textarea>

                                <button style={buttonStyle} type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <Ads/>
            </div>
        </div>
    </div> </>
  );
};

const labelStyle = {
  display: 'block',
  margin: '10px 0',
  color: '#333',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginBottom: '15px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  backgroundColor: '#007BFF',
  color: '#fff',
  padding: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
};


export default Contacts;