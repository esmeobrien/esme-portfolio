import React from 'react';
import './Home.css'; 
import myPhoto from '../../assets/images/me.jpg'; 

const Home = () => {
    return (
        <section className="home">
            <div className="home-content">
                <h2 className="chewy-heading">Welcome to My Portfolio!</h2>

                <h2>Esmé O'Brien - Junior Developer</h2>

                <div className="profile-photo-container">
                <img src={myPhoto} alt="Esmé O'Brien" className="profile-photo" />
            </div> 

                 
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

            

            
                <section className="connect-section">
                    <h2>Let’s Connect</h2>
                    <p>If you're interested in working together, have a question, or just want to say hi I’d love to hear from you!</p>
  
                <ul className="contact-links">
                    <li><a href="mailto:eobrien874@gmail.com">📧 eobrien874@gmail.com</a></li>
                    <li><a href="https://www.linkedin.com/in/esm%C3%A9-o-brien-068452172" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a></li>
                    <li><a href="https://github.com/esmeobrien" target="_blank" rel="noopener noreferrer">💻 GitHub</a></li>
                </ul>
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
            </div>
        </section>
    );
};

export default Home;