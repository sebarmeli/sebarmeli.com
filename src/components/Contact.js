import { useState } from "react";
const Contact = () => {
  return (
    <section
      id="contact"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Get in touch.</h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <p>
                If you need a mentor or an advisor, feel free to reach out.
              </p>
              <ul>
                <li className="media">
                  <i className="ti-email" />
                  <span className="media-body">hello@sebarmeli.com</span>
                </li>
              </ul>
            </div>
          </div>
         </div>
      </div>
    </section>
  );
};
export default Contact;
