import React from 'react';
import './Home.css'; 

const Home = () => {
    return (
        <section className="home">
            <div className="home-content">
                <h2 className="chewy-heading">Welcome to My Portfolio!</h2>
                <h2>I'm Esmé O'Brien</h2>
                <p> An aspiring junior developer passionate about building beautiful, responsive, and accessible web experiences. 
                    Explore my projects, learn more about me, or get in touch!
                </p>

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

                <section className="connect-section">
                    <h2>Let’s Connect</h2>
                    <p>If you're interested in working together, have a question, or just want to say hi I’d love to hear from you!</p>
  
                <ul className="contact-links">
                    <li><a href="mailto:eobrien874@gmail.com">📧 eobrien874@gmail.com</a></li>
                    <li><a href="https://www.linkedin.com/in/esm%C3%A9-o-brien-068452172" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a></li>
                    <li><a href="https://github.com/esmeobrien" target="_blank" rel="noopener noreferrer">💻 GitHub</a></li>
                </ul>
        </section>
            </div>
        </section>
    );
};

export default Home;