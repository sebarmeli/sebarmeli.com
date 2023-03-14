import Link from "next/link";
import Image from "next/image";

const Speaking = () => {
  return (
    <section
      id="speaking"
      data-nav-tooltip="speaking"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Speaking</h3>
        </div>
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://conffab.com/video/from-mission-to-strategy-going-over-roadmap-and-okrs/">
                  <Image width="422" height="240" src="/static/img/sydney-talk.png" title="Sydney talk" alt="Sydney talk" />
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">11/30/2022 - Web Directions Code Leaders - Sydney </div>
                <h6>
                  <Link href="https://conffab.com/video/from-mission-to-strategy-going-over-roadmap-and-okrs/">
                      From Mission to Strategy: going over OKRs and Roadmap
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
              <Link href="https://www.youtube.com/watch?v=AkWHQ1-z9bU">
                  <Image width="458" height="240" src="/static/img/talk-stretch-con.png" title="Stretch conf talk" alt="Stretch conf talk" />
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">06/09/2016 - Better Software West - Las Vegas</div>
                <h6>
                  <Link href="https://speakerdeck.com/sebarmeli/managing-a-software-engineering-team">
                      Managing a Software Engineering Team
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
              <Link href="https://www.youtube.com/watch?v=SQ7xzpOjA6o">
                  <Image width="425" height="240" src="/static/img/jsconf-talk.png" title="JSConf talk" alt="JSConf talk" />
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">05/14/2015 - JSConf BD - Hungary</div>
                <h6>
                  <Link href="https://www.youtube.com/watch?v=SQ7xzpOjA6o">
                      Enforcing Coding Standards in a JS Project
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
              <Link href="https://vimeo.com/111677402">
                  <Image width="329" height="240" src="/static/img/es6-future-talk.png" title="ES6 talk" alt="ES6 talk" />
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">05/09/2014 - JsIst - Turkey</div>
                <h6>
                  <Link href="https://vimeo.com/111677402">
                      ES6: The future is now
                  </Link>
                </h6>
              </div>
            </div>
          </div>

          
          <div className="col-12 read-more-blog text-center">
            <Link href="https://speakerdeck.com/sebarmeli" className="px-btn px-btn-theme">
              Speakerdeck
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Speaking;
