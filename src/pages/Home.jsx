import { useEffect } from 'react';
import './Home.css'

function Home() {

    useEffect(() => {
        document.title = 'Home | ISPSC Tagudin';
    
        return () => {
            document.title = 'Home | ISPSC Tagudin';
        };
      }, []); 
    
    
    return (
        <>
            <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="section">
            <div className="card">
              <h3>Announcements</h3>
              <ul id='announcements'>
                <li>December 01, 2023: 21st Birthday of the Developer</li>
              </ul>
            </div>

            <div className="card">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a target="_blank" href="https://www.ispsctagudin.info/student-portal/" rel="noreferrer">
                    <i className="far fa-browser"></i> Student Portal
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.ispsctagudin.info/library/" rel="noreferrer">
                    <i className="far fa-books"></i> eLibrary
                  </a>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3>School Calendar</h3>
              <div className="yt-embed">
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=UTC&showNav=1&showTitle=0&src=OWRmYmVmZDAwY2JhMTM3MTJjNGQ3NzA3ZDA4YjE0ZGU1MDU4ZTI3OTk5NjQ2YWIyOWY5OTg0MTc2OTdlODExNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4"
                  style={{ border: 'solid 1px #777' }}
                  width="800"
                  height="600"
                ></iframe>
              </div>
            </div>

      
          </div>
        </div>

        <div className="col-9">
            <div className=' mission_vision_card'>
              <h3>Mission</h3>
              <p>To improve the lives of people and communities through quality instruction, innovations, productivity, initiatives, environment and industry-feasible technologies, resource mobilization and transformational outreach programs and services.</p>
              <p className="translation-fil"><em>Filipino: Mapaunlad ang buhay ng tao at lipunan sa pamamagitan ng de-kalidad na pagtuturo, pagkamalikhain, panguguna sa pagiging produktibo, teknolohiyang pangkapaligiran at industria, tamang paggamit ng pinagkukunang yaman at mga program at serbisyong makapagbabago sa kabuhayan.</em></p>
              <p className="translation-il"><em>Iloco: Mapadur-as iti panagbiag dagiti tattao ken gimong babaen iti de-kalidad a panagisuro, panagpartuat, nabunga ken naballigi a gannuat, teknolohiya a mangsaluad iti aglawlaw ken iti industria, naikalintegan a panagusar dagiti pagbaknangan ken pannakaipaay iti programa ken serbisyo nga mangidanon iti panagbalbaliw.</em></p>
            </div>

            <div className=' mission_vision_card'>
              <h3>Vision</h3>
              <p>
              A vibrant and nurturing Polytechnic Service College for transforming lives and communities.
                            </p>
                            <p className="translation-fil">
                              <em>              
                                  Filipino: (Pangitain) Maningning at mapag-arugang politeknikong serbisyo-kolehiyo para sa pagpapaunlad ng buhay at lipunan.
                              </em>
                            </p>
                            <p className="translation-il">
                              <em>
                                Iloco: (Sirmata) Narimat ken managtaripato nga serbisyo-kolehiyo politekniko para ti pannakabalbaliw iti biag ken kagimongan.
                              </em>
                            </p>   </div>
        </div>
      </div>
    </div>

        </>
    )

}

export default Home;