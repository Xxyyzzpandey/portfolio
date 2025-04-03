
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/alsiam.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Ankit Pandey</h1>
            <p>Passionate Full Stack Developer skilled in building scalable web applications 
              with modern technologies. Experienced in front-end 
              and back-end development, creating seamless user experiences and efficient architectures.</p>
            <div className="social-links">
              <a href="https://github.com/Xxyyzzpandey" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://instagram.com/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://linkedin.com/in/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


