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
                  <Link href="https://www.platohq.com/mentors/Sebastiano-Armeli-7bda0">
                    <Image width="128" height="34" src="/static/img/plato-header.webp" title="PlatoHQ logo" alt="PlatoHQ logo" />
                  </Link>
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                 <h5>PlatoHQ</h5>
                  I did over 50 mentoring calls with average rating 10.0 / 10 and I'm available for the PlatoHQ mentee network.
                </div>
              </div>
            </div>
          </div>
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
                  I offer focused and continuous mentoring sessions to anyone on MentorCruise.
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <Link href="https://fasttrack.firstround.com/for-mentors">
                  <Image width="92" height="92" src="/static/img/fast-track-header.png" title="FastTrack logo" alt="FastTrack logo" />
                </Link>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h5>Fast Track First Round</h5>
                  I joined the First Round Fast Track mentor network in 2023.
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
