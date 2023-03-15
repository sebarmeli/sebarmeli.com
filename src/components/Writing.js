import Link from "next/link";
import Image from "next/image";

const Writing = () => {
  return (
    <section
      id="writing"
      data-nav-tooltip="writing"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Writing</h3>
        </div>
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://medium.com/@sebarmeli/unlock-your-teams-full-potential-with-okrs-e07ddf23e726">
                  <Image width="304" height="150" src="/static/img/okr-blog.webp" title="OKR blog post" alt="OKR blog post" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">02/21/2023 - MEDIUM</span>
                <h5>
                  <Link href="https://medium.com/@sebarmeli/unlock-your-teams-full-potential-with-okrs-e07ddf23e726">
                     Unlock Your Team’s Full Potential with OKRs!
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://medium.com/@sebarmeli/strategizing-for-success-in-software-engineering-ce79c993529d">
                  <Image width="145" height="150" src="/static/img/strategy-blog.webp" title="Strategy blog post" alt="Strategy blog post" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">02/01/2023 - MEDIUM</span>
                <h5>
                  <Link href="https://medium.com/@sebarmeli/strategizing-for-success-in-software-engineering-ce79c993529d">
                    Strategizing for Success in Software Engineering
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://medium.com/@sebarmeli/create-focus-during-a-distracting-time-1e6b6e23ca3a">
                  <Image width="267" height="150" src="/static/img/vision-blog.webp" title="Vision blog post" alt="Vision blog post" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">01/30/2023 - MEDIUM</span>
                <h5>
                  <Link href="https://medium.com/@sebarmeli/create-focus-during-a-distracting-time-1e6b6e23ca3a">
                  Create focus during a distracting time
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://medium.com/@sebarmeli/the-importance-of-a-strong-team-mission-statement-b5d4217fc4db">
                  <Image width="189" height="150" src="/static/img/mission-blog.webp" title="Mission blog post" alt="Mission blog post" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">01/09/2023 - MEDIUM</span>
                <h5>
                  <Link href="https://medium.com/@sebarmeli/the-importance-of-a-strong-team-mission-statement-b5d4217fc4db">
                  The Importance of a Strong Team Mission Statement
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-12 read-more-blog text-center">
            <Link href="https://medium.com/@sebarmeli" className="px-btn px-btn-theme">
              Medium
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Writing;
