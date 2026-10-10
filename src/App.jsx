
import "./App.css";

const skills = [
  { name: "Python", percent: 90 },
  { name: "Django", percent: 85 },
  { name: "React", percent: 85 },
  { name: "Vue.js", percent: 80 },
  { name: "Flutter", percent: 80 },
  { name: "SQL", percent: 85 },
  { name: "IoT", percent: 85 },
  { name: "Git / GitHub", percent: 80 },
];

const projects = [
  {
    number: "01",
    title: "DriveSafe-AI",
    description:
      "An AI road-safety system that detects driver fatigue, closed eyes, and distractions in real time.",
    technologies: "Python · Computer Vision · AI",
  },
  {
    number: "02",
    title: "E-Learning Platform",
    description:
      "An interactive web platform that gives users access to online educational resources.",
    technologies: "Django · PHP · SQL",
  },
  {
    number: "03",
    title: "Project Dashboard",
    description:
      "A modern dashboard for managing projects and displaying information from APIs.",
    technologies: "React · REST API",
  },
  {
    number: "04",
    title: "Event Management",
    description:
      "A responsive web application for organizing and managing events.",
    technologies: "Vue.js · Responsive Design",
  },
];

function Brand() {
  return (
    <a href="#home" className="brand-logo" aria-label="WM DEV home">
      <span className="brand-mark">WM</span>
      <span className="brand-dev">DEV</span>
    </a>
  );
}

function PythonLogo() {
  return (
    <svg viewBox="0 0 256 255" aria-label="Python logo" role="img">
      <path
        fill="#3776AB"
        d="M126.9 0C63.8 0 67.8 27.3 67.8 27.3v28.3h60.1v8.5H43.8S0 59.1 0 126.7s38.2 65.3 38.2 65.3h22.8v-30.4s-1.2-36.3 35.8-36.3h61.7s34.7.6 34.7-33.6V33.3S198.5 0 126.9 0Z"
      />
      <path
        fill="#FFD43B"
        d="M128.8 255c63.1 0 59.1-27.3 59.1-27.3v-28.3h-60.1v-8.5h84.2s43.8 5 43.8-62.6-38.2-65.3-38.2-65.3h-22.8v30.4s1.2 36.3-35.8 36.3H97.2s-34.7-.6-34.7 33.6v58.4S57.2 255 128.8 255Z"
      />
      <circle cx="92" cy="38" r="10" fill="white" />
      <circle cx="164" cy="217" r="10" fill="white" />
    </svg>
  );
}

function ReactLogo() {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" aria-label="React logo" role="img">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function IoTLogo() {
  return (
    <svg viewBox="0 0 64 64" aria-label="IoT icon" role="img">
      <circle cx="32" cy="48" r="5" fill="currentColor" />
      <path
        d="M20 36c6.6-6.6 17.4-6.6 24 0M13 28c10.5-10.5 27.5-10.5 38 0M6 20C20.4 5.6 43.6 5.6 58 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Skill({ name, percent }) {
  return (
    <div className="skill">
      <div className="skill-top">
        <span>{name}</span>
        <span>{percent}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function Project({ number, title, description, technologies }) {
  return (
    <article className="project">
      <div className="project-number">{number}</div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{technologies}</span>
      </div>
      <div className="project-arrow" aria-hidden="true">↗</div>
    </article>
  );
}

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <Brand />
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="talk-btn">Let's Talk ↗</a>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="availability">
              <span />
              Available for opportunities
            </div>

            <p className="small-title">HELLO, I'M</p>
            <h1>
              Wiam
              <br />
              <span>Charof</span>
            </h1>
            <h2>Web · Mobile · IoT Developer</h2>
            <p className="hero-text">
              I create modern digital experiences by combining web development,
              mobile technologies and intelligent IoT solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">View my projects ↗</a>
              <a href="#contact" className="secondary-btn">Contact me</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="circle circle-one" />
            <div className="circle circle-two" />
            <div className="circle circle-three" />

            <div className="photo">
              <img
                src="/wiam.jpg"
                alt="Wiam Charof"
                onError={(event) => {
                  event.currentTarget.style.visibility = "hidden";
                  console.error("Profile photo not found: /wiam.jpg");
                }}
              />
            </div>

            <div className="floating-card card-python">
              <div className="tech-icon python-icon"><PythonLogo /></div>
              <div><strong>Python</strong><span>90%</span></div>
            </div>

            <div className="floating-card card-react">
              <div className="tech-icon react-icon"><ReactLogo /></div>
              <div><strong>React</strong><span>85%</span></div>
            </div>

            <div className="floating-card card-iot">
              <div className="tech-icon iot-icon"><IoTLogo /></div>
              <div><strong>IoT</strong><span>85%</span></div>
            </div>
          </div>
        </section>

        <div className="marquee">
          <div>
            WEB DEVELOPMENT ✦ MOBILE DEVELOPMENT ✦ INTERNET OF THINGS ✦
            ARTIFICIAL INTELLIGENCE ✦ WEB DEVELOPMENT ✦ MOBILE DEVELOPMENT ✦
          </div>
        </div>

        <section id="about" className="section">
          <div className="section-number">01</div>
          <div className="section-title">
            <p>WHO I AM</p>
            <h2>About Me</h2>
          </div>
          <div className="about-content">
            <p className="big-text">
              I'm a passionate developer creating
              <span> useful, modern and intelligent solutions.</span>
            </p>
            <p>
              My interests include web development, mobile applications,
              artificial intelligence and Internet of Things technologies.
              I enjoy transforming ideas into functional digital products.
            </p>
            <p>
              I am continuously learning new technologies and improving my
              skills through practical and creative projects.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-number">02</div>
          <div className="section-title">
            <p>WHAT I DO</p>
            <h2>My Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => <Skill key={skill.name} {...skill} />)}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-number">03</div>
          <div className="section-title">
            <p>MY WORK</p>
            <h2>Selected Projects</h2>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <Project key={project.number} {...project} />
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-number">04</div>
          <div className="section-title">
            <p>MY JOURNEY</p>
            <h2>Experience &amp; Education</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span>2025</span>
              <div>
                <h3>Internship — Haut-Commissariat au Plan</h3>
                <p>Practical experience in software development and digital technologies.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span>2025 — 2027</span>
              <div>
                <h3>Master IoT &amp; Development</h3>
                <p>Studies focused on Internet of Things, software development and emerging technologies.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span>2022 — 2025</span>
              <div>
                <h3>Licence Software Development</h3>
                <p>University studies focused on software development and programming.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-number">05</div>
          <div className="section-title">
            <p>GET IN TOUCH</p>
            <h2>Let's Work Together</h2>
          </div>
          <div className="contact-content">
            <p>Have a project idea or an opportunity? Feel free to contact me.</p>
            <a href="mailto:inasscha1@gmail.com" className="contact-email">
              inasscha1@gmail.com
            </a>
            <a href="tel:+212668466507" className="phone">
              +212 668-466507
            </a>
          </div>
        </section>
      </main>

      <footer>
        <Brand />
        <p>Designed &amp; Developed by Wiam Charof © 2026</p>
      </footer>
    </div>
  );
}

export default App;