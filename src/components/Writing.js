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
                <Link href="https://sebarmeli.substack.com/p/the-macros-for-healthy-engineering-cfc">
                  <Image width="200" height="200" src="/static/img/macros2_post.webp" title="Macros - part 2" alt="Macros - part 2" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">4/02/2024 - SUBSTACK</span>
                <h5>
                  <Link href="https://sebarmeli.substack.com/p/the-macros-for-healthy-engineering-cfc">
                  The &quot;Macros&quot; for healthy engineering teams - part 2: Proteins
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://sebarmeli.substack.com/p/the-macros-for-healthy-engineering">
                  <Image width="200" height="200" src="/static/img/macros1_post.webp" title="Macros - part 2" alt="Macros - part 2" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">3/19/2024 - SUBSTACK</span>
                <h5>
                  <Link href="https://sebarmeli.substack.com/p/the-macros-for-healthy-engineering">
                  The &quot;Macros&quot; for healthy engineering teams - part 1: Carbs
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://sebarmeli.substack.com/p/tips-on-staying-active-as-a-busy">
                  <Image width="200" height="200" src="/static/img/active_post.webp" title="Staying active" alt="Staying active" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">3/05/2024 - SUBSTACK</span>
                <h5>
                  <Link href="https://sebarmeli.substack.com/p/tips-on-staying-active-as-a-busy">
                  Tips on Staying Active as a Busy Engineering Leader
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://sebarmeli.substack.com/p/cgm-meets-ai-my-personal-health-tech-8a0">
                  <Image width="200" height="200" src="/static/img/cgm_post.webp" title="CGM - part 2" alt="CGM - part 2" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">02/20/2024 - SUBSTACK</span>
                <h5>
                  <Link href="https://sebarmeli.substack.com/p/cgm-meets-ai-my-personal-health-tech-8a0">
                  CGM Meets AI: My Personal Health Tech Experiment - part 2
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://sebarmeli.substack.com/p/the-importance-of-mentoring-in-engineering">
                  <Image width="200" height="130" src="/static/img/mentoring2_post.webp" title="Mentoring - part 2" alt="Mentoring - part 2" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">1/22/2024 - SUBSTACK</span>
                <h5>
                  <Link href="https://sebarmeli.substack.com/p/the-importance-of-mentoring-in-engineering">
                  The importance of mentoring in engineering leadership — part 2
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://sebarmeli.substack.com/p/the-importance-of-mentoring-in-engineering-leadership-part-1-063736154a5f">
                  <Image width="200" height="130" src="/static/img/mentoring1_post.webp" title="Mentoring - part 1" alt="Mentoring - part 1" />
                </Link>
              </div>
              <div className="blog-info">
                <span className="meta">1/09/2024 - SUBSTACK</span>
                <h5>
                  <Link href="https://sebarmeli.substack.com/p/the-importance-of-mentoring-in-engineering-leadership-part-1-063736154a5f">
                  The importance of mentoring in engineering leadership — part 1
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          

          {/* <div className="col-md-6 m-15px-tb">
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href="https://medium.com/@sebarmeli/applying-socratic-wisdom-to-engineering-management-f134ab7ed747">
                    <Image width="304" height="150" src="/static/img/socrates-blog.webp" title="Socreates blog post" alt="Socreates blog post" />
                  </Link>
                </div>
                <div className="blog-info">
                  <span className="meta">11/08/2023 - MEDIUM</span>
                  <h5>
                    <Link href="https://medium.com/@sebarmeli/applying-socratic-wisdom-to-engineering-management-f134ab7ed747">
                    Applying Socratic Wisdom to Engineering Management
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 m-15px-tb">
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href="https://medium.com/better-programming/effective-staff-meetings-for-engineering-managers-of-managers-7cc8278d89ec">
                    <Image width="304" height="150" src="/static/img/staffmeetings-blog.webp" title="Staff meeting blog post" alt="Staff meeting blog post" />
                  </Link>
                </div>
                <div className="blog-info">
                  <span className="meta">08/07/2023 - MEDIUM</span>
                  <h5>
                    <Link href="https://medium.com/better-programming/effective-staff-meetings-for-engineering-managers-of-managers-7cc8278d89ec">
                    Effective Staff Meetings for Engineering Managers of Managers
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 m-15px-tb">
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href="https://medium.com/@sebarmeli/the-power-of-recognition-in-engineering-leaders-a-deep-dive-into-the-philosophy-and-practice-5b5f284413d9">
                    <Image width="304" height="150" src="/static/img/recognition-blog.webp" title="Recognition blog post" alt="Recognition blog post" />
                  </Link>
                </div>
                <div className="blog-info">
                  <span className="meta">07/10/2023 - MEDIUM</span>
                  <h5>
                    <Link href="https://medium.com/@sebarmeli/the-power-of-recognition-in-engineering-leaders-a-deep-dive-into-the-philosophy-and-practice-5b5f284413d9">
                    The Power of Recognition in Engineering Leaders: A Deep Dive into the Philosophy and Practice
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
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
            </div> */}
          {/* <div className="col-md-6 m-15px-tb">
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
          </div> */}
          {/* <div className="col-md-6 m-15px-tb">
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
          </div> */}
          {/* <div className="col-md-6 m-15px-tb">
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
          </div> */}
          <div className="col-12 read-more-blog text-center">
            <Link href="https://sebarmeli.substack.com/" className="px-btn px-btn-theme">
              The Healthy Engineering Leader - Substack
            </Link>
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
