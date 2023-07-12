import menu3 from "../assets/Background_08.mov";

const Home = () => {
  return (
    <section id="home" className="home hero-wrapper">
      <div className="hero-image hero">
        <aside className="hero-image-opacity hero-content">
          <video autoPlay muted loop>
            <source src={menu3} alt="Logo" type="video/mp4" />
          </video>
          <div className="hero-image-content">
            <h2
              className="hero-image-title"
              style={{ "--hero-text-color": "var(--white-color)" }}
            >
              Welcome
              <br />
              to my site
            </h2>
            <br />
            <a href="#contact" className="btn">
              CONTACT ME
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Home;
