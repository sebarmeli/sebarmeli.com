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
                <Link href="https://open.spotify.com/episode/6ewzfEu621Ou5dH8VHb4nT">
                  <Image width="300" height="300" src="/static/img/better_tech_leadership.webp" title="Better Tech Leadership Podcast" alt="Better Tech Leadership Podcast" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">04/15/2025 - Better Tech Leadership Podcast</span>
                <h5>
                  <Link href="https://open.spotify.com/episode/6ewzfEu621Ou5dH8VHb4nT">
                      Engineering Culture - The Balance Between Innovation and Execution
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://productsthatcount.com/upwork-director-of-engineering-on-navigating-remote-communication-challenges/">
                  <Image width="300" height="295" src="/static/img/products_that_count_photo.webp" title="Products That Count Podcast" alt="Products That Count Podcast" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">07/26/2024 - Products That Count Podcast</span>
                <h5>
                  <Link href="https://productsthatcount.com/upwork-director-of-engineering-on-navigating-remote-communication-challenges/">
                      Navigating Remote Communication Challenges
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://speakerdeck.com/sebarmeli/cultivate-excellence-in-engineering-teams-through-continuous-software-engineering">
                  <Image width="300" height="375" src="/static/img/img_SD_talk.webp" title="DevOpsCon SD talk" alt="DevOpsCon SD talk" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">05/21/2024 - DevOpsCon San Diego </span>
                <h5>
                  <Link href="https://speakerdeck.com/sebarmeli/cultivate-excellence-in-engineering-teams-through-continuous-software-engineering">
                      Cultivating Excellence in Engineering Teams through Continuous Software Engineering
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://speakerdeck.com/sebarmeli/from-strategy-definition-to-execution-with-okrs-and-roadmap">
                  <Image width="300" height="170" src="/static/img/devopscon-talk.webp" title="DevOpsCon NY talk" alt="DevOpsCon NY talk" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">09/26/2023 - DevOpsCon New York </span>
                <h5>
                  <Link href="https://speakerdeck.com/sebarmeli/from-strategy-definition-to-execution-with-okrs-and-roadmap">
                      From Strategy Definition to Execution with OKRs and Roadmap
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://conffab.com/video/from-mission-to-strategy-going-over-roadmap-and-okrs/">
                  <Image width="300" height="170" src="/static/img/sydney-talk.webp" title="Sydney talk" alt="Sydney talk" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">11/30/2022 - Web Directions Code Leaders - Sydney </span>
                <h5>
                  <Link href="https://conffab.com/video/from-mission-to-strategy-going-over-roadmap-and-okrs/">
                      From Mission to Strategy: going over OKRs and Roadmap
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
              <Link href="https://www.youtube.com/watch?v=AkWHQ1-z9bU">
                  <Image width="300" height="157" src="/static/img/talk-stretch-con.webp" title="Stretch conf talk" alt="Stretch conf talk" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">06/09/2016 - Better Software West - Las Vegas</span>
                <h5>
                  <Link href="https://speakerdeck.com/sebarmeli/managing-a-software-engineering-team">
                      Managing a Software Engineering Team
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
              <Link href="https://www.youtube.com/watch?v=SQ7xzpOjA6o">
                  <Image width="425" height="240" src="/static/img/jsconf-talk.webp" title="JSConf talk" alt="JSConf talk" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">05/14/2015 - JSConf BD - Hungary</span>
                <h5>
                  <Link href="https://www.youtube.com/watch?v=SQ7xzpOjA6o">
                      Enforcing Coding Standards in a JS Project
                  </Link>
                </h5>
              </div>
            </div>
          </div> */}
          {/* <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
              <Link href="https://vimeo.com/111677402">
                  <Image width="329" height="240" src="/static/img/es6-future-talk.webp" title="ES6 talk" alt="ES6 talk" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">05/09/2014 - JsIst - Turkey</span>
                <h5>
                  <Link href="https://vimeo.com/111677402">
                      ES6: The future is now
                  </Link>
                </h5>
              </div>
            </div>
          </div> */}

          
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
