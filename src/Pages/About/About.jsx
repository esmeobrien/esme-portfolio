import React from 'react';

const About = () => {
  return (
    <>
      <section className="about-section">
        <h1>About Me</h1>
        <h2>Junior Developer & Team Leader</h2>
        <p>
          Hi! I'm Esmé O'Brien, a driven and customer-focused professional with a passion for technology and people.
          I bring a unique mix of retail leadership experience — currently a Supervisor at Sweaty Betty and technical skills
          gained through full-stack training at Northcoders.
        </p>
        <p>
          I love front-end development and UI design, especially creating intuitive web experiences using React and JavaScript.
          Alongside coding, I’m deeply interested in SEO, marketing, and how technology can enhance customer engagement.
        </p>
        <p>
          Outside of work and tech, I’m passionate about film photography, discovering new music, cooking, hiking, and traveling to new places.
          My journey has been fueled by curiosity, strong communication, and a commitment to continuous learning all qualities I bring to every project I work on.
        </p>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>HTML5 & CSS3</li>
          <li>Node.js & Express</li>
          <li>SQL & PostgreSQL</li>
          <li>Test-Driven Development (TDD)</li>
          <li>Git & GitHub</li>
          <li>Project Management</li>
          <li>SEO & Digital Marketing Awareness</li>
          <li>Strong Communication & Collaboration</li>
        </ul>
      </section>
    </>
  );
};

export default About;
