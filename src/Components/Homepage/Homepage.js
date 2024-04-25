import React from "react";
import "./homepage.css";

const ProjectData = [
  {
    id: 1,
    name: "Online Game Top Up Store",
    image: "coinbazar.shop.png",
    description:
      "This Website is designed and made by me. Reactjs is userd to build the frontend and PHP into the backend.",
    url: "https://coinbazar.shop/", // Add the URL of the live website here
  },
  {
    id: 2,
    name: "Banking Website",
    image: "bank.png",
    description:
      "We have cloned a bank's website of Serbia. Please click the image or title to view the live website.",
    url: "https://tahsinhimu.github.io/projects/disk", // Add the URL of the live website here
  },
];

const Homepage = () => {
  return (
    <div>
      <div class="parent">
        <section id="homepage">
          <header>
            <div class="links">
              <a href="#homepage">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact Info</a>
            </div>
            <div class="buttons-icons">
              {/* <a href="">
                <i class="fa-solid fa-user"></i>
              </a>
              <a href="">
                <button>Login</button>
              </a> */}
            </div>
          </header>

          <div class="homepage">
            <div class="image">
              <img src="homeImage.jpeg" alt="" />
            </div>
            <div class="texts">
              <h2>Mahabubul Islam Himel</h2>
              <p>self tought</p>
              <h3>
                <span>Front-end</span> and
              </h3>
              <h3>Wordpress Developer</h3>
              <br></br>
              <a
                href="Mahabubul_Islam_Himel_CV.pdf"
                download="Mahabubul_Islam_Himel_CV.pdf"
              >
                <button>Download CV</button>
              </a>
            </div>
          </div>
        </section>

        <section id="about">
          <div class="heading">
            <h2>About Me</h2>
          </div>
          <div class="about-container">
            <div class="texts">
              <h2>
                I'm Himu, a frontend developer fueled by a passion for crafting
                immersive d vigital experiences. With proficiency in HTML, CSS,
                and JavaScript, I transform design concepts into seamless,
                user-friendly interfaces. My journey into web development
                stemmed from a fascination with technology and design, evolving
                into a dedication to excellence and continuous learning.
                Collaborating closely with designers and backend developers, I
                ensure cohesive integration and exceptional user experiences.
                Beyond coding, I prioritize understanding user behaviors and
                needs, advocating for intuitive UX/UI design principles.
                Embracing emerging technologies and methodologies, I stay ahead
                of industry trends to deliver innovative solutions. As Himu, I'm
                not just a frontend developer—I'm a visionary creator committed
                to elevating your digital presence. Let's collaborate and bring
                your ideas to life!
              </h2>
            </div>
            <div class="image">
              <img src="about-img.jpeg" alt="" />
            </div>
          </div>
        </section>

        <section id="skills">
          <div class="heading">
            <h2>Skills</h2>
          </div>
          <div class="skills-container">
            <div class="row">
              <i class="fa-brands fa-react"></i>
              <p>REACT.JS</p>
            </div>
            <div class="row">
              <i class="fa-brands fa-html5"></i>
              <p>HTML</p>
            </div>
            <div class="row">
              <i class="fa-brands fa-css3-alt"></i>
              <p>CSS</p>
            </div>
            <div class="row">
              <i class="fa-brands fa-react"></i>
              <p>
                TAILWIND
                <br />
                CSS
              </p>
            </div>
            <div class="row">
              <i class="fa-brands fa-wordpress"></i>
              <p>WORDPRESS</p>
            </div>
            <div class="row">
              <i class="fa-brands fa-php"></i>
              <p>PHP</p>
            </div>
          </div>
          <div class="skills-button">
            <a href="">
              <button>Show More</button>
            </a>
          </div>
        </section>

        <section id="projects">
          <div class="heading">
            <h2>Projects</h2>
          </div>
          <div class="projects-container">
            {ProjectData.map((item) => (
              <div class="project" key={item.id}>
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a href={item.url}>
                  <button>View Project</button>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="education">
          <div class="heading">
            <h2>Education</h2>
          </div>
          <div class="education-container">
            <div class="degree">
              <h4>JSC</h4>
              <h3>Monipur High School And College</h3>
              <p>2016</p>
              <h1>CGPA: 4.78</h1>
            </div>
            <div class="degree">
              <h4>SSC</h4>
              <h3>HajiAshraf Ali High School.</h3>
              <p>2020</p>
              <h1>CGPA: 3.45</h1>
            </div>
            <div class="degree">
              <h4>Higher School Certificate</h4>
              <h3>Mirpur College</h3>
              <p>2023</p>
              <h1>CGPA: 3.58</h1>
            </div>
            <div class="degree">
              <h4>Bachelor of Business Administration.</h4>
              <h3>American International University Bangladesh</h3>
              <p>Undergraduate</p>
              <h1>CGPA: --- </h1>
            </div>
          </div>
        </section>

        <section id="contact">
          <div class="heading">
            <h2>Contact Infos</h2>
          </div>
          <div class="contact-info-container">
            <div class="social-media">
              <div class="social-media-links">
                <div class="social-media-heading">
                  <h5>Social Media Links</h5>
                </div>
                <div class="social-media-container">
                  <a href="">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-linkedin"></i>{" "}
                  </a>
                </div>

                <div class="social-media-heading">
                  <h5>Other Infos</h5>
                </div>
                <div class="other-infos-container">
                  <a href="">
                    <div class="infos">
                      <i class="fa-solid fa-envelope"></i>
                      <h4>tahsinhimu71@gmail.com</h4>
                    </div>
                  </a>
                  <a href="">
                    <div class="infos">
                      <i class="fa-solid fa-phone"></i>
                      <h4>+880-16343-31358</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="contact-form">
              <form action="">
                <div class="inputs">
                  <label for="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email Here!"
                  />
                </div>
                <div class="inputs">
                  <label for="messege">Your Messege Here</label>
                  <textarea
                    name=""
                    id="messege"
                    cols="30"
                    rows="10"
                    placeholder="Enter Your Messege Here!"
                  ></textarea>
                </div>
                <div class="contact-form-buttons">
                  <button>SEND</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <div class="claim">
          <h3>
            All Rights Reserved By<a href="">@tahsinhimu</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
