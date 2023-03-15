import Link from "next/link";
import Image from "next/image";

const Startups = () => {
  return (
    <section
      id="startups"
      data-nav-tooltip="startups"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Startups</h3>
        </div>
        <div className="full-screen align-items-center">
            <p className="desc">
                I provide advice for startups. I adviced for a couple of years at  
                <br/><br/> 
                  <Link href="https://www.unifai.us/">
                    <Image width="130" height="62" src="/static/img/unifai-logo.webp" title="Unifai logo" alt="Unifai logo" />
                  </Link>
                <br/><br/> 
                I am part of the Angel Squad at 
                <br/><br/> 
                    <Link href="https://www.hustlefund.vc/">
                        <Image width="251" height="54" src="/static/img/hustlefund-logo.webp" title="HustleFund logo" alt="HustleFund logo" />
                    </Link>
                <br/><br/>
                I am interested in talking to founders working on startups in the HR, Health Tech, Consumer and Generative AI space
            </p>
        </div>
      </div>
    </section>
  );
};
export default Startups;
