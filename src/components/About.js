import Image from "next/image";
import { faPinterest, faSpotify, faSnapchat, faPaypal } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="title">
          <h3>About me.</h3>
        </div>
        <div className="row full-screen align-items-center">
            <div className="col-lg-6">
              <div className="hb-img">
                <Image width="400" height="392" src="/static/img/about-me.jpg" title="Seb's talk" alt="Seb's talk" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="type-box">
                <p className="desc">
                  I am engineering manager &amp; leader who has led teams in domains ranging from shopping and crypto to messaging, video creation, and ads at companies like Pinterest <FontAwesomeIcon icon={faPinterest} />, Paypal <FontAwesomeIcon icon={faPaypal} />, Snap <FontAwesomeIcon icon={faSnapchat} />, and Spotify <FontAwesomeIcon icon={faSpotify} />..
                  <br/><br/>
                  Throughout my career, I havedemonstrated a solid ability to manage large teams, prioritize initiatives, and drive technical excellence.
                  <br/><br/>
                  I enjoy mentoring engineering managers and engineers whether they are looking to develop their leadership skills, transition to management, or navigate complexities.
                  <br/><br/>
                  I enjoy writing and speaking about engineering management and leadership.
                  <br/><br/>
                  I like talking to startups about new ideas and possibly advise and/or invest in them.
                  <br/><br/>
                  I am very passionate about wellness and I am a big believer of using food as a medicine. With this mission in mind,I serve as a member of the Board of Directors of the Co-opportunity Market in Santa Monica,CA.
                  <br/><br/>
                </p>
              </div>
            </div>            
          </div>

        {/* <div className="row">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="about-text">
                <p>
                  I have led teams in domains ranging from shopping and crypto to messaging, video creation, and ads.
                  Throughout my career, I have demonstrated a solid ability to manage large teams, prioritize initiatives, and drive technical excellence. I have also been instrumental in developing and executing technical strategies, fostering a culture of innovation, and mentoring engineers and managers.

                   Whether you're looking to develop your leadership skills, transition to management, or navigate the complexities of the tech industry, I can help.
                </p>
              </div>
            </div>
            <div className="col-lg-6 m-15px-tb">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="static/img/about-me.jpg" title="Seb's pic" alt="Seb's pic" width="215" heigh="215"/>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        {/* </div>         */}
      </div>
    </section>
  );
};
export default About;
