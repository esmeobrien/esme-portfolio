import React from 'react';


const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1>About Me</h1>
        <h2>Junior Developer</h2>
        <p>
          Hi! I'm Esmé O'Brien, a passionate and curious developer just continuing my journey in tech.
          I especially love front-end development, UI design, and creating intuitive web experiences.
          I currently use React, JavaScript, and continuously improve my skills through personal projects, I also have a strong interest in SEO and marketing.
        </p>

        <div className="social-links">
          <a href="github.com/esmeobrien" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="www.linkedin.com/in/esmé-o-brien-068452172" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default About;
