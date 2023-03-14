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
                I provide advice for startups, Eg. at
                <Link href="https://www.unifai.us/">
                    <Image width="130" height="62" src="/static/img/unifai-logo.png" title="Unifai logo" alt="Unifai logo" />
                  </Link>
                <br/><br/> 
                I am part of the Angel Squad at 
                    <Link href="https://www.hustlefund.vc/">
                        <Image width="251" height="54" src="/static/img/hustlefund-logo.png" title="HustleFund logo" alt="HustleFund logo" />
                    </Link>
            </p>
        </div>
      </div>
    </section>
  );
};
export default Startups;
