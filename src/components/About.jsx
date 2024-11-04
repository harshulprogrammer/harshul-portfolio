import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export const About = () => {
  return (
    <>
      <div className="about" id="about-me">
        <h1 className="sec-name">about.about.about.about</h1>
        <div className="sec">
          <div className="about-first">
            <h1 className="title">
              Need a Software Engineer, Who can make your processes smooth?
            </h1>
            <div className="about-description">
              <span className="title-description">
                As a passionate and energetic Software Engineer eager to
                leverage my skills and knowledge in Software Development. I have
                a strong foundation in both frontend and backend technologies,
                It's Enable me to develop highly secured and scalable software
                solutions.
              </span>
            </div>
            <div className="about-description">
              <span className="title-description">
                With consistent learning and collabrative mindset, I am ready to
                contribute in dynamic teams and work to build optimized
                processes with the commitment to deliver high-quality work.
              </span>
            </div>
            <span className="profession">
              Harshul Aggarwal, Software Engineer
              <br />
              BTech, CSE
            </span>
            <br />
            <a href="#my-skills">
              <button className="skills-btn">
                View More <DoubleArrowIcon style={{ paddingTop: "10px" }} />
              </button>
            </a>
          </div>
          <div className="about-second">
            <h2 style={{ borderBottom: "6px solid white" }}>
              Software Engineering
            </h2>
            <h2>Problem Solving</h2>
            <h2 style={{ borderBottom: "6px solid white" }}>Consistency</h2>
            <h2>Software Engineering</h2>
          </div>
          <div className="about-third">
            <img src="assets/Pic.png" alt="about-pic" className="about-photo" />
          </div>
        </div>
      </div>
    </>
  );
};
