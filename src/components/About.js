import ProfileImage from "../assets/ProfileImage.png";
import { saveAs } from "file-saver";
import Resume from "../assets/Felipe_Marin_Resume-2.pdf";

// https://drive.google.com/drive/folders/15uD7OE3hE_wV2KG70AXis5R7DpMZ6eUN?usp=sharing
const About = () => {
  const downloadFile = () => {
    saveAs(Resume);
  };

  return (
    <div>
      <section id="about" className="about section container full-lg-screen">
        <article className="text-lg-right">
          <aside className="text-center text-lg-right">
            <h1>Felipe Marin</h1>
            <h5>Frontend Developer</h5>
          </aside>
          <p>
            Proactive, diligent and meticulous Junior React Developer with ample
            knowledge of React JS and the entire software practice involved in
            the production of applications through this library.
          </p>
          <p>
            I have a passion for programming which I have demonstrated through
            years of self-study with commitment, initiative and desire to learn
            the different languages required to code applications.
          </p>
          <p>
            Additionally, I have extensive and solid knowledge experience across
            a broad range of different software in a diverse range of industries
            such as: Retail, Foreign Exchange, Exporting, Outsourcing and
            Building companies. I possess proven ability to combine vision,
            decision-making and strong business acumen with well-developed
            project management and leadership qualities to support successful
            company operations.
          </p>
        </article>
        <article>
          <img
            className="gray-scale"
            src={ProfileImage}
            alt="profile-pipe_photo"
          />
        </article>
        <article className="btn-container">
          <button className="btn" onClick={downloadFile}>
            DOWNLOAD MY CV
          </button>
        </article>
      </section>
    </div>
  );
};

export default About;
