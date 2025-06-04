import React from 'react';

const Home = () => {
    return (
        <section className="home">
            <div className="home-content">
                <h1>Welcome to My Portfolio!</h1>
                <h2>I'm Esmé O'Brien</h2>
                <p> An aspiring junior developer passionate about building beautiful, responsive, and accessible web experiences. 
                    Explore my projects, learn more about me, or get in touch!
                </p>

                <h3>Music I love</h3>
                <iframe
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/playlist/2zyiHlotJdQAtf22M3hbsd?utm_source=generator"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Spotify Playlist: Music I Love"
                ></iframe>
            </div>
        </section>
    );
};

export default Home;