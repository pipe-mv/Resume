import ProfileImage from "../assets/ProfileImage-edited.jpg";
import { saveAs } from "file-saver";
import Resume from "../assets/Felipe_Marin_Resume.pdf";

// https://drive.google.com/drive/folders/15uD7OE3hE_wV2KG70AXis5R7DpMZ6eUN?usp=sharing
const About = () => {
  const downloadFile = () => {
    let fileName = "Felipe_Marin_Resume.pdf";
    saveAs(Resume, fileName);
  };

  return (
    <div>
      <section id="about" className="about section container full-lg-screen">
        <article className="text-lg-right">
          <aside className="text-center text-lg-right">
            <h1>Felipe Marin</h1>
            <h5>Lead Web Developer</h5>
          </aside>
          <p>
            I&apos;m a Lead Web Developer experienced in building and maintaining
            full-stack web and mobile applications using a broad range of
            technologies, including React, React Native, TypeScript, Firebase
            and Node.js. I enjoy transforming ideas into responsive, reliable
            and user-friendly digital products.
          </p>
          <p>
            I have a genuine passion for programming, demonstrated through
            years of committed self-study, personal projects and continuous
            learning. My initiative and curiosity drive me to expand my
            technical knowledge, explore new technologies and develop the skills
            required to build effective applications.
          </p>
          <p>
            At QuickSite Guru, I have contributed across frontend and backend
            development while supporting application architecture, code reviews,
            deployments and developer mentoring. I value maintainable code,
            effective collaboration and continuous improvement throughout the
            development lifecycle.
          </p>
          <p>
            My background in project management, accounting and data coordination
            gives me a strong understanding of how technology supports real
            business needs. I bring technical curiosity, attention to detail and
            a practical problem-solving mindset to every project.
          </p>
        </article>
        <article className="about-visual">
          <img
            className="gray-scale"
            src={ProfileImage}
            alt="Felipe Marin"
          />
          <button className="btn" onClick={downloadFile}>
            DOWNLOAD MY RESUME
          </button>
        </article>
      </section>
    </div>
  );
};

export default About;
