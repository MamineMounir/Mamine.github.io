import "./About.css";

import aboutimg from "../img/aboutimg.webp";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="vh-100 text-dark text-center text-lg-start bg-light mt-sm-5 "
      >
        <div className="container  " id="container ">
          <div
            className="row  h-100 justify-content-center align-items-center"
            id="column"
          >
            <div
              className=" col-lg-6  col-md-6  order-md-1  order-lg-1"
              id="img-contain"
            >
              <img
                src={aboutimg}
                alt=""
                className="mt-5 img-fluid mb-3 d-md-block text-center    "
                id="about-img"
              />
            </div>

            <div
              className=" col-lg-6 col-md-6 order-md-1 order-lg-2 "
              id="about-text"
            >
              <div id="text-container">
                <h3 className="display-3 fw-bold lh-sm fs-5 ">About me</h3>
                <h4 className="">
                  Front-end Developer <br />
                  based in maroc,Khouribga 📍
                </h4>
                <p className="p">
                  Hey, my name is Mohamed amine, and I'm a Frontend Developer.
                  My passion is to create and develop a clean UI/UX for my
                  users.
                  <br />
                  <br />
                  My main stack currently is React.js in combination with
                  Bootstrap CSS and Html.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
