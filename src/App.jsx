import heroImg from './assets/hero.png'
import { useState, useEffect, useRef, useCallback } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const observerRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, { threshold: 0.1 })

    observerRef.current.forEach(el => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const projects = [
    {
      title: 'Sarkari Seva Portal',
      desc: 'Government service platform with multi-tenant admin dashboard, citizen portal, and payment integration.',
      tech: ['Django', 'React', 'PostgreSQL', 'Redis'],
      link: '#'
    },
    {
      title: 'Labor Service Platform',
      desc: 'On-demand labor booking app with role-based dashboards for workers, clients, and admins.',
      tech: ['Django DRF', 'React Redux', 'JWT Auth', 'AWS S3'],
      link: '#'
    },
    {
      title: 'E-Commerce Backend',
      desc: 'Scalable e-commerce API with inventory management, order processing, and real-time notifications.',
      tech: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      link: '#'
    }
  ]

  const skills = [
    { name: 'Python', percent: 95 },
    { name: 'Django/DRF', percent: 90 },
    { name: 'React', percent: 85 },
    { name: 'PostgreSQL', percent: 88 },
    { name: 'Docker/AWS', percent: 80 }
  ]

  const testimonials = [
    {
      quote: "Outstanding full-stack developer who delivers clean, scalable code on time.",
      author: "HR Manager, Consistent Infosystem"
    },
    {
      quote: "Aman's ability to optimize complex Django backends saved us significant costs.",
      author: "Tech Lead, Ducat"
    }
  ]

  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top navbar-custom ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#home">Aman Sharma</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in-up">
          <img src={heroImg} alt="Aman Sharma" className="profile-img rounded-circle mx-auto d-block mb-4" />
          <div className="typewriter-text text-dark mb-3">Software Development Engineer  .</div>
          <h4 className="text-light mb-3">Python Full Stack | Django + React</h4>
          <p className="text-secondary text-warning mb-4 lead">Building scalable web applications with modern tech stack</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="#projects" className="btn btn-primary-custom btn-lg">View My Work</a>
            <a href="#contact" className="btn btn-outline-light btn-lg">Get In Touch</a>
          </div>
          <div className="mt-5">
            <p className="mb-1 fs-5">📧 amanjamdagni01@gmail.com</p>
            <p className="mb-1 fs-5">📞 +91 9518005156</p>
            <p className="fs-5">📍 Delhi, India</p>
          </div>
        </div>
      </section>

      <div className="mt-5"></div>

      {/* ABOUT */}
      <section id="about" className="container py-5">
        <div className="section-header">
          <h2 ref={el => observerRef.current[0] = el}>About Me</h2>
        </div>
        <div className="row align-items-center g-5">
          <div className="col-lg-6 observe" ref={el => observerRef.current[1] = el}>
            <img src={heroImg} alt="Aman" className="img-fluid rounded shadow" style={{maxHeight: '400px', width: '100%', objectFit: 'cover'}} />
          </div>
          <div className="col-lg-6 observe" ref={el => observerRef.current[2] = el}>
            <p className="lead text-secondary mb-4">
              Software Development Engineer (SDE-1) with 1+ years experience building scalable web applications 
              using Django, React, and PostgreSQL. Passionate about clean code, performance optimization, and modern architectures.
            </p>
            <div className="row text-start mb-4">
              <div className="col-md-6">
                <h6 className="text-info mb-2">🎯 Core Skills</h6>
                <ul className="text-secondary">
                  <li>REST APIs & Microservices</li>
                  <li>Redis Caching & Celery</li>
                  <li>JWT/RBAC Authentication</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h6 className="text-info mb-2">🚀 Tech I Love</h6>
                <ul className="text-secondary">
                  <li>Docker & AWS</li>
                  <li>PostgreSQL Optimization</li>
                  <li>React Performance</li>
                </ul>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary-custom">Let's Talk Projects</a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="container py-5">
        <div className="section-header">
          <h2 ref={el => observerRef.current[3] = el}>Technical Skills</h2>
        </div>
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={skill.name} className="col-lg-4 col-md-6 observe" ref={el => observerRef.current[4 + index] = el}>
              <div className="card-custom h-100 text-center p-4">
                <h5 className="text-light mb-3">{skill.name}</h5>
                <div className="skill-progress mx-auto mb-2" style={{width: '80%', maxWidth: '300px'}}>
                  <div 
                    className="skill-fill" 
                    style={{width: `${skill.percent}%`}}
                  ></div>
                </div>
                <div className="h4 text-info">{skill.percent}%</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="container py-5">
        <div className="section-header">
          <h2 ref={el => observerRef.current[9] = el}>Experience</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="timeline">
              <div className="card-custom mb-4 observe" ref={el => observerRef.current[10] = el}>
                <div className="card-body-custom">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div style={{background: 'var(--primary-gradient)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <i className="bi-building fs-4 text-white"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="card-title">Consistent Infosystem Pvt. Ltd.</h5>
                      <p className="text-info mb-2">SDE-1 | Jan 2025 – Present</p>
                      <ul className="mb-0">
                        <li>Developed REST APIs using Django & DRF with 99.9% uptime</li>
                        <li>Implemented JWT & RBAC authentication for 10k+ users</li>
                        <li>Reduced API response time 60% using Redis caching</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-custom observe" ref={el => observerRef.current[11] = el}>
                <div className="card-body-custom">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div style={{background: 'var(--secondary-gradient)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <i className="bi-mortarboard fs-4 text-white"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="card-title">Ducat Institute</h5>
                      <p className="text-info mb-2">Full Stack Developer | May 2024 – Dec 2024</p>
                      <ul className="mb-0">
                        <li>Built 5+ full-stack applications using Django + React stack</li>
                        <li>Created reusable components used across multiple projects</li>
                        <li>Mentored 20+ students on industry best practices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="container py-5">
        <div className="section-header">
          <h2 ref={el => observerRef.current[12] = el}>Featured Projects</h2>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={project.title} className="col-lg-4 col-md-6 observe" ref={el => observerRef.current[13 + index] = el}>
              <div className="card-custom h-100" data-bs-toggle="modal" data-bs-target={`#projectModal${index}`}>
                <div className="card-body-custom text-center">
                  <div className="project-icon mb-3" style={{height: '80px'}}>
                    <i className="bi-server fs-1 text-primary" style={{filter: 'drop-shadow(0 0 10px rgba(0,229,255,0.5))'}}></i>
                  </div>
                  <h5>{project.title}</h5>
                  <p className="text-secondary">{project.desc}</p>
                  <div className="mb-3">
                    {project.tech.map(tag => (
                      <span key={tag} className="badge me-1 mb-1">{tag}</span>
                    ))}
                  </div>
                  <a className="stretched-link"></a>
                </div>
              </div>

              {/* Project Modal */}
              <div className="modal fade" id={`projectModal${index}`} tabIndex="-1">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div className="modal-content bg-dark border-0">
                    <div className="modal-header border-0">
                      <h5 className="modal-title">{project.title}</h5>
                      <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body text-light">
                      <p>{project.desc}</p>
                      <div className="mb-3">
                        Tech: {project.tech.join(', ')}
                      </div>
                      <div className="d-flex gap-2">
                        <a href={project.link} className="btn btn-primary-custom">Live Demo</a>
                        <a href="#" className="btn btn-outline-light">GitHub</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="container py-5">
        <div className="section-header text-center">
          <h2 ref={el => observerRef.current[16] = el}>Education</h2>
        </div>
        <div className="row justify-content-center observe" ref={el => observerRef.current[17] = el}>
          <div className="col-lg-8">
            <div className="card-custom text-center p-5">
              <div className="display-4 mb-3" style={{color: 'var(--accent-gold)'}}>🎓</div>
              <h4>B.Tech Computer Science</h4>
              <p className="text-info mb-2">Kurukshetra University | 2020–2024</p>
              <p className="text-secondary lead">8.45 CGPA | Full Academic Scholarship</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-5">
        <div className="section-header text-center">
          <h2 ref={el => observerRef.current[18] = el}>What People Say</h2>
        </div>
        <div id="testimonialCarousel" className="carousel slide observe" ref={el => observerRef.current[19] = el} data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="text-center p-5">
                  <div className="card-custom mx-auto" style={{maxWidth: '600px'}}>
                    <div className="card-body text-center py-5">
                      <blockquote className="blockquote">
                        <p className="lead mb-0">"{testimonial.quote}"</p>
                      </blockquote>
                      <footer className="blockquote-footer mt-4">
                        {testimonial.author}
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container py-5">
        <div className="section-header text-center">
          <h2 ref={el => observerRef.current[20] = el}>Get In Touch</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 observe" ref={el => observerRef.current[21] = el}>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="text-center p-4 card-custom">
                  <div className="h2 mb-3">📧</div>
                  <h5>Email</h5>
                  <p className="text-secondary">amanjamdagni01@gmail.com</p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="text-center p-4 card-custom">
                  <div className="h2 mb-3">📱</div>
                  <h5>Phone</h5>
                  <p className="text-secondary">+91 9518005156</p>
                </div>
              </div>
            </div>
            <div className="card-custom mt-5 p-5">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control form-control-custom form-control-lg" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control form-control-custom form-control-lg" placeholder="Your Email" />
                  </div>
                </div>
                <div className="mb-4 mt-3">
                  <textarea className="form-control form-control-custom form-control-lg" rows="5" placeholder="Tell me about your project..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary-custom btn-lg w-100">Send Message 🚀</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="container py-5 text-center border-top">
        <div className="social-icons observe" ref={el => observerRef.current[22] = el}>
          <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
            <i className="bi-linkedin"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub">
            <i className="bi-github"></i>
          </a>
          <a href="mailto:amanjamdagni01@gmail.com" aria-label="Email">
            <i className="bi-envelope"></i>
          </a>
        </div>
        <p className="text-secondary mt-4 mb-0">&copy; 2025 Aman Sharma. Built with React + Bootstrap.</p>
      </footer>

      {/* Back to Top */}
      <button className={`back-to-top ${showTop ? 'show' : ''}`} onClick={scrollToTop} aria-label="Back to top">
        <i className="bi-arrow-up"></i>
      </button>
    </div>
  );
}

export default App;
