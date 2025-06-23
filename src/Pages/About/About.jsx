import React from 'react';
import './About.css';
import { Helmet } from 'react-helmet';

// Travel images
import germanyImg from '../../assets/images/germany.jpg';
import netherlandsImg from '../../assets/images/netherlands.jpg';
import czechImg from '../../assets/images/czech.jpg';
import greeceImg from '../../assets/images/greece.jpg';
import spainImg from '../../assets/images/spain.jpg';
import italyImg from '../../assets/images/italy.jpg';
import franceImg from '../../assets/images/france.jpg';

// Photography images
import photo1 from '../../assets/images/photo1.jpg';
import photo2 from '../../assets/images/photo2.jpg';
import photo3 from '../../assets/images/photo3.jpg';

// Cooking images
import meal1 from '../../assets/images/meal1.jpg';
import meal2 from '../../assets/images/meal2.jpg';
import meal3 from '../../assets/images/meal3.jpg';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Me - Esmé O'Brien Junior Javascript Developer</title>
        <meta
          name="description"
          content="Learn more about Esmé O'Brien, a Manchester-based Junior Developer with a passion for front-end development, UI design, and customer engagement."
        />
      </Helmet>

      <section className="about-section">
        <h1>About Me</h1>
      </section>

      <div className="main-content-flex">
        {/* LEFT COLUMN */}
        <div className="left-col">
          <div className="spotify-wrapper">
            <h2>Music I Love</h2>
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/2zyiHlotJdQAtf22M3hbsd?utm_source=generator&theme=1"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist"
            ></iframe>
          </div>

          <div className="cooking-section">
            <h2>What I’ve Cooked Recently</h2>
            <div className="cooking-grid">
              <div className="cooking-card">
                <img src={meal1} alt="Cripsy Asian Pork Belly" />
                <p>Crispy Asian pork belly</p>
              </div>
              <div className="cooking-card">
                <img src={meal2} alt="Chicken Shawarma" />
                <p>Chicken Shawarma</p>
              </div>
              <div className="cooking-card">
                <img src={meal3} alt="Aubergine Parmigiana" />
                <p>Aubergine Parmigiana</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-col">
          <div className="travel-section">
            <h2>Where I Have Travelled</h2>
            <p>I’ve been lucky to visit some beautiful places:</p>
            <div className="travel-grid">
              <div className="travel-card"><img src={germanyImg} alt="Germany" /><p>Germany</p></div>
              <div className="travel-card"><img src={netherlandsImg} alt="Netherlands" /><p>Netherlands</p></div>
              <div className="travel-card"><img src={czechImg} alt="Czech Republic" /><p>Czech Republic</p></div>
              <div className="travel-card"><img src={greeceImg} alt="Greece" /><p>Greece</p></div>
              <div className="travel-card"><img src={spainImg} alt="Spain" /><p>Spain</p></div>
              <div className="travel-card"><img src={italyImg} alt="Italy" /><p>Italy</p></div>
              <div className="travel-card"><img src={franceImg} alt="France" /><p>France</p></div>
            </div>
          </div>

          <div className="photography-section">
            <h2>My Photography</h2>
            <a
              href="https://www.instagram.com/lovely__views/"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-link"
            >
              Visit My Photography Instagram →
            </a>
            <div className="photo-gallery">
              <img src={photo1} alt="Film shot 1" />
              <img src={photo2} alt="Film shot 2" />
              <img src={photo3} alt="Film shot 3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;