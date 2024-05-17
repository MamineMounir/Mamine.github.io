import "./About.css";

import aboutimg from "../img/aboutimg.webp";

const About = () => {
  return (
    <>
      {/* hayedt vh-100  */}
      <section
        id="about"
        className=" text-dark text-center text-lg-start bg-white mt-sm-5 "
      >
        <div className="container  " id="container ">
          <div
            className="row  h-100 justify-content-center align-items-center"
            id="column"
          >
            <div
              className=" col-lg-5  col-md-12 col-12 col-xl-5  order-md-2  order-lg-2"
              id="img-contain"
            >
              <img
                src={aboutimg}
                alt=""
                className=" img-fluid  d-md-block text-center    "
                id="about-img"
              />
            </div>

            <div
              className=" col-12 col-sm-12  col-md-12 col-xl-7 col-lg-7 order-md-2 order-lg-2 "
              id="about-text"
            >
              <div id="text-container">
                <h3 className="display-3 fw-bold lh-sm fs-5 ">About me</h3>
                <p className="p">
                  Frontend developer with experience building websites and web
                  applications. I specialize in ReactJS, Bootstrap Css, and
                  Html. My role is to write and style the front-end components
                  and deliver quality work.
                </p>
                <button
                  type="button"
                  class="btn  btn-outline-secondary"
                  id="btn-cv"
                >
                  Download CV
                  <svg
                    id="downloadSvg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
