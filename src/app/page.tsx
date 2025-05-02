
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/boyimage.jpg"
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
              <a href="https://leetcode.com/u/Tmetasploit/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-code" />
              </a>
              <a href="https://www.geeksforgeeks.org/user/ujjawalanam32/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-graduation-cap" />
              </a>


            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


