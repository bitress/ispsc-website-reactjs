import React from "react";  


function HomeSection() {

    return (
        <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mission-and-vision">
              <div className="card">
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
                </p>
              </div>

              {/* ... other cards ... */}

              <div className="card">
                <h3>Philosophy</h3>
                <p>
                  <span className="blue">F</span>lourish ISPSC,  <br />
                  <span className="blue">D</span>eliver Quality Education and Services, and  <br />
                  <span className="blue">L</span>aunch Academic Excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

        </>
    )

}

export default HomeSection;