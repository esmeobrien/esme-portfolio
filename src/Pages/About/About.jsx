import React from 'react';
import './About.css'; 
import { Helmet } from 'react-helmet'; 
import germanyImg from '../../assets/images/germany.jpg'; 
import netherlandsImg from '../../assets/images/netherlands.jpg'; 
import czechImg from '../../assets/images/czech.jpg'; 
import greeceImg from '../../assets/images/greece.jpg';
import spainImg from '../../assets/images/spain.jpg';
import italyImg from '../../assets/images/italy.jpg'; 
import franceImg from '../../assets/images/france.jpg';
// You may need to import the photo images if not already imported
import photo1 from '../../assets/images/photo1.jpg';
import photo2 from '../../assets/images/photo2.jpg';
import photo3 from '../../assets/images/photo3.jpg';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Me - Esmé O'Brien Junior Javascript Developer</title>
        <meta name="description" content="Learn more about Esmé O'Brien, a Manchester-based Junior Developer with a passion for front-end development, UI design, and customer engagement." />
      </Helmet>
      <section className="about-section">
        <h1>About Me</h1>
      </section>

      <div className="spotify-wrapper">
                <h3>Music I Love</h3>
                <iframe
                     style={{ borderRadius: '12px' }}
                     src="https://open.spotify.com/embed/playlist/2zyiHlotJdQAtf22M3hbsd?utm_source=generator&theme=1"
                    width="50%"
                    height="152"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Spotify Playlist: Music I Love"
                ></iframe>
            </div>

        <div className="travel-section">
  <h2>Where I Have Travelled</h2>
  <p>I have been fortunate to travel to many places, including:</p>
  <div className="travel-grid">
    <div className="travel-card">
      <img src={germanyImg}  alt="Germany" />
      <p>Germany</p>
    </div>
    <div className="travel-card">
      <img src={netherlandsImg} alt="Netherlands" />
      <p>Netherlands</p>
    </div>
    <div className="travel-card">
      <img src={czechImg} alt="Czech-Republic" />
      <p>Czech Republic</p>
    </div>
    <div className="travel-card">
      <img src={greeceImg} alt="Greece" />
      <p>Greece</p>
    </div>
    <div className="travel-card">
      <img src={spainImg} alt="Spain" />
      <p>Spain</p>
      </div>
    <div className="travel-card">
      <img src={italyImg} alt="Italy" />
      <p>Italy</p>
      </div>
    <div className="travel-card">
      <img src={franceImg} alt="France" />
      <p>France</p>

    </div>
    </div>
    
  </div>
      <div className="Passions-outside-of-coding">
        <h2>Passions Outside of Coding</h2>
        <p>
          Outside of coding, I have a passion for:
        </p>
        <ul>
          <li>Cooking</li>
          <li>Reading</li>
          <li>Traveling</li>
    {/* Instagram link and photo gallery */}
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
        </ul>
      </div>
    </>
  );
}


export default About;
