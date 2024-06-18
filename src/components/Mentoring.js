import Image from "next/image";
import Link from "next/link";

const Mentoring = () => {
  return (
    <section
      id="mentoring"
      data-nav-tooltip="Mentoring"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Mentoring</h3>
        </div>
        <div className="full-screen align-items-center">
            <p className="desc">
                  I believe mentorship is key for self-improvement. Everyone should ask for help to mentors or coaches. I share my experience and thoughts with mentees on different platforms:
            </p>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Link href="https://mentorcruise.com/mentor/sebastianoarmeli/">
                    <Image width="90" height="90" src="/static/img/mentor-cruise-header.webp" title="MentorCruise logo" alt="MentorCruise logo" />
                  </Link>
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h5>MentorCruise</h5>
                  <p>I offer mentoring sessions to engineers and engineering managers through the <a href="https://mentorcruise.com/mentor/sebastianoarmeli/" title= "Mentorcruise profile">Mentorcruise</a> platform.
                  I did over 30 mentoring calls with average rating 5 / 5.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Link href="https://www.platohq.com/mentors/Sebastiano-Armeli-7bda0">
                    <Image width="128" height="34" src="/static/img/plato-header.webp" title="PlatoHQ logo" alt="PlatoHQ logo" />
                  </Link>
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                 <h5>PlatoHQ</h5>
                  <p>I did over 50 mentoring calls with average rating 10 / 10 in the last few years and I am available for the PlatoHQ mentee network.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mentoring;
