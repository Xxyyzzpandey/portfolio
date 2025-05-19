import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Projects</h2>
            </div>
          </div>
          
          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/creresume.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Resume Builder </h4>
                  <div className="icon">
                    <a href="https://creresume.pandeg.xyz" className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/ecomerce.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Ecommerce</h4>
                  <div className="icon">
                    <a href="https://edukan.pandeg.xyz" className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/githubinfo.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Github info</h4>
                  <div className="icon">
                    <a href="https://githubinfo.pandeg.xyz" className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/blogging.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Bloging app</h4>
                  <div className="icon">
                    <a href="https://blogingapp.vercel.app/posts" className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item */}
            <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/paytime.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>paytm wallet</h4>
                  <div className="icon">
                    <a href="https://paytime.pandeg.xyz" className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="wordpress">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/alumni.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>alumni management</h4>
                  <div className="icon">
                    <a href="https://allumnimanagement.vercel.app" className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/expense.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>expense tracker</h4>
                  <div className="icon">
                    <a href="https://expense-tracker-5o8m.vercel.app/" className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
