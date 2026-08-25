import { useRef } from "react";
import backgroundVideo from "../assets/Background_08.mp4";

const Home = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay can still be disabled by a visitor's browser preference.
        });
      }
    }
  };

  return (
    <section id="home" className="home hero-wrapper">
      <div className="hero-image hero" onClick={playVideo}>
        <aside className="hero-image-opacity hero-content">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="hero-image-content">
            <h2 className="hero-image-title" style={{ "--hero-text-color": "var(--white-color)" }}>
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
