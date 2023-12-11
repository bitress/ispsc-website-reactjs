import {useEffect} from 'react';
import './Home.css'
import Section from '../components/Section';
import Ads from '../components/Ads';
// import "bootstrap/dist/css/bootstrap.min.css"; import
// "bootstrap/dist/js/bootstrap.bundle.min";

function Home() {

    useEffect(() => {
        document.title = 'Home | Bitress';

        return () => {
            document.title = 'Home | Bitress';
        };
    }, []);

    return ( 
    <> 
    <div className='container'>
        <div className='row'>
            <div className='col-3'>
                <Section></Section>
            </div>
            <div className='col-6'>

                <div className="col-md-12 content-page">
                    <div className="col-md-12 blog-post">
                        <div className="post-title">
                            <a href="#">
                                <h2>I feel like an idiot</h2>
                            </a>
                        </div>
                        <div className="post-info">
                            <span>May 19, 2020, 7:32 am / In
                                <a href="#"> Personal</a>
                                <br/>
                                <i className="fa fa-comment"></i>

                            </span>
                        </div>
                        <p>
                            This is just my opinion.&nbsp;
                        </p>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione delectus consectetur nisi reiciendis sit inventore exercitationem corrupti saepe, quas est!
                        </p>
                        <a
                            href="#"
                            className="button button-style button-anim fa fa-long-arrow-right">
                            <span>Read More</span>
                        </a>
                    </div>
                </div>
                <div className="col-md-12 content-page">
                    <div className="col-md-12 blog-post">
                        <div className="post-title">
                            <a href="#">
                                <h2>In Denial Stage? </h2>
                            </a>
                        </div>
                        <div className="post-info">
                            <span>May 19, 2020, 7:32 am / In
                                <a href="#"> Personal</a>
                                <br/>
                                <i className="fa fa-comment"></i>

                            </span>
                        </div>
                        <p>
                        This is going to be weird.
                        </p>
                        <p>
                        I shouldn&apos;t be blogging this but I have to, I remembered that this is the only way I can express my feelings and thoughts...
                        </p>
                        <a
                            href="#"
                            className="button button-style button-anim fa fa-long-arrow-right">
                            <span>Read More</span>
                        </a>
                    </div>
                </div>



            </div>
            <div className="col-3">
                <Ads/>
            </div>
        </div>

    </div> 
    </>
    )

}

export default Home;