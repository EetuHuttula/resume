"use client"
import "./about.css"
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section className=""
    initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}>
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img
              className="img-fluid rounded shadow"
              loading="lazy"
              src="../EetuHuttula.jpg"
              alt="Eetu Huttula"
            />
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h2 className="mb-3 red-underline">Hi, I’m Eetu</h2>
                <p className="lead fs-4 text-secondary mb-3">
                  I am a passionate Full Stack developer focused on crafting
                  exceptional solutions.
                </p>
                
                <div className="row gy-4 gy-md-0 gx-xxl-5">
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="bi bi-gear-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="h4 mb-3">Learning modern development</h2>
                        <p className="text-secondary mb-0">
                          I’m actively exploring modern development practices,
                          focusing on building clean and user-friendly apps that
                          meet today’s standards.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="bi bi-fire"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="h4 mb-3">Passion and growth</h2>
                        <p className="text-secondary mb-0">
                          I approach every project with curiosity and
                          dedication, eager to learn and improve while
                          delivering the best results I can.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                 {/**  <p className="text-gray-600 mt-6">
                    I studied web development at Oulu University of Applied
                    Sciences and continued my academic journey at the University
                    of Helsinki. These studies have given me a solid foundation
                    in computer science and strong analytical thinking. I’m a
                    self-driven professional who thrives in both independent and
                    team-oriented environments—and I love solving challenging
                    problems through smart, thoughtful code.
                  </p> */} 
                  <p className="mb-5">
                  My attention to detail and collaborative approach help me
                  build high-quality applications and work effectively within
                  teams. I have experience across personal projects and larger
                  group collaborations, covering frontend and backend. I’m
                  always eager to learn new technologies and enhance my skills.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="technologies-section" className="container d-flex flex-column py-5 mt-4 border-top">
        <h1>Technologies and Skills</h1>
        {/* Frontend */}
        <div className="mb-1 p-4 border container-fluid rounded shadow-m bg-light">
          <h3 className="text-black fw mb-2 pb-2">Frontend</h3>
          <div className="flex-wrap text-center justify-content-center gap-2">
            {[
              "React",
              "Vite",
              "JavaScript",
              "TailwindCSS",
              "WordPress",
              "SEO",
              "Next.js",
              "Framer Motion",
              "Firebase Auth",
              "UI/UX Design",
              "Cypress",
              "Jest",
              "Vitest",
              "Pytest",
              "RobotFramework",
              "HTML",
              "CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold"
                style={{ cursor: "default", transition: "all 0.3s ease" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-1 p-4 border container-fluid rounded shadow-m bg-light">
          <h3 className="text-black fw mb-2 pb-2">Backend</h3>
          <div className=" flex-wrap text-center justify-content-center gap-2 p-2">
            {[
              "TypeScript",
              "Python",
              "Node.js",
              "Express",
              "PostgreSQL",
              "SQLServer",
              "MySQL",
              "SQLite",
              "MongoDB",
              "REST API",
              "JWT",
              "Firebase",
              "Postman",
            ].map((skill) => (
              <span
                key={skill}
                className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold"
                style={{ cursor: "default", transition: "all 0.3s ease" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* DevOps & Other */}
        <div className="p-4 border rounded container-fluid shadow-m bg-light">
          <h3 className="text-black fw mb-2 pb-2">
            DevOps & Other Skills
          </h3>
          <div className="flex-wrap  text-center justify-content-center gap-2">
            {[
              "GitHub",
              "GitLab",
              "Security",
              "AWS",
              "Firebase",
              "Google Cloud",
              "Server management",
              "Domain & SSL management",
              "Agile",
              "Scrum",
              "Figma",
              "Communication",
              "Troubleshooting",
              "Team Management",
            ].map((skill) => (
              <span
                key={skill}
                className="badge text-dark border border-dark px-3 py-2 m-1 rounded fw-semibold"
                style={{ cursor: "default", transition: "all 0.3s ease" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>¨
    </motion.section>
  );
}
