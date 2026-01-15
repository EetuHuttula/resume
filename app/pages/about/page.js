import "./about.css";

export default function About() {
  return (
    <section id="about" className="about-container py-5">
      <div className="container">
        <div className="content-wrapper bg-white p-4 p-md-5 rounded-3 shadow-lg">
          {/* Personal Info Section */}
          <div className="row align-items-center mb-5">
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <div className="image-wrapper">
                <img
                  className="img-fluid rounded-3 shadow-lg"
                  loading="lazy"
                  src="./EetuHuttula.jpg"
                  alt="Eetu Huttula"
                />
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="ps-lg-4">
                <h2 className="mb-3 display-5 fw-bold">Hi, I'm Eetu</h2>
                <p className="lead fs-4 text-secondary mb-4">
                  I am a 26-year-old Computer Science student, entrepreneur, and
                  Full Stack developer from Helsinki, passionate about creating
                  modern, high-performance web applications.
                </p>

                <div className="row g-4 mb-4">
                  <div className="col-12 col-md-6">
                    <div className="d-flex align-items-start">
                      <div className="icon-box me-3 bg-primary bg-opacity-10 rounded-3 p-3">
                        <i className="fa-solid fa-briefcase fs-4 text-primary"></i>
                      </div>
                      <div>
                        <h3 className="h5 mb-2">Entrepreneur & Developer</h3>
                        <p className="text-secondary mb-0">
                          Founded SoftaKoppi in 2024, delivering custom web
                          solutions to clients including Paintem, Baskeri
                          Production, and Peten Pisnes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex align-items-start">
                      <div className="icon-box me-3 bg-primary bg-opacity-10 rounded-3 p-3">
                        <i className="fa-solid fa-chess fs-4 text-primary"></i>
                      </div>
                      <div>
                        <h3 className="h5 mb-2">Strategic Thinker</h3>
                        <p className="text-secondary mb-0">
                          Passionate chess player in my free time. I love
                          problem-solving and strategic thinking, both on and
                          off the board.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="h3 mb-4">Professional Experience</h2>
              <div className="education-card p-4 rounded-3 border bg-light">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div>
                    <h3 className="h5 text-primary mb-1">
                      Web Developer & CEO
                    </h3>
                    <p className="text-secondary mb-1 fw-semibold">
                      SoftaKoppi
                    </p>
                    <p className="text-muted small">2024 - Present</p>
                  </div>
                  <i className="fa-solid fa-briefcase fs-3 text-primary opacity-25"></i>
                </div>
                <ul className="text-secondary mb-3">
                  <li className="mb-2">
                    Founded a web development company and delivered 3 client
                    projects
                  </li>
                  <li className="mb-2">
                    Rebuilt Paintem's website, significantly improving user
                    experience
      
                  </li>
                  <li className="mb-2">
                    Developed custom websites for Baskeriproduction and
                    Petenpisnekset
                  </li>
                  <li>
                    Managed full project lifecycle from client negotiations to
                    deployment and maintenance
                  </li>
                </ul>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-primary bg-opacity-25 text-primary px-3 py-2">
                    Next.js
                  </span>
                  <span className="badge bg-primary bg-opacity-25 text-primary px-3 py-2">
                    TailwindCSS
                  </span>
                  <span className="badge bg-primary bg-opacity-25 text-primary px-3 py-2">
                    JavaScript
                  </span>
                  <span className="badge bg-primary bg-opacity-25 text-primary px-3 py-2">
                    React
                  </span>
                  <span className="badge bg-primary bg-opacity-25 text-primary px-3 py-2">
                    PHP
                  </span>
                  <span className="badge bg-primary bg-opacity-25 text-primary px-3 py-2">
                    Responsive Design
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="h3 mb-4 mt-4">Education & Future Plans</h2>
              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <div className="education-card p-4 rounded-3 border bg-light">
                    <h3 className="h5 text-primary">University of Helsinki</h3>
                    <p className="text-secondary mb-1">
                      Bachelor of Science in Computer Science
                    </p>
                    <p className="text-muted mb-3">2023 - present</p>
                    <ul className="text-secondary small list-unstyled">
                      <li className="mb-2">
                        <i className="fa-solid fa-check me-2 text-primary"></i>
                        Specializing in cybersecurity and REST API development
                      </li>
                      <li className="mb-2">
                        <i className="fa-solid fa-check me-2 text-primary"></i>
                        Python programming and Flask framework
                      </li>
                      <li className="mb-2">
                        <i className="fa-solid fa-check me-2 text-primary"></i>
                        Web application architecture
                      </li>
                      <li className="mb-2">
                        <i className="fa-solid fa-check me-2 text-primary"></i>
                        Advanced Data Structures and Algorithms
                      </li>
                      <li>
                        <i className="fa-solid fa-check me-2 text-primary"></i>
                        Project work in Agile environments
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="education-card p-4 rounded-3 border bg-light">
                    <h3 className="h5 text-primary">
                      Oulu University of Applied Sciences
                    </h3>
                    <p className="text-secondary mb-1">
                      Bachelor of Business Administration, Business Information
                      Technology
                    </p>
                    <p className="text-muted mb-3">2022 - 2023</p>
                    <ul className="text-secondary small list-unstyled">
                      <li className="mb-2">
                        <i className="fa-solid fa-check me-2 text-primary"></i>
                        Built 2 fully functional e-commerce sites
                      </li>
                      <li className="mb-2">
                        <i className="fa-solid fa-check me-2 text-primary"></i>
                        Created a Vauva.fi-style content platform
                      </li>
                      <li className="mb-2">
                        <i className="fa-solid fa-check me-2 text-primary"></i>
                        React, PHP, and MySQL development
                      </li>
                      <li className="mb-2">
                        <i className="fa-solid fa-check me-2 text-primary"></i>
                        WordPress and WooCommerce
                      </li>
                      <li>
                        <i className="fa-solid fa-check me-2 text-primary"></i>
                        Real client project experience
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12">
                  <div className="education-card p-4 rounded-3 border bg-primary bg-opacity-10">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fa-solid fa-graduation-cap fs-4 text-primary me-3"></i>
                      <h3 className="h5 text-primary mb-0">
                        Future Academic Goals
                      </h3>
                    </div>
                      <p className="text-secondary mb-3">
                        I'm passionate about Data Structures and Algorithms, and
                        they’ve strongly influenced my academic journey. I'm
                        aiming for a Master's degree in Algorithm Design and
                        Analysis, and I love tackling challenging
                        problems—whether it's optimizing a system, improving
                        efficiency in a project, or experimenting with new
                        approaches. Some of the areas I find most exciting
                        include:
                      </p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      <span className="badge bg-primary bg-opacity-25 text-primary px-3 py-2">
                        Algorithm Optimization
                      </span>
                      <span className="badge bg-primary bg-opacity-25 text-primary px-3 py-2">
                        Problem Solving with Algorithms
                      </span>
                      <span className="badge bg-primary bg-opacity-25 text-primary px-3 py-2">
                        Trees & Graphs
                      </span>
                      <span className="badge bg-primary bg-opacity-25 text-primary px-3 py-2">
                        Cybersecurity
                      </span>
                    </div>
                    <p className="text-secondary mb-0 small">
                      This foundation in algorithmic thinking and security helps
                      me write more efficient, scalable, and secure code. I'm
                      excited to deepen this knowledge in graduate studies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="h3 mb-4">Featured Projects</h2>
              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <div className="education-card p-4 rounded-3 border bg-light">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <h3 className="h5 text-primary mb-0">
                        Paintem Website Redesign
                      </h3>
                    </div>
                    <p className="text-muted small mb-3">2024</p>
                    <p className="text-secondary small mb-3">
                      Complete website overhaul for a client, modernizing the
                      design, enhancing user experience, and optimizing
                      performance.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-secondary bg-opacity-25 text-secondary px-2 py-1 small">
                        Next.js
                      </span>
                      <span className="badge bg-secondary bg-opacity-25 text-secondary px-2 py-1 small">
                        TailwindCSS
                      </span>
                      <span className="badge bg-secondary bg-opacity-25 text-secondary px-2 py-1 small">
                        Bootstrap
                      </span>
                      <span className="badge bg-secondary bg-opacity-25 text-secondary px-2 py-1 small">
                        Framer Motion
                      </span>
                      <span className="badge bg-secondary bg-opacity-25 text-secondary px-2 py-1 small">
                        PHP
                      </span>
                        <span className="badge bg-secondary bg-opacity-25 text-secondary px-2 py-1 small">
                        SEO Optimization
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="education-card p-4 rounded-3 border bg-light">
                    <h3 className="h5 text-primary mb-2">
                      E-commerce & Content Platforms
                    </h3>
                    <p className="text-muted small mb-3">2022 - 2023</p>
                    <p className="text-secondary small mb-3">
                      Built 2 fully functional e-commerce sites and a
                      Vauva.fi-style content platform with user management,
                      shopping cart, payment systems, and admin panels.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-secondary bg-opacity-25 text-secondary px-2 py-1 small">
                        React
                      </span>
                      <span className="badge bg-secondary bg-opacity-25 text-secondary px-2 py-1 small">
                        PHP
                      </span>
                      <span className="badge bg-secondary bg-opacity-25 text-secondary px-2 py-1 small">
                        MySQL
                      </span>
                      <span className="badge bg-secondary bg-opacity-25 text-secondary px-2 py-1 small">
                        WordPress
                      </span>
                        <span className="badge bg-secondary bg-opacity-25 text-secondary px-2 py-1 small">
                        Next.js
                      </span>
                        <span className="badge bg-secondary bg-opacity-25 text-secondary px-2 py-1 small">
                        Python
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="row">
            <div className="col-12">
              <div id="technologies-section" className="pt-2">
                <div>
                  <h1 className="mb-4">Technologies and Skills</h1>
                  <p className="text-secondary mb-5">
                    My technical toolkit is constantly evolving. Here are the
                    key technologies and skills I work with:
                  </p>

                  {/* Frontend */}
                  <div className="skill-section mb-4 p-4 border rounded shadow-lg bg-white">
                    <h3 className="text-primary fw-bold mb-3">
                      <i className="fa-solid fa-code me-2"></i>
                      Frontend Development
                    </h3>
                    <p className="text-secondary mb-3">
                      Specializing in modern JavaScript frameworks and
                      responsive design principles.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        React
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Next.js
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        JavaScript
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        TypeScript
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        TailwindCSS
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Bootstrap
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Framer Motion
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        HTML5/CSS3
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Responsive Design
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        SEO Optimization
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Testing (Jest/Cypress/Pytest)
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        UI/UX Design
                      </span>
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="skill-section mb-4 p-4 border rounded shadow-lg bg-white">
                    <h3 className="text-primary fw-bold mb-3">
                      <i className="fa-solid fa-server me-2"></i>
                      Backend Development
                    </h3>
                    <p className="text-secondary mb-3">
                      Building robust server-side applications and APIs with
                      modern technologies.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Node.js
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Python
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Flask
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Express
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        PHP
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        PostgreSQL
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        MongoDB
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        MySQL
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        REST APIs
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Firebase
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Authentication/JWT
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        WordPress
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        WooCommerce
                      </span>
                    </div>
                  </div>

                  {/* DevOps & Tools */}
                  <div className="skill-section p-4 border rounded shadow-lg bg-white">
                    <h3 className="text-primary fw-bold mb-3">
                      <i className="fa-solid fa-wrench me-2"></i>
                      DevOps & Tools
                    </h3>
                    <p className="text-secondary mb-3">
                      Experience with modern development workflows and cloud
                      platforms.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Git/GitHub
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        AWS
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Docker
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        CI/CD
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Cloud Platforms
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Agile/Scrum
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Linux
                      </span>
                      <span className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold">
                        Cybersecurity
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
