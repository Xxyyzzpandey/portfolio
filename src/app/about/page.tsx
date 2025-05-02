import type { NextPage } from "next";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";

const About: NextPage = () => {
  
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-2xl" />, percent: 80 },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-2xl" />, percent: 60 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-2xl" />, percent: 50 },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-2xl" />, percent: 70 },
    { name: "React.js", icon: <FaReact className="text-blue-400 text-2xl" />, percent: 85 },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" />, percent: 75 },
  ];

  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Ankit Pandey a <span>full stack developer</span>
                  </h2>
                  <p>
                    Hi! My name is Ankit . Full Stack Developer with expertise in building dynamic, scalable 
                    web applications. Proficient in front-end frameworks like React.js and Next.js, along with 
                    robust back-end technologies such as Node.js, Express.js, and databases like MongoDB and PostgreSQL. 
                    Passionate about crafting seamless user experiences,
                     optimizing performance, and implementing secure, efficient architectures. Always 
                    eager to learn and innovate in the ever-evolving tech landscape.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>https://ankit.pandeg.xyz</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>ankitdev0076@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Btech in CSE</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+91 9116244307</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Mirzapur,Uttar Pradesh</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/resume/resume.pdf"
                        target="_blank"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="/contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Html / css</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>JavaScript / Typescript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "75%" }} />
                        <div className="skill-percent">75%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Node / Expressjs</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Tailwind / Bootstrap</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Reactjs / Nextjs</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Postgress / Mongodb / Prisma</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Data Structure and Algorithim</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Docker / Kubernetes</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Kafka / Redis</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Testing / Monitoring</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>AWS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Self Taught (Programming)
                          </h4>
                          <p className="timeline-text">
                            Since 2022 I started to learn Programming. I have
                            learn front-end and back-end technologies.A self-taught
                             Full Stack Developer passionate about building scalable web applications. 
                             Proficient in front-end and back-end technologies, constantly learning and adapting to 
                             new tools and frameworks. Skilled in problem-solving, 
                            efficient coding, and delivering seamless user experiences 
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Btech in Computer science and Engineering
                          </h4>
                          <p className="timeline-text">
                            From 2022 I started my journey to be a Computer science 
                            Engineer from University Instute of Engineering and Technology (CSJM University). It
                            still Running to Present.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021
                          </h6>
                          <h4 className="timeline-title">
                            passed 12th
                          </h4>
                          <p className="timeline-text">
                            In 2021 I passed 12th standard from Glorious Academy,Varansi with
                            76.6%. 
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        {/* <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to Present
                          </h6>
                          <h4 className="timeline-title">Graphics Design</h4>
                          <p className="timeline-text">
                            From 2018 I am woking on Graphics Design. The
                            software I use Photoshop, Illustrator for Graphics
                            design.
                          </p>
                        </div> */}
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022 to Present
                          </h6>
                          <h4 className="timeline-title">Self-Driven Projects</h4>
                          <p className="timeline-text">
                          Developed multiple full-stack projects, including a Resume Builder, E-commerce platform, 
                          GitHub Information Fetcher, Expense Tracker, Alumni Management System, and a Paytm-like 
                          Digital Wallet. These projects demonstrate skills in API integration,
                           database management, user authentication, and dynamic UI/UX development.
                          </p>
                        </div>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
