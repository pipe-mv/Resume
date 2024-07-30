import { useEffect, useRef, useState } from 'react'
import menu3 from '../assets/Background_08.mov'

const Home = () => {
  const videoRef = useRef(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  const handleUserInteraction = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video is playing')
          })
          .catch((error) => {
            console.log('Error attempting to play the video:', error)
          })
      }
    }
  }

  useEffect(() => {
    if (hasInteracted) {
      handleUserInteraction()
    }
  }, [hasInteracted])
  return (
    <section id="home" className="home hero-wrapper">
      <div className="hero-image hero" onClick={() => setHasInteracted(true)}>
        <aside className="hero-image-opacity hero-content">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onError={(e) => console.log('Error playing video:', e)}
          >
            <source src={menu3} alt="Logo" type="video/mp4" />
          </video>
          <div className="hero-image-content">
            <h2 className="hero-image-title" style={{ '--hero-text-color': 'var(--white-color)' }}>
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
        {/* {!hasInteracted && <button>Click to play video</button>} */}
      </div>
    </section>
  )
}

export default Home
