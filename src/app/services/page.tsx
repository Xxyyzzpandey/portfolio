import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
      <section className="service section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Our Services</h2>
          </div>
        </div>
        <div className="row">
          
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon"><i className="fa fa-laptop" /></div>
              <h4>Custom Web Design</h4>
              <p>Create a stunning online presence with our custom web design services. Wel will tailor a website that
                not only
                looks impressive but also delivers a seamless user experience, helping you achieve your online goals.
              </p>
            </div>
          </div>
          
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon"><i className="fa fa-code" /></div>
              <h4>Web Development</h4>
              <p>Turn your digital ideas into reality with our web development solutions. We specialize in crafting
                robust
                and dynamic websites that are tailored to meet your specific business needs and objectives.</p>
            </div>
          </div>
          
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon"><i className="fa fa-rocket" /></div>
              <h4>SEO Optimization</h4>
              <p>Boost your online visibility and drive organic traffic to your website with our SEO optimization
                services.
                Our experts employ proven strategies to improve your search engine rankings and grow your online
                presence.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default Service;
