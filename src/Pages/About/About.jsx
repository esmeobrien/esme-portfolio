import React from 'react';
import './About.css'; 
import { Helmet } from 'react-helmet'; 


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

      
    </>
  );
};

export default About;
